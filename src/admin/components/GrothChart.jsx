import * as React from "react";
import { useEffect } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";
// import { loadChartTheme } from "./theme-color";
export let data1 = [
  { x: "2016", y: 104 },
  { x: "2020", y: 121 },
  { x: "2024", y: 113 },
];
export let data2 = [
  { x: "2016", y: 46 },
  { x: "2020", y: 46 },
  { x: "2024", y: 39 },
];
export let data3 = [
  { x: "2016", y: 65 },
  { x: "2020", y: 67 },
  { x: "2024", y: 65 },
];
export let data4 = [
  { x: "2016", y: 29 },
  { x: "2020", y: 27 },
  { x: "2024", y: 22 },
];
export let data5 = [
  { x: "2016", y: 91 },
  { x: "2020", y: 70 },
  { x: "2024", y: 88 },
];
export let data6 = [
  { x: "2016", y: 38 },
  { x: "2020", y: 26 },
  { x: "2024", y: 38 },
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const GrothChart = () => {
  const onChartLoad = (args) => {
    let chart = document.getElementById("charts");
    chart.setAttribute("title", "");
  };
  const load = (args) => {
    // loadChartTheme(args);
    console.log("Loading the theme");
  };
  const tooltipRender = (args) => {
    const seriesName = args.series.name;
    const groupName = args.series.groupName ?? "";
    const value = args.point.y;
    args.text = seriesName.includes("Gold")
      ? `${groupName}: <b>${value} Gold</b>`
      : `${groupName}: <b>${value} Total</b>`;
  };
  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          load={load.bind(this)}
          tooltipRender={tooltipRender.bind(this)}
          primaryXAxis={{
            valueType: "Category",
            interval: 1,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
          }}
          primaryYAxis={{
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            title: "Number of Medals Won",
          }}
          chartArea={{ border: { width: 0 }, margin: { bottom: 12 } }}
          tooltip={{
            enable: true,
            enableHighlight: true,
            header: "<b>${point.x}</b>",
            format: "${series.groupName} : <b>${point.y} Gold</b>",
          }}
          width={Browser.isDevice ? "100%" : "75%"}
          title="Olympic Medal Trends by Country and Year"
          subTitle="A Historical Overview of Medal Counts Across Nations"
          legendSettings={{ visible: true, shapeWidth: 9, shapeHeight: 9 }}
          loaded={onChartLoad.bind(this)}
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data1}
              xName="x"
              yName="y"
              name="USA Total Medals"
              type="Column"
              groupName="USA"
              columnWidth={0.7}
              columnSpacing={0.1}
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
              cornerRadius={{ topLeft: 4, topRight: 4 }}
              legendShape="Rectangle"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={data2}
              xName="x"
              yName="y"
              name="USA Gold Medals"
              type="Column"
              groupName="USA"
              columnWidth={0.5}
              columnSpacing={0.1}
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
              cornerRadius={{ topLeft: 4, topRight: 4 }}
              legendShape="Rectangle"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={data3}
              xName="x"
              yName="y"
              name="UK Total Medals"
              type="Column"
              groupName="UK"
              columnWidth={0.7}
              columnSpacing={0.1}
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
              cornerRadius={{ topLeft: 4, topRight: 4 }}
              legendShape="Rectangle"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={data4}
              xName="x"
              yName="y"
              name="UK Gold Medals"
              type="Column"
              groupName="UK"
              columnWidth={0.5}
              columnSpacing={0.1}
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
              cornerRadius={{ topLeft: 4, topRight: 4 }}
              legendShape="Rectangle"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={data5}
              xName="x"
              yName="y"
              name="China Total Medals"
              type="Column"
              groupName="China"
              columnWidth={0.7}
              columnSpacing={0.1}
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
              cornerRadius={{ topLeft: 4, topRight: 4 }}
              legendShape="Rectangle"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={data6}
              xName="x"
              yName="y"
              name="China Gold Medals"
              type="Column"
              groupName="China"
              columnWidth={0.5}
              columnSpacing={0.1}
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
              cornerRadius={{ topLeft: 4, topRight: 4 }}
              legendShape="Rectangle"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
export default GrothChart;
