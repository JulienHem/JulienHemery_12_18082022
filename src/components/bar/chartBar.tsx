import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {sessionsData} from "../../models/activity";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


interface IProps {
    sessions: sessionsData[]
}

export default function ChartBar({sessions}: IProps) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Activité quotidienne',
            },
        },
    };

    const labels = sessions.map((sessions, index) => {return index.toString()})

    const data = {
        labels,
        datasets: [
            {
                borderRadius: 10,
                barThickness : 25,
                borderColor: 'rgba(230,0,0,0)',
                borderWidth: 5,
                label: 'Kilogramme',
                data: sessions.map(session => session.kilogram),
                backgroundColor: '#282D30',

            },
            {
                borderRadius: 10,
                barThickness : 25,
                borderColor: 'rgba(230,0,0,0)',
                borderWidth: 5,
                label: 'Calorie',
                data: sessions.map(session => session.calories),
                backgroundColor: '#E60000',

            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    )
}
