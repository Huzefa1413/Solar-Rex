import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PredictionChart = ({ predictionData, dates, forecastPoint }) => {
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
      count: forecastPoint,
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },
    xaxis: {
      type: 'text',
      categories: dates.map((date) => {
        const [day, month, year] = date.split('-');
        return `${new Date(year, month - 1, day).toLocaleString('default', {
          month: 'short',
        })} ${parseInt(day, 10)}`;
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
