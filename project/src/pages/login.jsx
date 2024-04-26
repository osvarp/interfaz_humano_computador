import React, { useState } from "react";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import { Link, useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import styles from "/src/styles/generalStyles.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../slice/localUserSlice';

function Login(props) {
    const navigate = useNavigate();
    const [input, setInputs] = useState({ username: "", password: "" });
    const [showConfirmation, setShowConfirmation] = useState(false);
    const allUsers = useSelector( (state) => state.allUsers );
    const dispatch = useDispatch();

    const handleEvent = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const handleOnClick = () => {
        if ( !(input.username in allUsers) ) {
            alert( "el usuario '" + input.username + "' no existe." );
        } else if (input.username && input.password) {
            dispatch( loginUser( input.username ) )
            
            setShowConfirmation(true);
            setTimeout(() => {
                navigate("/Explorar");
            }, 1500);
        } else {
            alert("Por favor, complete todos los campos obligatorios.");
        }
    };

    return (
        <div className={styles.cont}>
            <UCommerceIcon />
            <div className="-mt-10  flex flex-col items-center justify-center ">
                <input
                    name="username"
                    placeholder="username"
                    className="border border-gray-300 rounded-full w-64 px-2 py-2 mt-1
                    focus:outline-none focus:ring-2 focus:ring-blue-500 text-center bg-stone-200"
                    value={input.username}
                    onChange={handleEvent}
                />
                <br />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="border border-gray-300 rounded-full w-64 px-2 py-2 mt-1 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 text-center bg-stone-200"
                    value={input.password}
                    onChange={handleEvent}
                />
                <br />
                <button
                    className="bg-rose-700 text-white w-64 px-2 py-2 mt-4 rounded-full shadow-md 
                    hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center hover:scale-105"
                    onClick={handleOnClick}
                >
                    Log in
                </button>
                
                <br />
                <br />
                <Link to="/Registro">
                    <button
                        className="bg-violet-950 text-white w-64 px-4 py-2 rounded-full my-1 
                    shadow-md hover:bg-fuchsia-950 focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
                    >
                        Register
                    </button>
                </Link>
               
                {showConfirmation && (
                    <div className="mt-4 text-green-500">
                        <FiCheckCircle size={24} />
                        <p className="mt-1">Inicio de sesión exitoso</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
