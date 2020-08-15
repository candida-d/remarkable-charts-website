import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { initializeIcons } from "@uifabric/icons";
import { Hero } from "../components/Hero";
import { ValueProp } from "../components/ValueProp";
import styles from "./styles.module.css";

initializeIcons(undefined, { disableWarning: true });

const features = [
  {
    title: "Less time formatting",
    imageUrl: "img/formatting.svg",
    description: (
      <>
        You spend hours and hours tweaking charts to look just right. Get that
        time back to work on what really matters.
      </>
    ),
  },
  {
    title: "No need to leave Excel",
    imageUrl: "img/excel.svg",
    description: <>Keep working in the application you already know.</>,
  },
  {
    title: "Automated insights",
    imageUrl: "img/insights.svg",
    description: (
      <>
        Access to suggestions based on leading authorities in the data
        vizualization world.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Create beautiful charts in seconds with Excel`}
      description="Create beautiful charts in seconds with Excel"
    >
      <Hero tagline={siteConfig.tagline} />
      <hr className={styles.separator} />
      <ValueProp />
      <main>
        {features && features.length && (
          <section className={classnames("text--center", styles.features)}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
