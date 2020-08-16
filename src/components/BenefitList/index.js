import React from "react";
import styles from "./styles.module.css";

export function BenefitList({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
