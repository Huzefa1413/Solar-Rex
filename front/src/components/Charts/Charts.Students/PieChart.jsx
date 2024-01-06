import React from 'react'
import ReactApexChart from "react-apexcharts"

function PieChart(props) {

    const data = {
        // series: [44, 55, 13, 43, 22],
        series: props.uniCount,
        options: {
            chart: {
                type: 'pie',
            },
            tooltip: {
                enabled: true,
                fillSeriesColor: true,
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    return '<div class="arrow_box">' +
                        '<span>' + JSON.stringify(series) + '</span>' +
                        '</div>'
                }
            },
            colors: ["#1475e1", "#1475e1"], //Add this line
            legend: {
                show: false,
            },
            markers: {
                show: false,
            },
            stroke: {
                show: false,
                curve: 'smooth',
                lineCap: 'round',
                colors: undefined,
                width: 2,
                dashArray: 0,
            },
            fill: {
                type: "solid",
                // colors: ["#e742b9", "#ffd6f4"],
                colors: ['#28a745', '#5ECFFF', '#FF9325', '#FF4A55', '#924AEF'],
                hover: {
                    colors: ["#20FF20", "#f91c48"],
                }
            },
        },

    }

    return (
        <>
            <ReactApexChart
                height={"250px"}
                options={data.options}
                series={data.series}
                type="pie"
                className="PieChart"
            />
        </>
    )
}

export default PieChart