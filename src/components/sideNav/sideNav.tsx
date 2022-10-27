import './sideNav.scss';
import YogaLogo from '../../assets/yoga.svg';
import SwimLogo from '../../assets/natation.svg';
import BicycleLogo from '../../assets/velo.svg';
import WeightLogo from '../../assets/haltere.svg';
import LogoBtn from "../logoBtn/logoBtn";

export default function SideNav() {

    return (
        <div className="sideNav">
            <LogoBtn img={YogaLogo} bgColor='#ffffff'/>
            <LogoBtn img={SwimLogo} bgColor='#ffffff'/>
            <LogoBtn img={BicycleLogo} bgColor='#ffffff'/>
            <LogoBtn img={WeightLogo} bgColor='#ffffff'/>
            <div className="sideNav-title">Copyright, SportSee 2022</div>
        </div>
    )
}