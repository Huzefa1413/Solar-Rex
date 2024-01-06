import React from 'react'
import ReactApexChart from "react-apexcharts"


function UniBarChart(props) {

    const data = {
        series: [{
            // data: [21, 22, 10, 28]
            data: props?.barData?.count
            // data: props.count
        }],
        options: {
            chart: {
                type: 'bar',
                // foreColor: '#b1bad3',
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: false,
                    columnWidth: '30%',
                }
            },
            tooltip: {
                enabled: true,
                fillSeriesColor: true
            },
            colors: ["#1475e1", "#1475e1"], //Add this line
            legend: {
                show: false,
            },
            markers: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: false,
            },
            fill: {
                type: "solid",
                colors: ["#924AEF"],
                hover: {
                    colors: ["#20FF20", "#f91c48"],
                }
            },
            grid: {
                borderColor: '#ececec',
                strokeDashArray: 0,
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            xaxis: {
                // categories: ['FAST', 'Nust', 'SSUET', 'IBA'],
                categories: props?.barData?.names,
                labels: {
                    show: false,
                }
            }
        },

    }

    return (
        <>
            <ReactApexChart
                height={"200px"}
                options={data.options}
                series={data.series}
                type="bar"
                className="BarChart"
            />
        </>
    )
}

export default UniBarChart