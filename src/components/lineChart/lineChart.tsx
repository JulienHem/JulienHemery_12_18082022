import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {averageSessionData} from "../../models/averageSession";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface IProps {
    averageSession: averageSessionData[]
}

export function LineChart({averageSession}: IProps) {

    const options = {
        responsive: true,
        tension: 0.4,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Durée moyenne des sessions',
            },
        },
    };

    const labels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];


    console.log(labels)

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: averageSession.map((data) => data?.sessionLength),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

        ],
    };

    return (
        <Line options={options} data={data}/>
    )
}