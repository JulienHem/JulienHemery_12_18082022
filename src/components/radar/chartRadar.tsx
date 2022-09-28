import React from 'react';
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

    const data = {
        labels,
        datasets: [
            {
                data: performanceData.map((data) => data?.value),
                backgroundColor: 'rgba(230,0,0,0.53)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };


    return <Radar data={data} />;
}
