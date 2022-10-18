import React from 'react';
import './chartRadar.scss';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import {Performance} from "../../models/performance";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

interface IProps {
    performance: Performance
}

export function ChartRadar( { performance }: IProps) {


    const labels = Object.values(performance.kind).map((data) =>  data)
    const performanceData =  Object.keys(performance.kind).map((keys) => {
      return performance.data.find((data) => data.kind === parseInt(keys))
    })

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            gridLines: {
                color: '#ffffff'
            },
            angleLines: {
                color: '#ffffff'
            }
        },
        scales: {
            r : {
                grid: {
                    color: '#ffffff',
                },
                pointLabels: {
                    color: '#ffffff',
                },
                ticks: {
                    textStrokeColor: 'rgba(54,162,235,0)',
                    color: 'rgba(240,240,240,0)',
                    backdropColor: 'rgba(47,56,62,0)'
                },
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#ffffff'
                }
            },
            y: {
                display: false, //this will remove all the x-axis grid lines
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                data: performanceData.map((data) => data?.value),
                backgroundColor: 'rgba(230,0,0,0.53)',
                borderColor: 'rgba(230,0,0,0.53)',
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className="chartRadar">
            <Radar options={options} data={data} />
        </div>
    )

}
