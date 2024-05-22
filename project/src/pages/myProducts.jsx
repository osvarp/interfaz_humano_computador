import EmptySequenceMessage from "../components/emptySequenceMessage";
import VisualizeMyProduct from "../components/visualizeMyProduct";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { removeAssociatedProduct } from "../slice/allUsersSlice";
import { removeProduct } from "../slice/productSlice";
import styles from "../styles/generalStyles.module.css"

import { db } from "../firebase.jsx";
import { collection, query, where, getDocs,deleteDoc, doc } from "firebase/firestore";


function EraseModal( props ) {
    //const dispatch = useDispatch();
    //const myUser = useSelector( (state) => state.localUser.username );

    const handleErase = async (event) => {

        //dispatch( removeAssociatedProduct( { user:myUser, product:props.id } ) );
        //dispatch( removeProduct( props.id ) );
        await deleteDoc( doc( db, "Product", props.id ) );
        props.onCancel();
    }

    return(
        <div className={styles.modal_overlay} onClick={props.onCancel}>
            <div className={styles.modal} >
                <h1 className="text-center">
                    ¿Estas seguro que quieres borrar "{props.id}"?
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

    const cargarDatos = async () => {
        const q = query( collection(db, "Product"), where("username","==",myUser));
        const snapshot = await getDocs( q );
        const tmp = [];
        snapshot.forEach( (doc) => {
            tmp.push( { ...doc.data(), id:doc.id } );
        })
        setMyProducts( tmp );
    }
    cargarDatos();

    const [eraseId, setEraseId] = useState( "" );

    const handleEraseButton = (event) => () => {
        setEraseId( (prevState) => event );
    }

    const handleCloseModal = (event) => {
        setEraseId( (prevState) => "" );
    }

    return(
    <>

    { eraseId && <EraseModal id={eraseId} onCancel={handleCloseModal}/> }
    
    <h1 className=" 
    text-7xl text-red-500 font-semibold text-center my-10
    " > My Products </h1>
    { myProducts.length == 0 && <EmptySequenceMessage/> }
    { myProducts.map( (item) => <VisualizeMyProduct key={item.id} product={ item } onEraseClick={handleEraseButton(item.id)} /> ) }

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