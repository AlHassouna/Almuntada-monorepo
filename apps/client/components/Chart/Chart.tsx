import Chart from 'chart.js/auto';
import {useIntl} from "react-intl";
import React, {useEffect, useRef} from 'react';
import {Statistic} from "../../styled/home.styled";

const StatisticChart = () => {
  const intl = useIntl();
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartsInformation = intl.messages[
    'homepage.chart'
    ] as unknown as Array<{
    title: string;
    perc: string;
  }>;

  useEffect(() => {
    let myChartRef = null;
    if (myChartRef) {
      myChartRef.destroy();
    }
    myChartRef = chartRef.current.getContext('2d');
    const myChart = new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        labels: chartsInformation.map((item) => item.title),
        datasets: [
          {
            data: chartsInformation.map((item) => ((item.perc))),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,

          }
        },
        animation: {
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default') {
              delay = context.dataIndex * 700 + context.datasetIndex * 400;
            }
            return delay;
          }
        }
      }
    });
    return () => {
      myChart.destroy();
    }
  }, [chartsInformation, chartRef]);

  return (
    <Statistic>
      <canvas
        id="myChart"
        ref={chartRef}
      />
    </Statistic>
  );
}
export default StatisticChart;
