import PoliceHat from "../../../assets/police-hat.svg";
import { useNavigate } from 'react-router-dom';

const AdminSignInButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login/admin")
    }
    return (
        <button onClick={handleClick} className='sign-in-button'>
            <img src={PoliceHat} className="admin-logo" />
            Inloggen als beheerder
        </button>
    )
}

export default AdminSignInButton