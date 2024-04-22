import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfileImage( props ) {
    const myUser = useSelector( (state) => state.localUser.username );
    const profileImage = useSelector( (state) => state.allUsers[myUser].profileImage );

    const navigate = useNavigate();
    const handleClick = (event) => {
        navigate( "/EditProfile" );
    }

    return(
        <>
        <button onClick={handleClick} className="
        float-right hover:scale-105 bg-inherit mr-3 mt-3
        ">
            <img src = {profileImage} className="rounded-full w-32 h-32"/>
        </button>
        </>
    );
}

export default ProfileImage;