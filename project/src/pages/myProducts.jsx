import EmptySequenceMessage from "../components/emptySequenceMessage";
import VisualizeMyProduct from "../components/visualizeMyProduct";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
//import { removeAssociatedProduct } from "../slice/allUsersSlice";
//import { removeProduct } from "../slice/productSlice";
import styles from "../styles/generalStyles.module.css"
import NavBar from "./navBar.jsx";

import { db } from "../firebase.jsx";
import { collection, query, where, getDocs,deleteDoc, doc } from "firebase/firestore";


function EraseModal( props ) {
    //const dispatch = useDispatch();
    //const myUser = useSelector( (state) => state.localUser.username );

    const handleErase = async (event) => {

        //dispatch( removeAssociatedProduct( { user:myUser, product:props.id } ) );
        //dispatch( removeProduct( props.id ) );
        await deleteDoc( doc( db, "Product", props.data.id ) );
        props.onErase();
    }

    return(
        <div className={styles.modal_overlay} onClick={props.onCancel}>
            <div className={styles.modal} >
                <h1 className="text-center">
                    ¿Estas seguro que quieres borrar "{props.data.name}"?
                </h1>
                <div className="
                flex justify-around
                ">
                    <button onClick={handleErase} className={styles.redButton}> Borrar </button>
                    <button onClick={props.onCancel} className={styles.blueButton}> Cancelar </button>
                </div>
            </div>
        </div>
    );
}

function MyProducts( props ) {
    //const allProducts = useSelector( (state) => state.product );

    const myUser = useSelector( (state) => state.localUser.username );
    //const myProductsId = useSelector( (state) => state.allUsers[myUser].associatedProducts );
    
    const [myProducts, setMyProducts] = useState([]);
    const [refresh, setRefresh] = useState( true );
    const [eraseInfo, setEraseInfo] = useState( {id:"",name:""} );

    const cargarDatos = async () => {
        const q = query( collection(db, "Product"), where("username","==",myUser));
        const snapshot = await getDocs( q );
        const tmp = [];
        snapshot.forEach( (doc) => {
            tmp.push( { ...doc.data(), id:doc.id } );
        })
        setMyProducts( tmp );
        setRefresh( false );
    }

    const handleEraseButton = (event) => () => {
        setEraseInfo( event );
    }

    const handleCloseModal = (event) => {
        setEraseInfo( {id:"",name:""} );
    }

    const handleErase = (event) => {
        handleCloseModal();
        setRefresh(true);
    }

    if ( refresh ) {
        cargarDatos();
    }

    return(
    <>
    <NavBar/>

    { eraseInfo.id && <EraseModal data={eraseInfo} onCancel={handleCloseModal} onErase={handleErase} /> }
    
    <h1 className=" 
    text-7xl text-red-500 font-semibold text-center my-10
    " > My Products </h1>
    { myProducts.length == 0 && <EmptySequenceMessage/> }
    { myProducts.map( (item) => <VisualizeMyProduct key={item.id} product={ item } onEraseClick={handleEraseButton({id:item.id,name:item.productName})} /> ) }

    <div className="flex justify-center
    " >
        <Link to="/CreateProduct">
            <button className={styles.redButton} > <p> Crear Producto </p> </button>
        </Link>
    </div>
    </>
    );
}

export default MyProducts;