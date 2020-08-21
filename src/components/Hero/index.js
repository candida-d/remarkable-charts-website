import React, { useRef, useState } from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {
  Modal,
  Coachmark,
  DirectionalHint,
  TeachingBubbleContent,
  Text,
} from "@fluentui/react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Chart } from "../Chart";
import styles from "./styles.module.css";

const Chevron = () => (
  <svg
    viewBox="0 0 1024 1024"
    width="20px"
    height="20px"
    className={styles.chevron}
  >
    <path
      d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"
      className={styles.chevron}
    ></path>
  </svg>
);

export function Hero({ tagline }) {
  const target = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isCoachmarkVisible, setIsCoachmarkVisible] = useState(true);
  const [isCoachmarkDismissed, setIsCoachmarkDismissed] = useLocalStorage(
    "isCoachmarkDismissed",
    false
  );

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
            Get started
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
          <div className={styles.chartWrapper} ref={target}>
            <Chart />
            {isCoachmarkVisible && !isCoachmarkDismissed && (
              <Coachmark
                target={target.current}
                positioningContainerProps={{
                  directionalHint: DirectionalHint.topRightEdge,
                  doNotLayer: false,
                }}
                ariaAlertText="A coachmark has appeared"
                ariaDescribedBy="coachmark-desc1"
                ariaLabelledBy="coachmark-label1"
                ariaDescribedByText="Press enter or alt + C to open the coachmark notification"
                ariaLabelledByText="Coachmark notification"
              >
                <TeachingBubbleContent
                  headline="You can interact with this chart"
                  hasCloseButton
                  isWide={false}
                  hasSmallHeadline={false}
                  closeButtonAriaLabel="Close"
                  primaryButtonProps={{
                    text: "Maybe later",
                    onClick: () => {
                      setIsCoachmarkVisible(false);
                      setIsCoachmarkDismissed(true);
                    },
                  }}
                  secondaryButtonProps={{
                    text: "Try it out",
                    onClick: () => {
                      setIsCoachmarkVisible(false);
                      setIsCoachmarkDismissed(true);

                      try {
                        document
                          .getElementsByClassName(
                            "ms-Button ms-Button--icon ms-Button--hasMenu"
                          )[0]
                          .click();
                      } catch (error) {
                        console.warn("Could not open chart menu");
                        console.error(error);
                      }
                    },
                  }}
                  onDismiss={() => setIsCoachmarkVisible(false)}
                >
                  <Text>
                    <p>Use the menu at the top-right of the chart to:</p>
                    <ul>
                      <li>Edit the chart</li>
                      <li>View sample data</li>
                      <li>Download the chart</li>
                    </ul>
                  </Text>
                </TeachingBubbleContent>
              </Coachmark>
            )}
          </div>
        </div>
        <div className={styles.secondary}>
          <span className={styles.secondarySubheading}>Available for</span>
          <div className={styles.platformList}>
            <div className={styles.platformItem}>
              <Link
                className={styles.platformLink}
                to={useBaseUrl("docs/installing")}
              >
                <img src="/img/edge.png" alt="Office on the web" />
                <span>Office on the web</span>
              </Link>
            </div>
            <div className={styles.platformItem}>
              <Link
                className={styles.platformLink}
                to={useBaseUrl("docs/installing")}
              >
                <img src="/img/windows.png" alt="Office on Windows" />
                <span>Office on Windows</span>
              </Link>
            </div>
            <div className={styles.platformItem}>
              <Link
                className={styles.platformLink}
                to={useBaseUrl("docs/installing")}
              >
                <img src="/img/windows.png" alt="Office 2019 on Windows" />
                <span>Office 2019 on Windows</span>
              </Link>
            </div>
            <div className={styles.platformItem}>
              <Link
                className={styles.platformLink}
                to={useBaseUrl("docs/installing")}
              >
                <img src="/img/windows.png" alt="Office 2016 on Windows" />
                <span>Office 2016 on Windows</span>
              </Link>
            </div>
            <div className={styles.platformItem}>
              <Link
                className={styles.platformLink}
                to={useBaseUrl("docs/installing")}
              >
                <img src="/img/windows.png" alt="Office 2013 on Windows" />
                <span>Office 2013 on Windows</span>
              </Link>
            </div>
            <div className={styles.platformItem}>
              <Link
                className={styles.platformLink}
                to={useBaseUrl("docs/installing")}
              >
                <img src="/img/macos.png" alt="Office on Mac" />
                <span>Office on Mac</span>
              </Link>
            </div>
            <div className={styles.platformItem}>
              <Link
                className={styles.platformLink}
                to={useBaseUrl("docs/installing")}
              >
                <img src="/img/macos.png" alt="Office 2019 on Mac" />
                <span>Office 2019 on Mac</span>
              </Link>
            </div>
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
