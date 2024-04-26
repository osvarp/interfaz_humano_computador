import GoBackButton from "../components/goBackButton";
import ProfileImage from "../components/profileImage";
import EmptySequenceMessage from "../components/emptySequenceMessage";
import VisualizeMyProduct from "../components/visualizeMyProduct";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { removeAssociatedProduct } from "../slice/allUsersSlice";
import { removeProduct } from "../slice/productSlice";
import styles from "../styles/generalStyles.module.css"
import MenuAndFilters from  '/src/components/menuAndFilters.jsx';

function EraseModal( props ) {
    const dispatch = useDispatch();
    const myUser = useSelector( (state) => state.localUser.username );

    const handleErase = (event) => {
        dispatch( removeAssociatedProduct( { user:myUser, product:props.id } ) );
        dispatch( removeProduct( props.id ) );
        props.onCancel();
    }

    return(
        <div className={styles.modal_overlay} onClick={props.onCancel}>
            <div className={styles.modal} >
                <h1 className="text-center">
                    ¿Estas seguro que quieres borrar "{props.productName}"?
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
    const allProducts = useSelector( (state) => state.product );
    const myUser = useSelector( (state) => state.localUser.username );
    const myProductsId = useSelector( (state) => state.allUsers[myUser].associatedProducts );
    const [eraseId, setEraseId] = useState( "" );

    const handleEraseButton = (event) => () => {
        setEraseId( (prevState) => event );
    }

    const handleCloseModal = (event) => {
        setEraseId( (prevState) => "" );
    }

    return(
    <>
    <MenuAndFilters/>
    <ProfileImage />

    { eraseId && <EraseModal id={eraseId} productName={allProducts[eraseId].productName} onCancel={handleCloseModal}/> }

    <h1 className=" 
    text-7xl text-red-500 font-semibold text-center my-10
    " > My Products </h1>
    { myProductsId.length == 0 && <EmptySequenceMessage/> }
    { myProductsId.map( (productId) => <VisualizeMyProduct key={productId} product={allProducts[productId]} onEraseClick={handleEraseButton(productId)} /> ) }
    
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