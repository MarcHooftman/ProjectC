import TempLogo from '../../../assets/temp-logo.svg'
import { useNavigate } from 'react-router-dom'

const TemporarySignInButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login/temp")
    }
    return (
        <button onClick={handleClick} className="sign-in-button">
            <img src={TempLogo} className="temp-logo" />
            Inloggen met een code
        </button>
    )
}

export default TemporarySignInButton