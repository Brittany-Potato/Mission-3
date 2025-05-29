import React from "react";
import styles from "./ai-container.module.css";

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
