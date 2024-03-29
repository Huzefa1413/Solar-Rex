import React from 'react'
import ReactApexChart from "react-apexcharts"

function FreshCasesChart(props) {

    const data = {
        // series: [12],
        series: [props.appC],
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
            colors: ["#72d4fd", "#1475e1"], //Add this line
            legend: {
                show: false,
            },
            markers: {
                show: false,
            },
            labels: ['Fresh'],
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
                colors: ["#72d4fd", "#ffd6f4"],
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

export default FreshCasesChart