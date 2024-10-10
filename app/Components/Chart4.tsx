'use client'

import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react'

function Chart4() {
    const chartRef = useRef<any>(null)
    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext('2d');
            const newChart = new Chart(context, {
                type: "line",
                data: {
                    labels: ["jishnu", 'kannan', 'jhon', 'dhanush', 'sathish', 'seeni'],
                    datasets: [
                        {
                            label: "Info",
                            data: [94, 88, 73, 54, 48, 23],
                        }
                    ]
                },
          
            })
            chartRef.current.chart = newChart
        }
    })
    return (
        <div className='bg-white border rounded-xl mt-10 ml-3 w-[90%]'>
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

export default Chart4