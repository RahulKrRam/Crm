
import { myData } from "./data";
import React from "react";
import { Bar, Pie, Doughnut, Line, Bubble, Scatter } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

export default function ReactChart() {


    
    

    const [chartData, setChartData] = React.useState({
        //x-axis
        labels: myData.map(function (i) {
          return i.year;
        }),
        //y-axis
        datasets: [
          {
            data: myData.map(function (i) {
              return i.covidcases;
            }),
            backgroundColor: ["#1F639C", "#1E619AE8", "blue", "blue", "blue", "blue","blue", "blue", "blue", "blue", "blue"],
            label: "Covid cases"
          }
        ]
      });





  return (
    <div style={{ width: 500, height: 300 }}>
    <Bar data={chartData} />
    {/* <Pie data={chartData} />
    <Doughnut data={chartData} />
    <Line data={chartData} />
    <Bubble data={chartData} />
    <Scatter data={chartData} /> */}
  </div>
  )
}
