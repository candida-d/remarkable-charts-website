import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export function ValueProp() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.meta}>
        <h2 className={styles.title}>Create beautiful charts</h2>
        <div className={styles.desc}>
          Remarkable Charts makes it quick and easy to create stunning charts.
        </div>
      </div>
      <div className={styles.media}>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/qOPbGnmBTSI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
