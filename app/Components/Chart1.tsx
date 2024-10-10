'use client'

import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react'

function Chart1() {
    const chartRef = useRef<any>(null)
    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            const data = {
                labels: [2023, 2045, 2067, 2078, 2080, 2023, 2048, 2023, 2045, 2067, 2078, 2080, 2023, 2048],
                datasets: [{
                    label: '1D',
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
                    fill: true,
                    borderColor: 'blue',
                    // backgroundColor: gradient,
                    tension: 0.1
                },
                {
                    label: '1W',
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.1
                },
                {
                    label: '1M',
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.1
                },
                {
                    label: '1Y',
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.1
                },
                ]
            }

            const context = chartRef.current.getContext('2d');
            const colors = {
                purple: {
                    default: "rgba(149, 76, 233, 1)",
                    half: "rgba(149, 76, 233, 0.5)",
                    quarter: "rgba(149, 76, 233, 0.25)",
                    zero: "rgba(149, 76, 233, 0)"
                },
                indigo: {
                    default: "rgba(80, 102, 120, 1)",
                    quarter: "rgba(80, 102, 120, 0.25)"
                }
            };
            const weight = [40.0, 50.2, 39.1, 91.4, 49.9, 30.2, 59.8, 28.6, 89.6, 59.2,74,20];
            const gradient = context.createLinearGradient(0, 25, 0, 300);
            gradient.addColorStop(0, colors.purple.half);
            gradient.addColorStop(0.35, colors.purple.quarter);
            gradient.addColorStop(1, colors.purple.zero);

            const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10 ", "Week 9", "Week 10"];
            const newChart = new Chart(context, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            fill: true,
                            backgroundColor: gradient,
                            pointBackgroundColor: colors.purple.default,
                            borderColor: colors.purple.default,
                            data: weight,
                            tension: 0.7
                        }
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
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
                    // animations: {
                    //     tension: {
                    //         duration: 1000,
                    //         easing: 'linear',
                    //         from: 0,
                    //         to: 0,
                    //         loop: true
                    //     }
                    // },
                    scales: {
                        y: {
                           
                            beginAtZero: true,
                        },
                    },
                }
            })
            chartRef.current.chart = newChart
        }
    }, []);
    return (
        <div className='bg-white border rounded-xl mt-10 ml-24 w-[83%]'>
            <div
                style={{
                    width: "40vw",
                    height: "50vh"
                }}
            >
                <canvas id='canvas' ref={chartRef} />
            </div>
        </div>
    )
}

export default Chart1