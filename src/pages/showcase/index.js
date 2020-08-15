import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import { initializeIcons } from "@uifabric/icons";
import { DataFrame } from "@mulberryhousesoftware/remarkable-charts-ui";
import { Chart } from "../../components/Chart";
import styles from "./styles.module.css";
import examples from "../../data/examples";
import sampleData from "../../data/sampleData.json";

initializeIcons(undefined, { disableWarning: true });

function getData(dataset) {
  const sampleDataSet = sampleData[dataset];

  return {
    data: DataFrame.parseJSON(
      JSON.stringify(
        new DataFrame(
          sampleDataSet.data.slice(1),
          sampleDataSet.columns,
          sampleDataSet.dtypes,
          sampleDataSet.format
        )
      )
    ),
    header: {
      title: { content: sampleDataSet.title ?? "", align: "left" },
      subtitle: {
        content: sampleDataSet.subtitle ?? "",
        align: "left",
      },
    },
    footer: {
      source: { content: sampleDataSet.source ?? "", align: "left" },
    },
    axisLeft: {
      enabled: true,
      title: "",
      align: "center",
      isLog: false,
      min: null,
      max: null,
    },
    axisBottom: {
      enabled: true,
      title: "",
      align: "center",
      reversed: false,
    },
    enableGridX: sampleDataSet.enableGridX ?? true,
    enableGridY: true,
    chartType: sampleDataSet.chartType,
    options: { enableLabel: false, enableAxis: false, enableDataPoints: false },
    legend: {
      position: sampleDataSet.legend ?? "top",
      align: "left",
    },
    insights: { enableMinMax: false },
    annotations: sampleDataSet.annotations || [],
    editMode: { type: "edit" },
    transpose: false,
    scheme: sampleDataSet.scheme ?? "google_standard",
    aspectRatio: 1,
    colorBy: "column",
    filterColumns: sampleDataSet.columns.map((d) => true),
  };
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
            <div key={example.title} className="col col--6 margin-bottom--lg">
              <div className={classnames("card", styles.showcaseUser)}>
                <div className="card__image">
                  <div className={styles.chartWrapper}>
                    <Chart newState={getData(example.dataset)} />
                  </div>
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
                      {example.source && (
                        <a
                          className="button disabled button--small button--primary button--block"
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
