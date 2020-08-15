import React from "react";
import styles from "./styles.module.css";

export function PlaceholderAspectRatio({ ratio, ...props }) {
  return (
    <Wrapper
      className={styles.wrapper}
      style={{ paddingBottom: `calc(100% * ${ratio})` }}
      {...props}
    />
  );
}
