import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import GoBackButton from '../components/goBackButton';

function Register(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/Explorar");
    };

    return (
        <>
            <GoBackButton to="/" />
            <UCommerceIcon />

            <div className="mx-auto max-w-md mt-8 p-4 bg-white rounded shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Nombre</label>
                        <input type="text" name="name" id="name" value={inputs.name} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="surname" className="block text-gray-700">Apellido</label>
                        <input type="text" name="surname" id="surname" value={inputs.surname} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Correo electrónico</label>
                        <input type="text" name="email" id="email" value={inputs.email} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Usuario</label>
                        <input type="text" name="username" id="username" value={inputs.username} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Contraseña</label>
                        <input type="password" name="password" id="password" value={inputs.password} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="seller" className="block text-gray-700">
                            <input type="checkbox" name="seller" id="seller" value={inputs.seller} onChange={handleChange} className="form-checkbox" />
                            Cuenta para ventas
                        </label>
                    </div>
                    <input type="submit" value="Registrarse" 
                    className="bg-violet-950 text-white px-4 py-2 rounded-md shadow-md 
                    hover:bg-blue-600 hover:scale-105 hover:cursor-pointer hover:bg-fuchsia-950
                    focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </form>
            </div>
        </>
    );
}

export default Register;
