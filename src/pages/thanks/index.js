import React from "react";
import Layout from "@theme/Layout";

export default function Thanks() {
  return (
    <Layout title={`Thanks`} description="Thanks">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>Thank you for getting in touch! </h1>
        </div>
        <div className="row">
          <div className="col text--center">
            <h2>
              We appreciate you contacting us. One of our colleagues will get
              back in touch with you soon! Have a great day!
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col text--center">
            <img src="/img/thankyou.svg" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
