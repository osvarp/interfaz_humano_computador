import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slice/localUserSlice";
import ProfileImage from "./profileImage";
import  '../styles/MenuAndFilters.css';

function MenuAndFilters(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = (event) => {
        dispatch(logoutUser());
        navigate("/");
    };

    const handleExplore = (event) => {
        navigate("/Explorar");
    };

    const handleMyProducts = (event) => {
        navigate("/MyProducts");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="menu-container">
            <button onClick={toggleMenu}>
                <img src="../../Hamburger_icon.svg.png" className="hamburger">
                </img>
            </button>
            {isMenuOpen && (
                <div className="menu">
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={handleExplore}>Explore</button>
                    <button onClick={handleMyProducts}>My Products</button>
                </div>
            )}
        </div>
    );
}

export default MenuAndFilters;