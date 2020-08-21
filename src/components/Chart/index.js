import React, { useState } from "react";
import { Modal } from "@fluentui/react";
import {
  Chart as RemarkableChart,
  Content,
  Edit,
  StateDispatch,
  defaultReducer,
  useStateReducer,
  savePngToFile,
  saveSvgToFile,
} from "@mulberryhousesoftware/remarkable-charts-ui";
import NoSsr from "../NoSsr";
import styles from "./styles.module.css";

const SvgChart = ({ layout, state }) => (
  <div style={{ height: `${layout.root.rect.height}px` }}>
    <RemarkableChart
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

export function Chart({ newState }) {
  const [hideDialog, setHideDialog] = useState(true);

  const [state, dispatch] = useStateReducer(defaultReducer, {
    chart: newState,
  });

  return (
    <NoSsr>
      <div className={styles.chart}>
        <StateDispatch dispatch={dispatch}>
          <Content
            state={state}
            onTriggerPopup={() => {
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
      </div>
    </NoSsr>
  );
}
