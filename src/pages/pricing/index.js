import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const CheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 1024 1024" width="20px" height="20px">
    <path
      d="M948.598 199.75c-15.622-15.618-40.95-15.618-56.57 0l-535.644 535.644-224.060-224.062c-15.624-15.624-40.954-15.62-56.57 0-15.624 15.62-15.624 40.948 0 56.568l251.574 251.574c0.252 0.266 0.472 0.55 0.734 0.812 7.82 7.82 18.072 11.724 28.322 11.714 10.25 0.010 20.502-3.894 28.322-11.714 0.248-0.248 0.456-0.518 0.698-0.77l563.196-563.202c15.618-15.618 15.618-40.94-0.002-56.564z"
      fill="currentcolor"
    ></path>
  </svg>
);

function Pricing() {
  return (
    <Layout title={`Pricing`} description="Pricing">
      <div>
        <div className={classnames("text--center", styles.pricingHeader)}>
          <h1>Pricing</h1>
          <div className={styles.desc}>Made for every team size</div>
        </div>
        <div className={styles.planWrapper}>
          <div className={styles.planInner}>
            <div className={styles.planPrice}>
              <span className={classnames(styles.planName, styles.essential)}>
                Essentials
              </span>
              <div className={styles.price}>
                <span className={styles.numeral}>Free</span>
              </div>
              <div className={styles.planDesc}>
                Create basic charts and view any chart made by a colleague
              </div>
              <div className={styles.action}>
                <Link
                  className={classnames(
                    "button button--primary",
                    styles.trialButton
                  )}
                  to={useBaseUrl("docs/installing")}
                >
                  Get started now
                </Link>
                <div className={styles.planSubtext}>
                  No credit card required - Setup in 5 minutes
                </div>
              </div>
            </div>
            <div className={styles.planDetailsWrapper}>
              <ul className={styles.planDetails}>
                <li className={styles.detail}>
                  <CheckIcon className={styles.checkIcon} />
                  Create bar and column charts
                </li>
                <li className={styles.detail}>
                  <CheckIcon className={styles.checkIcon} />
                  Access to documentation
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className={styles.separator} />
        <div className={styles.pricesWrapper}>
          <h2 className={styles.title}>Premium plans</h2>
          <div className={styles.pricesDesc}>
            Upgrade to access more charts types and additional features
          </div>
          <div className={styles.schedule}>
            <div className={styles.plan}>
              <span className={classnames(styles.planName, styles.standard)}>
                Standard
              </span>
              <div className={styles.price}>
                <span className={styles.numeral}>$5</span>
                <span className={styles.period}>/mo</span>
              </div>
              <div className={styles.planDesc}>
                Professionals working with charts regularly
              </div>
              <Link
                className={classnames(
                  "button button--primary",
                  styles.trialButton
                )}
                to={useBaseUrl("docs/installing")}
              >
                Try for free
              </Link>
              <ul className={styles.pricingPlanDetails}>
                <li className={styles.detail}>Chrome</li>
                <li className={styles.detail}>+ Core features</li>
              </ul>
            </div>
            <div className={styles.plan}>
              <span className={classnames(styles.planName, styles.enterprise)}>
                Enterprise
              </span>
              <div className={styles.price}>
                <span className={styles.numeral}>Custom</span>
              </div>
              <div className={styles.planDesc}>Team and site licenses</div>
              <Link
                className={classnames(
                  "button button--outline button--primary",
                  styles.trialButton
                )}
                to={useBaseUrl("docs/installing")}
              >
                Chat with us
              </Link>
              <ul className={styles.pricingPlanDetails}>
                <li className={styles.detail}>Chrome</li>
                <li className={styles.detail}>+ Core features</li>
              </ul>
            </div>
            <div className={styles.plan}>
              <span className={classnames(styles.planName, styles.bespoke)}>
                Bespoke
              </span>
              <div className={styles.price}>
                <span className={styles.numeral}>Custom</span>
              </div>
              <div className={styles.planDesc}>New custom chart types</div>
              <Link
                className={classnames(
                  "button button--outline button--primary",
                  styles.trialButton
                )}
                to={useBaseUrl("docs/installing")}
              >
                Chat with us
              </Link>
              <ul className={styles.pricingPlanDetails}>
                <li className={styles.detail}>Chrome</li>
                <li className={styles.detail}>+ Core features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pricing;
