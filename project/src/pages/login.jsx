import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const handleOnClick = () => { navigate("/Explorar"); };
    
    return (
        <>
            <UCommerceIcon />
            <section className="-mt-10 bg-gray-100 flex flex-col items-center justify-center min-h-screen">
                <label className="text-gray-700">
                    Email:
                    <input className="border border-gray-300 rounded-md px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </label>
                <br />
                <label className="text-gray-700">
                    Password:
                    <input type="password" className="border border-gray-300 rounded-md px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </label>
                <br />
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleOnClick}>Log in</button>
                <br />
                <br />
                <Link to="/Registro">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Register</button>
                </Link>
            </section>
        </>
    );
}

export default Login;   