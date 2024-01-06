import React from 'react'
import ReactApexChart from "react-apexcharts"

function ScoringChart() {

    const data = {
        series: [80],
        options: {
            chart: {
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%',
                    }
                },
            },
            tooltip: {
                enabled: false,
                fillSeriesColor: true
            },
            colors: ["#924AEF", "#1475e1"], //Add this line
            legend: {
                show: false,
            },
            markers: {
                show: false,
            },
            labels: ['Score'],
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'square',
                colors: undefined,
                width: 5,
                dashArray: 0,
            },
            fill: {
                type: "solid",
                colors: ["#924AEF", "#ffd6f4"],
                hover: {
                    colors: ["#20FF20", "#f91c48"],
                }
            },
        },

    }

    return (
        <>
            <ReactApexChart
                height={"400px"}
                options={data.options}
                series={data.series}
                type="radialBar"
                className="RadialBarChart"
            />
        </>
    )
}

export default ScoringChart