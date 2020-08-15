import React, { useState, useEffect, useRef, useReducer } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Modal } from "@fluentui/react";
import { initializeIcons } from "@uifabric/icons";
import {
  Chart,
  Content,
  Edit,
  StateDispatch,
  defaultReducer,
  useStateReducer,
  savePngToFile,
  saveSvgToFile,
} from "@mulberryhousesoftware/remarkable-charts-ui";
import { Hero } from "../components/Hero";
import { ValueProp } from "../components/ValueProp";
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

const SvgChart = ({ layout, state }) => (
  <div style={{ height: `${layout.root.rect.height}px` }}>
    <Chart
      isSvg
      layout={layout}
      header={state.chart.header}
      footer={state.chart.footer}
      legend={state.chart.legend}
      chartType={state.chart.chartType}
      data={state.chart.data}
      transpose={state.chart.transpose}
      options={state.chart.options}
      insights={state.chart.insights}
      editMode={state.chart.editMode}
      annotations={state.chart.annotations}
      theme={state.chart.theme}
      scheme={state.chart.scheme}
      axisBottom={state.chart.axisBottom}
      axisLeft={state.chart.axisLeft}
      enableGridX={state.chart.enableGridX}
      enableGridY={state.chart.enableGridY}
      colorBy={state.chart.colorBy}
      filterColumns={state.chart.filterColumns}
    />
  </div>
);

function saveSvg(layout, state) {
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.display = "inline-block";
  container.style.visibility = "hidden";
  container.style.zIndex = -1;

  document.body.appendChild(container);

  saveSvgToFile({
    element: <SvgChart layout={layout} state={state} />,
    container,
  });
}

function savePng(layout, state) {
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.display = "inline-block";
  container.style.visibility = "hidden";
  container.style.zIndex = -1;

  document.body.appendChild(container);

  savePngToFile({
    element: <SvgChart layout={layout} state={state} />,
    container,
  });
}

function onSave({ layout, state }, type = "svg", platform = "OfficeOnline") {
  console.log(`Export chart as ${type} for platform ${platform}`);

  switch (type) {
    case "svg":
      saveSvg(layout, state);
      break;
    case "png":
      savePng(layout, state);
      break;
    default:
      console.warn(`Unrecognised save type: ${type}`);
  }
}

function RemarkableChart() {
  const [hideDialog, setHideDialog] = useState(true);
  const [state, dispatch] = useStateReducer(defaultReducer);

  return (
    <StateDispatch dispatch={dispatch}>
      <Content
        state={state}
        onTriggerPopup={(type) => {
          setHideDialog(false);
        }}
        onSave={onSave}
      />
      <Modal
        isOpen={!hideDialog}
        onDismiss={() => {
          setHideDialog(true);
        }}
        isBlocking={false}
        styles={{
          main: {
            height: "80vh",
            width: "80vw",
          },
          scrollableContent: {
            height: "100%",
          },
        }}
      >
        <Edit
          initialState={state}
          onSave={(state) => {
            dispatch({
              type: "set_state",
              state,
            });
            setHideDialog(true);
          }}
        />
      </Modal>
    </StateDispatch>
  );
}

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
      <hr className={styles.separator} />
      <ValueProp />
      <main>
        {features && features.length && (
          <section className={classnames("text--center", styles.features)}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
