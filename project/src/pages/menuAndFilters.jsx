import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slice/localUserSlice";

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

    const handleProfile = (event) => {
        navigate("/EditProfile");
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
        <br></br>
        <div>
            <button onClick={handleProfile}> profileEdit </button>
        </div>
        </>
    );
}

export default MenuAndFilters;