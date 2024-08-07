import React from 'react';
import ReactApexChart from 'react-apexcharts';

function BarChart({ barData }) {
  const series = [{ data: barData?.count || [] }];
  const categories = barData?.names || [];

  const options = {
    chart: {
      type: 'bar',
      foreColor: 'black',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    tooltip: {
      enabled: false,
      fillSeriesColor: false,
    },
    colors: ['#1475e1', '#1475e1'], // Add this line
    legend: {
      show: true,
    },
    markers: {
      show: true,
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
    },
    fill: {
      type: 'solid',
      colors: ['#924AEF'],
      hover: {
        colors: ['#20FF20', '#f91c48'],
      },
    },
    grid: {
      borderColor: '#ececec',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        show: true,
      },
    },
  };

  return (
    <ReactApexChart
      height={350}
      options={options}
      series={series}
      type="bar"
      className="BarChart"
    />
  );
}

export default BarChart;
