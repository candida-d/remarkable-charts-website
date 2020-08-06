import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function About() {
  return (
    <Layout title={`About`} description="We're Mulberry House Software">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>Welcome</h1>
          <p>Create great looking charts and data visualizations</p>
        </div>
        <div className="text">
          <div className="col">
            <p>
              Hi! I'm John Walley and I believe in the power of data
              visualization to engage, inspire, and communicate stories. I
              founded Mulberry House Software in 2017 to help clients visualize
              and understand their data.
            </p>
            <p>
              Remarkable Charts is our first product and we want to make it easy
              for anyone to create great looking charts and data visualizations.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
