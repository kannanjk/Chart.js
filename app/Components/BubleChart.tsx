'use client'

import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

function Bubchart() {
    const chartRef = useRef<any>(null)
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
                            data: [34, 64, 23,12],
                            backgroundColor: [
                                "blue ",
                                "red",
                                "yellow",
                                "orange",
                               
                            ],
                            borderWidth: 4,

                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                       legend:{
                        position:"bottom"
                       }
                    },
                }
            })
            chartRef.current.chart = newChart
        }
    }, []);
    return (
        <div
            style={{
                position: "relative",
                width: "50vw",
                height: "50vh",
            }}
        >
            <canvas

                ref={chartRef} />
        </div>
    )
}

export default Bubchart