import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slice/localUserSlice";
import ProfileImage from "../components/profileImage";

function MenuAndFilters( props ) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = (event) => {
        dispatch( logoutUser() );
        navigate("/");
    }
    const handleExplore = (event) => {
        // esto puede ser usado para poner de alguna manera las preferencias en el momento
        navigate("/Explorar");
    }
    const handleMyProducts = (event) => {
        navigate("/MyProducts")
    }

    return(
        <>
        <div>
            <button onClick={handleLogout} > logout </button>
        </div>
        <br></br>

        <div>
            <button onClick={handleExplore}> explore </button>
        </div>
        <br></br>
        <div>
            <button onClick={handleMyProducts}> myProducts </button>
        </div>
        <ProfileImage />
        </>
    );
}

export default MenuAndFilters;