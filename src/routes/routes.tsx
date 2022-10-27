import {Routes, Route} from 'react-router-dom'
import Profile from "../pages/profile/profile";
import Community from "../pages/community/community";
import Homepage from "../pages/homepage/homepage";
import Settings from "../pages/settings/settings";
import LandingPage from '../pages/landingPage/landingPage';

export default function Router() {

    return (
            <Routes>
                <Route path="/" element={ <LandingPage />} />
                <Route path="/:id" element={ <Homepage /> }/>
                <Route path="/:id/community" element={<Community /> }/>
                <Route path="/:id/profile" element={ <Profile /> }/>
                <Route path="/:id/settings" element={ <Settings /> }/>
            </Routes>
    )
}
