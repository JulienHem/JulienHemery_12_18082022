import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './doughnutChart.scss';
import User from "../../models/user";
ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
    user: User
}
export default function DoughnutChart({user} : IProps) {

    const todayScore = user.todayScore * 100;
    const rest = 100 - todayScore;

    console.log(todayScore)

    const options = {
        cutout: 90,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: false,
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                color: '#ffffff',
            },
        },
    }


    const data = {
        labels: ['keks', ''],
        datasets: [
            {
                data: [todayScore, rest],
                borderRadius: 1000,

                backgroundColor: [
                    '#E60000',
                    '#ffffff'
                ],
            },
        ],
    };
    return (
        <div className="doughnut">
            <div className="doughnut-title">Score</div>
            <div className="doughnut-score">
                <div className="doughnut-score-nb">{todayScore + '%'} </div>
                 <div className="doughnut-score-sub">de votre objectif</div>
            </div>
            <div className="doughnut-chart">
                <Doughnut options={options} data={data} />
            </div>
        </div>

    )
}
