import React, { useEffect, useState } from "react";
import styles from "./ai-container.module.css";

export default function aicontainer() {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

  //* ----------Connecting to the backend

  // try {
  //   const res = await axios.post('http://localhost:3000/ai', {inputText});
  //   setResponse(res.data.message);
  // } catch(err) {
  //   console.log('Error sending data', err);
  //   setResponse('Error submitting data');
  // }

  //* ------------Handles the submit button and sends data to the textarea
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(setInputText);
    console.log(res.data.message);
    // Showing the submit buttons connected and responding
    console.log("Submitted ~~ Submit buttons working");
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
            onChangeCapture={(e) => setInputValue(e.target.value)}
          />

          <textarea
            name="mainChatContainer"
            className={styles.mainChatContainer}
            onChange={(e) => setInput(e.target.value)}
            value={inputText}
            readOnly
            rows={5}
            cols={40}
          ></textarea>

          <input
            type="text"
            className={styles.chatBox}
            placeholder="Write prompt here"
            onChangeCapture={(e) => setInputValue(e.target.value)}
            // value={inputText}
            // onChange={(e) => setInputText(e.target.value)}
          />

          <button className={styles.submitButton} type="submit">
            Submit Response
          </button>
        </form>
      </div>
    </div>
  );
}
