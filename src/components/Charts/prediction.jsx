import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PredictionChart = ({ predictionData, dates, forcastPoint }) => {
  console.log('C?HA', predictionData);
  console.log('C?HA', dates);
  console.log('C?HAjhi', forcastPoint);
  const options = {
    series: [
      {
        name: 'Energy',
        data: predictionData,
      },
    ],
    chart: {
      height: 350,
      type: 'line',
    },
    forecastDataPoints: {
      count: forcastPoint,
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },
    xaxis: {
      type: 'text',
      categories: dates.map((date) => {
        const dateParts = date.split('-');
        const month = new Date(
          Date.parse(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`)
        ).toLocaleString('default', { month: 'short' });
        const day = parseInt(dateParts[0], 10);
        return `${month} ${day}`;
      }),
      tickAmount: 10,
    },

    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
  };

  return (
    predictionData.length > 0 && (
      <div>
        <ReactApexChart
          options={options}
          series={options.series}
          type="line"
          height={350}
        />
      </div>
    )
  );
};

export default PredictionChart;
