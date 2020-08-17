import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { initializeIcons } from "@uifabric/icons";
import { Hero } from "../components/Hero";
import { ValueProp } from "../components/ValueProp";
import { BenefitItem } from "../components/BenefitItem";
import { BenefitList } from "../components/BenefitList";
import { CTA } from "../components/CTA";

import styles from "./styles.module.css";

initializeIcons(undefined, { disableWarning: true });

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
            desc="You spend hours and hours tweaking charts to look just right. Get that
            time back to work on what really matters."
          />
          <BenefitItem
            image={<img src="img/excel.svg" alt="Excel" />}
            title="No need to leave Excel"
            desc="Keep working in the application you already know."
          />
          <BenefitItem
            image={<img src="img/insights.svg" alt="insights" />}
            title="Automated insights"
            desc="Access to suggestions based on leading authorities in the data
            vizualization world."
          />
          <BenefitItem
            image={<img src="img/export.svg" alt="export" />}
            title="Use everywhere"
            desc="Export as png, jpg, svg or pdf."
          />
        </BenefitList>
      </div>
      <CTA
        text={
          <span>
            Remarkable Charts is quick to install and it’s easy to get started.
          </span>
        }
        action={
          <Link
            className={classnames("button button--primary", styles.button)}
            to={useBaseUrl("docs/installing")}
          >
            Get started
          </Link>
        }
      />
    </Layout>
  );
}

export default Home;
