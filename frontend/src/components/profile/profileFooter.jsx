import { useNavigate } from "react-router-dom";
import { navigateToUpdateProfile } from "../../misc/navFunctions";
import Button from "../miscComponents/button"

export default function ProfileFooter ({ profile }) {
    
    const navigate = useNavigate();
    
    function handleNavToEdit () {
        navigateToUpdateProfile(navigate, profile);
    }

    return (
        <Button onClick={ handleNavToEdit } label='Edit' />
    )
}
