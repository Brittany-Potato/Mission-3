import React, { useEffect, useState } from "react";
import styles from "./ai-container.module.css";

function App(){
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(``)
  })
}

export default function aicontainer() {
  return (
    // ~~~~~~~~~~| Outside container |~~~~~~~~~~~~~
    <div className={styles.outsideAiContainer}>
      {/* ~~~~~~~~~~~~| Interview Wrapper |~~~~~~~~~~~~~~~ */}
      <div className={styles.interviewWrapper}>
        <input
          type="text"
          className={styles.jobTitleInput}
          placeholder="Job Application Position"
        />

        <textarea
          name="mainChatContainer"
          className={styles.mainChatContainer}
        ></textarea>

        <input
          type="text"
          className={styles.chatBox}
          placeholder="Write prompt here"
        />

        <button className={styles.submitButton}>Submit Response</button>
      </div>
    </div>
  );
}
