import {Routes, Route} from 'react-router-dom'
import Profile from "../pages/profile/profile";
import Community from "../pages/community/community";
import Homepage from "../pages/homepage/homepage";
import Settings from "../pages/settings/settings";

export default function Router() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/community" element={<Community />}/>
                <Route path="/profile" element={< Profile />}/>
                <Route path="/settings" element={<Settings />}/>
            </Routes>
        </>
    )
}
