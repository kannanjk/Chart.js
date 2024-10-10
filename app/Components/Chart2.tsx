'use client'
import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react'

function Chart2() {
    const chartRef = useRef<any>(null)
    const doughnutLabel = {
        id: "doughnutLabel",
        beforeDatasetsDraw(chart: any, args: any, pluginOption: any) {
            const { ctx, data } = chart
            ctx.save()
            const xCoor = chart.getDatasetMeta(0).data[0].x
            const yCoor = chart.getDatasetMeta(0).data[0].y
            ctx.font = 'bold 30px sans-serif'
            ctx.fillStyle = 'red'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(`${data.labels[0]}:${data.datasets[0].data[0]}`, xCoor, yCoor)
        }
    }
    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext('2d');
            const newChart = new Chart(context, {
                type: "doughnut",
                data: {
                    labels: ["jishnu", 'kannan', 'jhon', 'dhanush'],
                    datasets: [
                        {
                            label: "Info",
                            data: [34, 64, 23, 12],
                            backgroundColor: [
                                "blue ",
                                "red",
                                "yellow",
                                "orange",
                            ],
                            hoverOffset: 30,
                            cutout:"70%",
                            borderWidth: 4,
                            borderRadius: 10,
                        }
                    ]
                },
                options: {
                    aspectRatio:0.7,
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: true,
                                pointStyle: "circle",
                                padding: 40
                            }
                        },
                        title: {
                            display: true,
                            color: 'black',
                            align: 'start',
                            position: 'top',
                            text: 'Chart title',
                            font: {
                                size: 25
                            },
                        }
                    },
                },
                plugins: [doughnutLabel]
            })
            chartRef.current.chart = newChart
        }
    }, []);
    return (
        <div className='bg-white border rounded-xl mt-10 -ml-6 w-[93%]'>
            <div className='flex ml-32'
                style={{
                    position: "relative",
                    width: "50vw",
                    height: "50vh",
                }}
            >
                <canvas

                    ref={chartRef} />
            </div>
        </div>
    )
}

export default Chart2