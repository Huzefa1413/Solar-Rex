import React from 'react';
import ReactApexChart from 'react-apexcharts';

function RadialBarChart({ currentEnergy }) {
  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '50%',
        },
      },
    },
    tooltip: {
      enabled: false,
      fillSeriesColor: true,
    },
    colors: ['#72d4fd'], // Add this line
    legend: {
      show: false,
    },
    markers: {
      show: false,
    },
    labels: ['Energy Left'],
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'round',
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    fill: {
      type: 'solid',
      colors: ['#72d4fd', '#ffd6f4'],
      hover: {
        colors: ['#20FF20', '#f91c48'],
      },
    },
  };

  let series = [0];
  if (!isNaN(currentEnergy)) {
    series = [currentEnergy];
  }

  return (
    <ReactApexChart
      height={'235px'}
      options={options}
      series={series}
      type="radialBar"
      className="RadialBarChart"
    />
  );
}

export default RadialBarChart;
