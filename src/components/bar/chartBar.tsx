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
import './chartBar.scss';
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

/**
 *
 * @param { sessionsData[] } sessions - All the sessions for the chart
 * @constructor
 */

export default function ChartBar({sessions}: IProps) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    };

    /**
     * Retrieve the labels of the sessions
     */
    const labels = sessions.map((sessions, index) => {return index.toString()})

    /**
     * Put the data and labels to the chart
     */
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
        <div className="bar">
            <div className="bar-header">
                <div className="bar-header-title">Activité quotidienne</div>
                <div className="bar-header-labels">
                    <div className="bar-header-labels-spec">
                        <div className="black bubble" />
                        <div className="bar-header-labels-spec-title">Poids (kg)</div>
                    </div>
                    <div className="bar-header-labels-spec">
                        <div className="red bubble" />
                        <div className="bar-header-labels-spec-title">Calories brûlées (kCal)</div>
                    </div>
                </div>
            </div>
            <div>
                <Bar options={options} data={data} />
            </div>
        </div>

    )
}
