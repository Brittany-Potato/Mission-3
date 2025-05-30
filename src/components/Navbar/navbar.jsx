import React from "react";
import styles from "./navbar.module.css";

export default function navbar() {
  return (
    <div className={styles.MainDiv}>
      <img src="../../images/turnerslogo.png" alt="" className={styles.logo} />
      <div className={styles.navlinks}>
        <h2>
          {/* Links lead to relevant pages from the real turners website */}
          <span className={styles.login}><a href="https://www.turners.co.nz/Login/?ReturnUrl=/">Login</a></span>{" "}
          <span className={styles.or}>Or</span>{" "}
          <span className={styles.register}><a href="https://www.turners.co.nz/Login/Registration/">Register</a></span>
        </h2>
        <h3 className={styles.contact}>0800 887 637</h3>
        <h3 className={styles.findus}><a href="https://www.turners.co.nz/Company/Branches/">Find Us</a></h3>
      </div>
    </div>
  );
}
