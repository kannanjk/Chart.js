'use client'

import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

function Piechart() { 
    const chartRef = useRef<any>(null)
    const data = {
        labels: [2023, 2045, 2067, 2078, 2080, 2023, 2048],
        datasets: [{
            label: 'loro input',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext('2d');
            const newChart = new Chart(context, {
                type: "line",
                data: data,
                options: {
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

export default Piechart