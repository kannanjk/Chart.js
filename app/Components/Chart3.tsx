'use client'

import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react'

function Chart3() {
    const chartRef = useRef<any>(null)
    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext('2d');
            const newChart = new Chart(context, {
                type: "bar",
                data: {
                    labels: ["ji", 'ka', 'jn', 'dh', 'sh', 'si'],
                    datasets: [
                        {
                            barPercentage: 0.5,
                            label: "Info",
                            data: [224, 378, 223, 124, 78, 23],
                            backgroundColor: [
                                "rgb(92, 102, 242)",
                            ],
                            borderColor: [
                                "rgb(135 206 235) ",
                            ],
                            // borderWidth:  4,
                        },
                        {
                            barPercentage: 0.5,
                            label: "Info",
                            data: [224, 378, 223, 124, 78, 23],
                            backgroundColor: [
                                "rgb(144, 150, 236)",
                            ],
                            borderColor: [
                                "rgb(255,159,64) ",
                            ],
                            // borderWidth: 4,
                        },
                        {
                            barPercentage: 0.5,
                            label: "line",
                            data: [224, 378, 223, 124, 78, 23],
                            backgroundColor: "rgb(170, 175, 239)",
                            //    tension:0.4
                        },
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            // position: "",
                            labels: {
                                usePointStyle: true,
                                pointStyle: "circle",
                                padding: 40,
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
                        },

                    },
                    responsive: true,

                    scales: {
                        x: {
                            stacked: true
                        },
                        y: {
                            beginAtZero: true,
                            stacked: true
                        }
                    }
                }
            })
            chartRef.current.chart = newChart
        }
    }, []);
    return (
        <div className='bg-white border rounded-xl mt-10 ml-24 w-[83%]'>
            <div
                style={{
                    width: "33vw",
                    height: "50vh"
                }}
            >
                <canvas id='canvas' ref={chartRef} />
            </div>
        </div>
    )
}

export default Chart3