// AiContainer.jsx
import React, { useEffect, useState, useRef } from "react";
import styles from "./ai-container.module.css";
import axios from 'axios';

export default function AiContainer() {
  const [jobTitle, setJobTitle] = useState("");
  const [sessionIdInput, setSessionIdInput] = useState("");
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [sessionChat, setSessionChat] = useState([]);
  const [userMessageToChat, setUserMessageToChat] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const scrollChatToCurrent = useRef(null);
  const backendUrl = 'http://localhost:3000';

  useEffect(() => {
    if (scrollChatToCurrent.current) {
      scrollChatToCurrent.current.scrollTop = scrollChatToCurrent.current.scrollHeight;
    }
  }, [sessionChat]);

  const formatChatForDisplay = () => {
    return sessionChat.map(entry => {
      const speaker = entry.role === 'user' ? 'You' : 'Interviewer';
      return `${speaker}: ${entry.parts[0].text}`;
    }).join('\n\n');
  };

  const submitSessionId = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const sessionIdToLoad = sessionIdInput.trim();

    try {
      let response;
      if (sessionIdToLoad) {
        response = await axios.get(`${backendUrl}/session?sessionId=${sessionIdToLoad}`);
      } else {
        response = await axios.get(`${backendUrl}/session`);
      }

      const { sessionId: receivedSessionId, conversationHistory: loadedHistory } = response.data;

      setActiveSessionId(receivedSessionId);
      setSessionChat(loadedHistory || []);

      alert(sessionIdToLoad
        ? `Your Session ${receivedSessionId} loaded. Let's continue.`
        : `New Session Started. Your Session ID is ${receivedSessionId}`);

      setSessionIdInput("");
    } catch (err) {
      console.error("Error starting/loading session:", err);
      const messageToDisplay = err.response?.status === 404
        ? "Session ID not found. Please try again or start a new session."
        : "Failed to start session. Please try again.";

      alert(messageToDisplay);
      setError(messageToDisplay);
      setActiveSessionId(null);
      setSessionChat([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!activeSessionId) {
      const msg = "Please start or load a session first.";
      alert(msg);
      setError(msg);
      return;
    }
    if (!userMessageToChat.trim() && !jobTitle.trim() && sessionChat.length === 0) {
      const msg = "Please enter a job title and a message.";
      alert(msg);
      setError(msg);
      return;
    }

    setIsLoading(true);
    const newUserMessage = { role: "user", parts: [{ text: userMessageToChat }] };
    const updatedChat = [...sessionChat, newUserMessage];

    setSessionChat(updatedChat);
    setUserMessageToChat("");

    try {
      const response = await axios.post(`${backendUrl}/chat`, {
        sessionId: activeSessionId,
        contents: updatedChat,
        jobTitle
      });

      const aiResponse = response.data.aiResponse;
      setSessionChat(prev => [...prev, { role: 'model', parts: [{ text: aiResponse }] }]);
    } catch (err) {
      console.error("Error sending message:", err);
      const msg = 'Failed to get a response. Try again.';
      alert(msg);
      setError(msg);
      setSessionChat(sessionChat); // rollback
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.outsideAiContainer}>
      <div className={styles.interviewWrapper}>
        <form onSubmit={handleSubmit} className={styles.chatForm}>
          <div className={styles.inputRow}>
            <input
              type="text"
              className={styles.jobTitleInput}
              placeholder="Job Title"
              onChange={(e) => setJobTitle(e.target.value)}
              disabled={isLoading || activeSessionId}
            />
            <input
              type="text"
              className={styles.userSessionIdInput}
              placeholder="Session ID"
              onChange={(e) => setSessionIdInput(e.target.value)}
              disabled={isLoading || activeSessionId}
            />
            <button
              className={styles.button}
              type="button"
              onClick={submitSessionId}
              disabled={isLoading || activeSessionId}
            >
              Start Session
            </button>
          </div>

          <div ref={scrollChatToCurrent} className={styles.chatLog}>
            {sessionChat.map((entry, i) => (
              <div key={i} className={entry.role === "user" ? styles.userBubble : styles.aiBubble}>
                {entry.parts[0].text}
              </div>
            ))}
          </div>

          <input
            type="text"
            className={styles.chatBox}
            placeholder={activeSessionId ? "Write your message..." : "Start a session first"}
            value={userMessageToChat}
            onChange={(e) => setUserMessageToChat(e.target.value)}
            disabled={isLoading || !activeSessionId}
          />

          <button
            className={styles.button}
            type="submit"
            disabled={isLoading || !activeSessionId || !userMessageToChat.trim()}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>

        <p className={styles.currentID}>Session ID: {activeSessionId || "No Session"}</p>
        {error && <p className={styles.errorText}>{error}</p>}
      </div>
    </div>
  );
}
