import React from 'react'
import ReactApexChart from "react-apexcharts"

function RenewalCasesChart(props) {

    const data = {
        // series: [24],
        series: [props.renC],
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
            colors: ["#e742b9", "#1475e1"], //Add this line
            legend: {
                show: false,
            },
            markers: {
                show: false,
            },
            labels: ['Renewal'],
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'round',
                colors: undefined,
                width: 2,
                dashArray: 0,
            },
            fill: {
                type: "solid",
                colors: ["#e742b9", "#ffd6f4"],
                hover: {
                    colors: ["#20FF20", "#f91c48"],
                }
            },
        },

    }

    return (
        <>
            <ReactApexChart
                height={"235px"}
                options={data.options}
                series={data.series}
                type="radialBar"
                className="RadialBarChart"
            />
        </>
    )
}

export default RenewalCasesChart