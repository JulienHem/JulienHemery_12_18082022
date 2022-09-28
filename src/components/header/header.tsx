import './header.scss';
import MainLogo from '../../assets/logo.svg'
import {Link, useLocation} from "react-router-dom";

export default function Header() {

    return (
        <div className="header">
            <img src={MainLogo} alt="logo"/>
            <div className="header-links">
                <Link to={`/`} style={{textDecoration: 'none'}}>
                    <div
                        className={ 'header-links-link'}>Accueil
                    </div>
                </Link>
                <Link to={`/faq`} style={{textDecoration: 'none'}}>
                    <div
                        className={'header-links-link'}>
                        Profil
                    </div>
                </Link>
                <Link to={`/faq`} style={{textDecoration: 'none'}}>
                    <div
                        className={'header-links-link'}>
                        Réglage
                    </div>
                </Link>
                <Link to={`/community`} style={{textDecoration: 'none'}}>
                    <div
                        className={'header-links-link'}>
                        Communauté
                    </div>
                </Link>
            </div>
        </div>
    )
}