import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Support() {
  return (
    <Layout title={`Support`} description="Support">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>Support</h1>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Please email{" "}
              <a href="mailto:support@mulberyhousesoftware.com">
                support@mulberyhousesoftware.com
              </a>{" "}
              and we will get in touch as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Support;
