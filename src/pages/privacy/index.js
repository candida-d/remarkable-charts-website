import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Privacy() {
  return (
    <Layout title={`Privacy`} description="Privacy policy">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>Privacy</h1>
        </div>
        <div className="row">
          <div className="col">
            <h2>The Add-in</h2>
            <p>
              The Excel add-in does not send any data to Mulberry House Software
              services, or third-party services.
            </p>
            <p>
              If you choose to send an error report then the data used to
              produce the chart will be sent to Mulberry House Software
              services. This may include information about your environment, for
              example: Excel version, platform.
            </p>
            <p>
              A user may explicitly turn on telemetry. This will send data to
              Mulberry House Software services. This may include the data used
              to produce a chart as well as information about your environment.
              In addition, the telemetry may send data about your usage of
              features in the product.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>The Website</h2>
            <p>This website collects anonymous data using Google Analytics.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Privacy;
