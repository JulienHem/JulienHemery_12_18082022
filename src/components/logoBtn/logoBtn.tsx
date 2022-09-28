import './logoBtn.scss';

interface IProps {
    img ?: string;
    bgColor ?: string;
}

export default function LogoBtn({img, bgColor}: IProps) {

    return (
        <div className="button" style={{backgroundColor: bgColor}}>
            <img src={img} alt="logo"/>
        </div>
    )
}