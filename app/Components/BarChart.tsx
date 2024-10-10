'use client'

import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

function BarChart() {
    const chartRef = useRef<any>(null)
    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext('2d');
            const newChart = new Chart(context, {
                type: "bubble",
                data: {
                    labels: ["jishnu", 'kannan', 'jhon', 'dhanush', 'sathish', 'seeni'],
                    datasets: [
                        {
                            label: "Info",
                            data:{
                                x:224,
                                y:2278,
                                r:223
                            },
                            backgroundColor: [
                               ,
                               
                               
                               
                                "rgb(54,162,235,0.2)",
                                "rgb(153,102,255,0.2)",
                                "rgb(201,203,207,0.2)",
                            ],
                            borderColor: [
                                "rgb(255,159,64) ",
                                "rgb(255,99,132) ",
                                "rgb(75,192,192) ",
                                "rgb(255,205,86) ",
                                "rgb(153,102,255) ",
                                "rgb(201,203,207) ",
                                "rgb(54,162,235) ",
                            ],
                            borderWidth: 4,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            type: "category"
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
            chartRef.current.chart = newChart
        }
    }, []);
    return (
        <div
            style={{
                position: "relative",
                width: "90vw",
                height: "80vh"
            }}
        >
            <canvas ref={chartRef} />
        </div>
    )
}

export default BarChart