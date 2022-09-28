import './greyBox.scss';
import LogoBtn from "../logoBtn/logoBtn";

interface IProps {
    children?: any;
    isChart: boolean;
    amount ?: number | string;
    title ?: string;
    logo ?: string;
    bgColor ?: string;
}

export default function GreyBox({children, isChart, amount, title, logo, bgColor}: IProps) {


    return (
        <div className="box">
            {
                isChart
                    ?
                        (
                        <div>
                            {children}
                        </div>
                        )
                    :
                    (
                        <div className="box-amounts">
                            <LogoBtn img={logo} bgColor={bgColor} />
                            <div className="box-amounts-details">
                                <div className="box-amounts-details-amount">{amount}</div>
                                <div className="box-amounts-details-title">{title}</div>
                            </div>
                        </div>
                    )

            }

        </div>
    )
}