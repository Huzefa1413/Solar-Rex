import React from 'react'
import ReactApexChart from "react-apexcharts"

function StackedAreaChart(props) {

    const data = {
        applications: [
            {
                // data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 12, 30, 0, 18],
                data: props.graphData.freshCasesQTY,
            },
            {
                // data: [31, 32, 40, 50, 20, 2, 12, 40, 0, 0, 0, 6, 3, 43, 0, 18, 0, 3],
                data: props.graphData.RenewalCasesQTY,
            },
        ],
        options: {
            chart: {
                type: 'line',
                stacked: true,
            },
            tooltip: {
                enabled: false,
                fillSeriesColor: false
            },
            colors: ["#924AEF", "#e328af"], //Add this line
            dataLabels: {
                enabled: false,
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                labels: {
                    colors: ["#924AEF", "#e328af"],
                    useSeriesColors: false
                },
                customLegendItems: ["Fresh Cases", "Renewal Cases"],
                fontSize: '16px',
                fontWeight: 400,
                itemMargin: {
                    horizontal: 15,
                    vertical: 10
                },
                markers: {
                    width: 12,
                    height: 12,
                    strokeWidth: 0,
                    strokeColor: '#fff',
                    fillColors: ["#924AEF", "#e328af"],
                    radius: 12,
                    customHTML: undefined,
                    onClick: undefined,
                    offsetX: -5,
                    offsetY: 0
                },
            },
            markers: {
                show: false,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'round',
                colors: ["#924AEF", "#e328af"],
                width: 4,
                dashArray: 0,
            },
            xaxis: {
                // categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
                categories: props.graphData.RenewalCasesDates
            },
        },

    }

    return (
        <>
            <ReactApexChart
                height={"350px"}
                options={data.options}
                series={data.applications}
                type="line"
                className="PieChart"
            />
        </>
    )
}

export default StackedAreaChart