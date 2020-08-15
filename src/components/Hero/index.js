import React, { useState } from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Modal } from "@fluentui/react";
import { Chart } from "../Chart";
import styles from "./styles.module.css";

export function Hero({ tagline }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.wrapper}>
      <div className={styles.pitch}>
        <h1 className={styles.title}>{tagline}</h1>
        <div className={styles.subtitle}>
          Remarkable Charts is an add-in for Excel. It makes creating stunning
          charts quick and easy.
        </div>
        <div className={styles.pitchActions}>
          <Link
            className={classnames("button button--primary", styles.button)}
            to={useBaseUrl("docs/installing")}
          >
            Get Started
          </Link>
          <button
            className={classnames("button button--primary", styles.button)}
            onClick={() => setShowModal(true)}
          >
            Watch video
          </button>
        </div>
      </div>
      <section className={styles.content}>
        <div className={styles.primary}>
          <div className={styles.chartWrapper}>
            <Chart />
          </div>
        </div>
        <div className={styles.secondary}>
          <span className={styles.secondarySubheading}>Available for</span>
          <div className={styles.platformList}>
            <div className={styles.platformItem}>Office on the web</div>
            <div className={styles.platformItem}>Office on Windows</div>
            <div className={styles.platformItem}>Office 2019 on Windows</div>
            <div className={styles.platformItem}>Office 2016 on Windows</div>
            <div className={styles.platformItem}>Office 2013 on Windows</div>
            <div className={styles.platformItem}>Office on Mac</div>
            <div className={styles.platformItem}>Office 2019 on Mac</div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={showModal}
        onDismiss={() => {
          setShowModal(false);
        }}
        isBlocking={false}
        styles={{
          main: {
            width: "80vw",
            height: `${80 / (16 / 9)}vw`,
          },
          scrollableContent: {
            height: "100%",
          },
        }}
      >
        <div className={styles.media}>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/qOPbGnmBTSI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </header>
  );
}
