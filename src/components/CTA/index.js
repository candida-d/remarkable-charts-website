import React from "react";
import styles from "./styles.module.css";

export function CTA({ text, action }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hrWrapper}>
        <hr className={styles.hr} />
      </div>
      <div className={styles.inner}>
        <div className={styles.text}>{text}</div>
        <div className={styles.action}>{action}</div>
      </div>
    </div>
  );
}
