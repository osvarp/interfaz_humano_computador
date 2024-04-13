import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function Login(props) {
    const navigate = useNavigate();
    const handleOnClick = () => { navigate("/Explorar"); };
    
    const [input, setInputs] = useState("");
    const handleEvent = ( event ) => {
        const key = event.target.name;
        const value = event.target.value;
        setInputs( values => ( {...values, [key]:value} ) );
    }
    
    return (
        <>
            <UCommerceIcon />
            <section className="-mt-10 bg-gray-100 flex flex-col items-center justify-center min-h-screen">
                <input name = "email"
                    placeholder="email"
                    className="border border-gray-300 rounded-full w-64 px-2 py-2 mt-1
                    focus:outline-none focus:ring-2 focus:ring-blue-500 text-center bg-stone-200" 
                    value = {input.email} 
                    onChange= { handleEvent } 
                />
                <br />
                <input name = "password"
                    type="password" 
                    placeholder="password"
                    className="border border-gray-300 rounded-full w-64 px-2 py-2 mt-1 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 text-center bg-stone-200" 
                    value = {input.password}
                    onChange = {handleEvent}
                />
                <br />
                <button 
                className="bg-rose-700 text-white w-64 px-2 py-2 mt-4 rounded-full shadow-md 
                hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center" 
                onClick={handleOnClick}>Log in</button>
                <br />
                <br />
                <Link to="/Registro">
                    <button 
                    className="bg-violet-950 text-white w-64 px-4 py-2 rounded-full my-1 
                    shadow-md hover:bg-fuchsia-950 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >Register</button>
                </Link>
            </section>
        </>
    );
}

export default Login;   