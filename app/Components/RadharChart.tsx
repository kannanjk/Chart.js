'use client'

import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

function RadharChart() {
    const chartRef = useRef<any>(null)
    const data = {
        labels: ['', '', '', ''],
        datasets: [
            {
                label: "Info",
                data: [34, 64, 23, 34],
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
                backgroundColor: ["blue"],
                image: [
                    'https://www.brandcrowd.com/logo-maker',
                    'https://www.brandcrowd.com/logo-maker',
                    'https://www.brandcrowd.com/logo-maker',
                    'https://www.brandcrowd.com/logo-maker'
                ]
            },
        ]
    } 
    const xScaleImage = {
        id:'xScaleImage',
        afterDatasetsDraw({chart,args,plugins}:{chart:Object,args:string,plugins:string}){
            const {ctx,data,chartAra:{bottom},scale:{x}} = chart
        }
    }
    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext('2d');
            const newChart = new Chart(context, {
                type: "bar",
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    indexAxis: 'y',
                },
                plugins:[xScaleImage]
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

export default RadharChart