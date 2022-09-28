import './pageTitle.scss';

interface IProps {
    name: string;
}

export default function PageTitle({name}: IProps) {


    return (
        <div className="name">
            <div className="name-main">Bonjour <div style={{color: "#FF0101"}}>{name}</div></div>
            <div className="name-sub">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
    )
}