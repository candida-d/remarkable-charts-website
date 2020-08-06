import React from "react";
import classnames from "classnames";
import Image from "@theme/IdealImage";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import examples from "../../data/examples";

function Example({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.example)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.exampleImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Showcase() {
  return (
    <Layout
      title={`Showcase`}
      description="See awesome charts built with Remarkable Charts"
    >
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>Showcase</h1>
          <p>Awesome charts built with Remarkable Charts</p>
        </div>
        <div className="row">
          {examples.map((example) => (
            <div key={example.title} className="col col--4 margin-bottom--lg">
              <div className={classnames("card", styles.showcaseUser)}>
                <div className="card__image">
                  <Image img={example.preview} alt={example.title} />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">{example.title}</h4>
                      <small className="avatar__subtitle">
                        {example.description}
                      </small>
                    </div>
                  </div>
                </div>
                {(example.website || example.source) && (
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      {example.website && (
                        <Link
                          className="button button--small button--secondary button--block"
                          to={example.website}
                        >
                          Live demo
                        </Link>
                      )}
                      {example.source && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={example.source}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Excel Online demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;
