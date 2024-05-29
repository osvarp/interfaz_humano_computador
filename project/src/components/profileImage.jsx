import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { db } from "../firebase.jsx";
import { query, where, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

function ProfileImage( props ) {
    const myUser = useSelector( (state) => state.localUser.username );
    //const profileImage = useSelector( (state) => state.allUsers[myUser].profileImage );
    const [profileImage,setProfileImage] = useState( "/defaultUserPicture.png" );
    const [refresh, setRefresh] = useState( true );
    const navigate = useNavigate();
    
    const loadImage = async () => {
        const q  = query ( collection(db, "Users"), where( "username", "==", myUser ));
        const snapshot = await getDocs( q );
        let tmp = "";
        snapshot.forEach( (elem) => {
            tmp = elem.data().profileImage;
        } )

        const imageRef = ref( getStorage(), "userImage/" + tmp );
        await getDownloadURL( imageRef ).then( (url) => {
            setProfileImage( url );
        } )
        setRefresh( false );
    }

    const handleClick = (event) => {
        navigate( "/EditProfile" );
    }
    
    if ( refresh ) {
        loadImage();
    }

    return(
        <>
        <button onClick={handleClick} className="
        float-right hover:scale-105 bg-inherit mr-3 mt-3
        ">
            <img src = {profileImage} className="rounded-full w-14 h-14"/>
        </button>
        </>
    );
}

export default ProfileImage;