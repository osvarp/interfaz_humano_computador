import { useState } from 'react';
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import GoBackButton from '../components/goBackButton';
import '../styles/EditProfile.css'
import { FiCheckCircle } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
//import { modifyUserData } from '../slice/allUsersSlice';

import { db } from "../firebase.jsx";
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, deleteObject, uploadBytes } from 'firebase/storage';


function EditProfile(props) {
    //const dispatch = useDispatch();

    const myUser = useSelector( (state) => state.localUser.username );
    const [userData,setUserData] = useState( {} );
    const [refresh,setRefresh] = useState( {dataBase:true,syncInfo:true} );
    //const userData = useSelector( (state) => state.allUsers[myUser] );
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [inputs, setInputs] = useState({
        name : "",
        surname: "",
        email : "",
        description : "",
        phoneNumber: "",
        seller: "",
        profileImage: "",
    });
    const [isSaving, setIsSaving] = useState(false);
    const [imageAddress,setImageAddress] = useState("");
    const [imageLoaded,setImageLoaded] = useState("");

    const loadData = async () => {
        const q = query( collection( db, "Users" ), where( "username", "==", myUser ) );
        const snapshot = await getDocs( q );

        let tmp = {};
        snapshot.forEach( (element) => {
            tmp = { ...element.data(), id: element.id };
        } )
        setImageAddress( tmp.profileImage );
        const imageRef = ref( getStorage(), 'userImage/' + tmp.profileImage );
        await getDownloadURL( imageRef ).then( (url) => {
            setUserData( { ...tmp, profileImage : url } );
        } )
        setRefresh( {...refresh,dataBase:false} );
    }

    const syncData = () => {
        setInputs({
            name : userData.name,
            surname: userData.surname,
            email : userData.email,
            description : userData.description,
            phoneNumber: userData.phoneNumber,
            seller: userData.seller,
            profileImage: userData.profileImage,
        });
        setImageLoaded( "" );
        setRefresh( {...refresh,syncInfo:false} );
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        let finalValue;
        if ( name === "profileImage" ) {
            finalValue = URL.createObjectURL( event.target.files[0] );
            setImageLoaded( event.target.files[0] );
        } else if( name === "seller" ) {
            finalValue = !inputs.seller;
        } else {
            finalValue = value;
        }
        setInputs(values => ({ ...values, [name]: finalValue }));
    };

    const animationTimer = (confirmation) => {
        setIsSaving(true);
    
        // Espera 3 segundos (3000 milisegundos) antes de ejecutar la siguiente línea
        setTimeout(async () => {
            setIsSaving(false);
            if ( confirmation ){
                setShowConfirmation(true)
                setTimeout( async() => {
                    setShowConfirmation( false );
                }, 3000 );
            }

        }, 3000);
    }

    const sendToDatabase = async () => {
        let newImage;
        if ( imageLoaded ) {

            if ( imageAddress === userData.id ) {
                const delRef = ref( getStorage(), 'userImage/' + imageAddress );
                deleteObject( delRef );
            }

            const imgRef = ref( getStorage(), 'userImage/' + userData.id  );
            uploadBytes( imgRef, imageLoaded );
            newImage = userData.id;
        } else {
            newImage = imageAddress;
        }

        await setDoc( doc( db, "Users", userData.id ), {...inputs, profileImage:newImage }, { merge: true } );
        setRefresh( { dataBase:true, syncInfo:true } );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendToDatabase();
        animationTimer(true);
    };

    const handleCancel =  (event) => {        
        event.preventDefault();
        setRefresh( {...refresh, syncInfo:true} );

        animationTimer(false);
    }

    if ( refresh.dataBase ) {
        loadData();
    }
    if ( !refresh.dataBase && refresh.syncInfo ) {
        syncData();
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
                    {isSaving && (
                    <div className="newtons-cradle">
                        <div className="newtons-cradle__dot"></div>
                        <div className="newtons-cradle__dot"></div>
                        <div className="newtons-cradle__dot"></div>
                        <div className="newtons-cradle__dot"></div>
                    </div>
                    )}
                    {showConfirmation && (
                    <div className="mt-4 text-green-500">
                        <FiCheckCircle size={24} />
                        <p className="mt-1">Se guardaron los cambios</p>
                    </div>
                    )}
                    <input type="submit" value="Guardar Cambios" onClick={handleSubmit}
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
