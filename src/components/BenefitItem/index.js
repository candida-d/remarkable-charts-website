import React from "react";
import styles from "./styles.module.css";

export function BenefitItem({ image, title, desc, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>{image}</div>
      <div className={styles.meta}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
        {children && <div className={styles.children}>{children}</div>}
      </div>
    </div>
  );
}
