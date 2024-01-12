import React from 'react';
import ReactApexChart from 'react-apexcharts';

function PredictionLineChart({ predictions }) {
  const data = {
    series: [
      {
        name: 'Predictions',
        data: predictions,
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
      },
      xaxis: {
        categories: predictions.map((_, index) => `Month ${index + 1}`),
      },
      markers: {
        size: 6,
      },
      colors: ['#1475e1'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="line"
        height={350}
      />
    </div>
  );
}

export default PredictionLineChart;
