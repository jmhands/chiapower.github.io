import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ChartComponent() {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['2022', '2023', '2024', '2025', '2026', '2027'],
                    datasets: [{
                        label: 'Ave Cap (Total Market)',
                        data: [12835, 15007, 17348, 19907, 22437, 24829],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Ave Cap (Hyperscale)',
                        data: [18437, 21056, 23357, 25845, 28287, 30004],
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Bar Chart'
                    },
                    scales: {
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Year'
                            }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Gigabytes'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    }, []);

    return <canvas ref={chartRef} width="400" height="200"></canvas>;
}

export default ChartComponent;
