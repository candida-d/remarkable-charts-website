import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { initializeIcons } from "@uifabric/icons";
import { Hero } from "../components/Hero";
import { ValueProp } from "../components/ValueProp";
import { BenefitItem } from "../components/BenefitItem";
import { BenefitList } from "../components/BenefitList";
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
      <div className={styles.contrast}>
        <hr className={styles.separator} />
        <ValueProp />
        <BenefitList>
          <BenefitItem
            image={<img src="img/formatting.svg" alt="formatting" />}
            title="Less time formatting"
            desc="Whenever you write a story you get a handy visual spec. Quickly browse stories to make sure your UI looks right."
          />
          <BenefitItem
            image={<img src="img/excel.svg" alt="Excel" />}
            title="No need to leave Excel"
            desc="Get code snapshot tests out of the box with Storyshots, an official addon."
          />
          <BenefitItem
            image={<img src="img/insights.svg" alt="insights" />}
            title="Automated insights"
            desc="Reuse stories in your unit tests to confirm nuanced functionality."
          />
          <BenefitItem
            image={
              <img src="img/formatting.svg" alt="visual regression test" />
            }
            title="Use everywhere"
            desc="Export as png, jpg, svg or pdf."
          />
        </BenefitList>
      </div>
    </Layout>
  );
}

export default Home;
