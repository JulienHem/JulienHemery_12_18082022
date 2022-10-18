import { useNavigate } from 'react-router-dom';
import './errorText.scss';

export default function ErrorText() {

    const navigate = useNavigate()

    return(
        <div className="error">
            <h1>Oops, une erreur est survenue !</h1>
            <a onClick={() => navigate(-1)}>Retournez sur votre profil</a>
        </div>
    )
}
