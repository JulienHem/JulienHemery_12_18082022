import User from "../../models/user";
import './homepage.scss'
import {useEffect, useState} from "react";
import {getUser} from "../../services/user.service";
import {Activity} from "../../models/activity";
import {getActivity} from "../../services/activity.service";
import {Performance} from "../../models/performance";
import {AverageSession} from "../../models/averageSession";
import {getPerformance} from "../../services/performance.service";
import ChartBar from "../../components/bar/chartBar";
import {ChartRadar} from "../../components/radar/chartRadar";
import Header from "../../components/header/header";
import PageTitle from "../../components/pageTitle/pageTitle";
import SideNav from "../../components/sideNav/sideNav";
import GreyBox from "../../components/greyBox/greyBox";
import FireLogo from '../../assets/fire.svg';
import MeatLogo from '../../assets/meat.svg';
import AppleLogo from '../../assets/apple.svg';
import BurgerLogo from '../../assets/cheeseburger.svg';
import {getAverageSession} from "../../services/averageSession.service";
import {LineChart} from "../../components/lineChart/lineChart";
import DoughnutChart from "../../components/doughnutChart/doughnutChart";
import {useParams} from "react-router-dom";
import ErrorText from "../../components/errorText/errorText";


export default function Homepage() {

    const [user, setUser] = useState<User | undefined>();
    const [activity, setActivity] = useState<Activity | undefined>();
    const [performance, setPerformance] = useState<Performance | undefined>();
    const [averageSession, setAverageSession] = useState<AverageSession | undefined>();
    const [error, setError] = useState<boolean>(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            if( id ) {
                const user = await getUser(parseInt(id))
                if (user) {
                    setUser(user);
                    setActivity(await getActivity(parseInt(id)))
                    setPerformance(await getPerformance(parseInt(id)))
                    setAverageSession(await getAverageSession(parseInt(id)))
                } else {
                    setError(true);
                }
            } else {
                setError(true);
            }
        }
         fetchUser();

    }, [id, error])

    console.log(error)

    return (
        <div className="content">
            <Header/>
            <div className="main">
                <SideNav/>
                <div className="main-content">
                    {
                        error
                            ?
                            <ErrorText/>
                            :
                            (
                                <>

                                    {user && <PageTitle name={user?.userInfos.firstName}/>}
                                    <div className="main-content-stats">
                                        <div className="main-content-stats-charts">
                                            <div className="main-content-stats-charts-top">
                                                {
                                                    activity && <GreyBox isChart={true}>
                                                        <ChartBar sessions={activity.sessions}/>
                                                    </GreyBox>
                                                }
                                            </div>
                                            <div className="main-content-stats-charts-bot">
                                                {
                                                    averageSession &&
                                                    <LineChart averageSession={averageSession.sessions}/>
                                                }
                                                {
                                                    performance && <ChartRadar performance={performance}/>
                                                }
                                                {
                                                    user?.todayScore && <DoughnutChart user={user}/>
                                                }

                                            </div>

                                        </div>
                                        {user && (
                                            <div className="main-content-stats-datas">
                                                <GreyBox isChart={false} logo={FireLogo} title="Calories"
                                                         amount={user.keyData.calorieCount + 'kCal'}
                                                         bgColor='rgba(255, 0, 0, 0.1)'/>
                                                <GreyBox isChart={false} logo={MeatLogo} title="Proteines"
                                                         amount={user.keyData.proteinCount + 'g'}
                                                         bgColor='rgba(74, 184, 255, 0.1)'/>
                                                <GreyBox isChart={false} logo={AppleLogo} title="Glucides"
                                                         amount={user.keyData.carbohydrateCount + 'g'}
                                                         bgColor="rgba(249, 206, 35, 0.1)"/>
                                                <GreyBox isChart={false} logo={BurgerLogo} title="Lipides"
                                                         amount={user.keyData.lipidCount + 'g'}
                                                         bgColor="rgba(253, 81, 129, 0.1)"/>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    )
}
