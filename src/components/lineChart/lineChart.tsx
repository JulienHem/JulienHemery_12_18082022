import {Line} from 'react-chartjs-2';
import './lineChart.scss';
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
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.57)'
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
            tooltip: {
                enabled: true,
            },
            legend: {
                display: false,
                labels: {
                    color: '#ffffff',

                }
            },
            title: {
                display: true,
                color: '#ffffff',
            },
        },
    };

    const labels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];



    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: averageSession.map((data) => data?.sessionLength),
                borderColor: '#ffffff',
                backgroundColor: "#ffffff",

            },

        ],
    };

    return (
        <div className="line">
            <div className="line-title">Durée moyenne des sessions</div>

            <div className="line-chart">
                <Line options={options} data={data}/>

            </div>
        </div>


    )
}
