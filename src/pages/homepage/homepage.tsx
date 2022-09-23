import User from "../../models/user";
import {useEffect, useState} from "react";
import {getUser} from "../../services/user.service";
import {Activity} from "../../models/activity";
import {getActivity} from "../../services/activity.service";
import {Performance} from "../../models/performance";
import {AverageSession} from "../../models/averageSession";
import {getPerformance} from "../../services/performance.service";
import ChartBar from "../../components/bar/chartBar";
import {ChartRadar} from "../../components/radar/chartRadar";


export default function Homepage() {

    const [user, setUser] = useState<User | undefined>();
    const [activity, setActivity] = useState<Activity | undefined>();
    const [performance, setPerformance] = useState<Performance | undefined>();
    const [averageSession, setAverageSession] = useState<AverageSession | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            setUser(await getUser(12))
            setActivity(await getActivity(12))
            setPerformance(await getPerformance(12))
        }
        fetchData();
    }, [])

    return (
        <div>
            {
                user && <div>{user.userInfos.firstName}</div>
            }
            {
                activity && <ChartBar sessions={activity.sessions} />
            }
            {
                performance && <ChartRadar performance={performance} />
            }
        </div>
    )
}
