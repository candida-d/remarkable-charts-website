import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const Card = ({
  tier,
  name,
  price,
  info = null,
  description,
  features,
  buttonText,
}) => (
  <section className={styles.card}>
    <header>
      <h3 className={classnames(styles.badge, styles[tier])}>{name}</h3>
      {info && <span>{info}</span>}
      <p className={styles.price}>
        {price}
        <small className={styles.small}>/month</small>
      </p>
      <p className={styles.description}>{description}</p>
    </header>
    <ul className={styles.list}>
      {features.map((d) => (
        <li className={classnames(styles.item)}>{d}</li>
      ))}
    </ul>
    <footer className={styles.footer}>
      <Link to="/" className={classnames(styles.button, styles[tier])}>
        {buttonText}
      </Link>
    </footer>
  </section>
);

function Pricing() {
  return (
    <Layout title={`Pricing`} description="Pricing">
      <div className="container margin-vert--lg">
        <div className="text--center">
          <h1>Pricing</h1>
        </div>
        <div className="text--center row">
          <div className={styles.cardGrid}>
            <Card
              tier="tier1"
              name="Starter"
              price="$0"
              description="Great for getting started and viewing charts from anyone else"
              features={[
                "Bar and column charts",
                <>
                  Access to <Link to="/docs">documentation</Link>
                </>,
              ]}
              buttonText="Get started for free"
            />
            <Card
              tier="tier2"
              name="Pro"
              price="$5"
              description="For frequent users who want access to everything. Starter features plus."
              features={["All chart types"]}
              buttonText="Get started"
            />
            <Card
              tier="tier3"
              name="Business"
              info="starting at"
              price="$100"
              description="For large teams and companies. Pro features plus."
              features={["Premium support"]}
              buttonText="Contact sales"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pricing;
