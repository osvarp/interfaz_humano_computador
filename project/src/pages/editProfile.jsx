import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import GoBackButton from '../components/goBackButton';

import { useSelector, useDispatch } from 'react-redux';
import { modifyUserData } from '../slice/allUsersSlice';

function EditProfile(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const myUser = useSelector( (state) => state.localUser.username );
    const userData = useSelector( (state) => state.allUsers[myUser] );

    const [inputs, setInputs] = useState({
        name : userData.name,
        surname: userData.surname,
        email : userData.email,
        description : userData.description,
        phoneNumber: userData.phoneNumber,
        seller: userData.seller,
        profileImage: userData.profileImage,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        let finalValue;
        if ( name === "profileImage" ) {
            console.log(event.target.files);
            finalValue = URL.createObjectURL( event.target.files[0] );
        } else if( name === "seller" ) {
            finalValue = !inputs.seller;
        } else {
            finalValue = value;
        }
        setInputs(values => ({ ...values, [name]: finalValue }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch( modifyUserData( {...inputs, username:myUser} ) );
    };

    const handleCancel = (event) => {
        setInputs(values => ({ ...values,
            name : userData.name,
            surname: userData.surname,
            email : userData.email,
            description : userData.description,
            phoneNumber: userData.phoneNumber,
            seller: userData.seller,
            profileImage: userData.profileImage,
        }))
    }

    return (
        <>
            <GoBackButton />
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
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="text" name="email" id="email" value={inputs.email} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">Descripcion usuario</label>
                        <input type="text" name="description" id="description" value={inputs.description} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-700">Numero telefonico</label>
                        <input type="text" name="phoneNumber" id="phoneNumber" value={inputs.phoneNumber} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="seller" className="block text-gray-700">
                            <input type="checkbox" name="seller" id="seller" checked={inputs.seller} onChange={handleChange} className="form-checkbox" />
                            cuenta de vendedor
                        </label>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="profileImage" className="block text-gray-700"> 
                            Foto de perfil

                            <input type="file" name="profileImage" id="profileImage" 
                            onChange={handleChange}
                            accept= "image/*"
                            />
                        </label>
                        <img src={inputs.profileImage} />
                    </div>
                    <input type="submit" value="Guardar Cambios" 
                    className="bg-violet-950 text-white px-4 py-2 rounded-md shadow-md 
                    hover:bg-blue-600 hover:scale-105 hover:cursor-pointer hover:bg-fuchsia-950
                    focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button onClick={handleCancel}
                    className="bg-rose-700 text-white px-4 py-2 rounded-md shadow-md 
                    hover:scale-105 hover:cursor-pointer hover:bg-rose-900
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                     > Restaurar Datos </button>
                </form>
            </div>
        </>
    );
}

export default EditProfile;
