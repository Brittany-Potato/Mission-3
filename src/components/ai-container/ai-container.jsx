import React, { useEffect, useState, useRef } from "react";
import styles from "./ai-container.module.css";
import axios from "axios";

export default function AiContainer() {
  // variables for sessionID and job description
  const [jobTitle, setJobTitle] = useState("");
  const [sessionIdInput, setSessionIdInput] = useState("");
  const [activeSessionId, setActiveSessionId] = useState(null);

  // variables for chat
  // Array of objects to contain chat, will use format needed for gemini API
  const [sessionChat, setSessionChat] = useState([]);
  // users message to chat
  const [userMessageToChat, setUserMessageToChat] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const scrollChatToCurrent = useRef(null);

  const backendUrl = "http://localhost:3000";

  // to scroll Chat to current message, useEffect will trigger whenever sessionChat changes:
  useEffect(() => {
    if (scrollChatToCurrent.current) {
      scrollChatToCurrent.current.scrollTop =
        scrollChatToCurrent.current.scrollHeight;
    }
  }, [sessionChat]);

  //sessionChat is array of objects, converting to string of text for display, with names to show who's talking, uses format needed for gemini
  const formatChatForDisplay = () => {
    return sessionChat
      .map((entry) => {
        const speaker = entry.role === "user" ? "You" : "Interviewer";
        return `${speaker}: ${entry.parts[0].text}`;
      })
      .join("\n\n");
  };

  //* ----------Connecting to the backend

  // test
  // try {
  //   const res = await axios.post('http://localhost:3000/ai', {inputText});
  //   setResponse(res.data.message);
  // } catch(err) {
  //   console.log('Error sending data', err);
  //   setResponse('Error submitting data');
  // }

  // Starting new session, or continuing session
  const submitSessionId = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    // fetch to load existing session or create new one
    const sessionIdToLoad = sessionIdInput.trim();
    console.log(`sessionId set to ${sessionIdToLoad} ready to send to backend`);
    // if there's an old session to load will fetch, if not fetch to start a new session
    try {
      let response;
      if (sessionIdToLoad) {
        response = await axios.get(
          `${backendUrl}/session?sessionId=${sessionIdToLoad}`
        );
      } else {
        response = await axios.get(`${backendUrl}/session`);
      }

      const {
        sessionId: receivedSessionId,
        conversationHistory: loadedHistory,
      } = response.data;

      setActiveSessionId(receivedSessionId);
      //loading history or empty array if it's a new session
      setSessionChat(loadedHistory || []);

      if (!sessionIdToLoad) {
        alert(
          `New Interview Session Started: Your Session ID is: ${receivedSessionId}, please copy this down if you want to stop the session and resume at a later date.`
        );
      } else {
        alert(
          `Your Session ${receivedSessionId} loaded, lets continue your interview.`
        );
      }

      setSessionIdInput("");
    } catch (err) {
      console.error("Error starting/loading session:", err);
      let messageToDisplay;
      if (err.response && err.response.status === 404) {
        messageToDisplay =
          "Session ID not found. Please Check the ID you input and try again or start a new session";
      } else {
        messageToDisplay = "Failed to start session. Please try again";
      }
      alert(messageToDisplay);
      setError(messageToDisplay);

      setActiveSessionId(null);
      setSessionChat([]);
    } finally {
      setIsLoading(false);
    }
  };

  //* ------------Handles the submit button and sends data to the textarea
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // In case user hasnt done step 1, start/load session
    if (!activeSessionId) {
      const messageToDisplay = "Please start or load a session first.";
      setError(messageToDisplay);
      alert(messageToDisplay);
      return;
    }
    // in case no user message, no job title, no chat
    if (
      !userMessageToChat.trim() &&
      !jobTitle.trim() &&
      sessionChat.length === 0
    ) {
      const messageToDisplay =
        "Please enter a jobtitle, and message to the interviewer to carry on the session.";
      setError(messageToDisplay);
      alert(messageToDisplay);
      return;
    }

    setIsLoading(true);

    //formatting message for backend
    const newUserMessage = {
      role: "user",
      parts: [{ text: userMessageToChat }],
    };
    //updating chat with users message straight away (apparently this is called an 'optimistic update')
    const updatedChat = [...sessionChat, newUserMessage];

    setSessionChat(updatedChat);
    setUserMessageToChat("");

    try {
      const response = await axios.post(`${backendUrl}/chat`, {
        sessionId: activeSessionId,
        contents: updatedChat,
        jobTitle: jobTitle,
      });

      const aiResponse = response.data.aiResponse;

      setSessionChat((prevChat) => [
        ...prevChat,
        { role: "model", parts: [{ text: aiResponse }] },
      ]);
    } catch (err) {
      console.error("Error sending message:", err);
      const messageToDisplay =
        "Failed to get an AI response, please try again.";
      setError(messageToDisplay);
      alert(messageToDisplay);
      //if submit fails, changes back session chat to what it was before attempted latest message.
      setSessionChat(sessionChat);
    } finally {
      setIsLoading(false);
      setUserMessageToChat("");
    }
  };

  return (
    //* ~~~~~~~~~~| Outside container |~~~~~~~~~~~~~
    <div className={styles.outsideAiContainer}>
      {/* ~~~~~~~~~~~~| Interview Wrapper |~~~~~~~~~~~~~~~ */}
      <div className={styles.interviewWrapper}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.jobTitleInput}
            placeholder="Job Application Position"
            onChange={(e) => setJobTitle(e.target.value)}
            disabled={isLoading || activeSessionId}
          />

          <input
            type="text"
            className={styles.userSessionIdInput}
            placeholder="Previous Session ID"
            onChange={(e) => setSessionIdInput(e.target.value)}
            disabled={isLoading || activeSessionId}
          />

          <textarea
            ref={scrollChatToCurrent}
            name="mainChatContainer"
            className={styles.mainChatContainer}
            value={formatChatForDisplay()}
            readOnly
            rows={15}
            cols={60}
            placeholder={
              activeSessionId
                ? "Type response below..."
                : "To resume your session put your session ID in the Session ID input box. To start a new session leave the session ID blank"
            }
          ></textarea>

          <input
            type="text"
            className={styles.chatBox}
            placeholder={
              activeSessionId
                ? "Write message here"
                : "Start  new Session First"
            }
            onChange={(e) => setUserMessageToChat(e.target.value)}
            value={userMessageToChat}
            disabled={isLoading || !activeSessionId}
          />

          <button
            className={styles.submitButton}
            type="submit"
            disabled={
              isLoading || !activeSessionId || !userMessageToChat.trim()
            }
          >
            {isLoading ? "Sending..." : "Submit Response"}
          </button>
        </form>
        <p className={styles.currentID}>
          Session ID: {activeSessionId || "No Session"}
        </p>
        <button
          className={styles.sessionIdSubmitButton}
          type="button"
          onClick={submitSessionId}
          disabled={isLoading || activeSessionId}
        >
          Start Session
        </button>
      </div>
    </div>
  );
}
