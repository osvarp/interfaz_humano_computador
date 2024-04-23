import styles from "/src/styles/visualizeMyProduct.module.css";
import { useDispatch } from "react-redux";
import { changeStockState } from "../slice/productSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

function VisualizeMyProduct( props ) {
    const dispatch = useDispatch();
    const [stock, setStock] = useState( { value: props.product.inStock } );

    const handleToggleStock = (event) => {
        let tmp = !stock.value;
        setStock( (state) => ({...state, value: tmp }) );
        dispatch( changeStockState( { product: props.product.id, stock:tmp }) );
    }
    
    let stockButton;
    if ( stock.value ) {
        stockButton = <button className={styles.activeProduct} onClick={handleToggleStock} > <h1> ACTIVO </h1> </button>
    } else {
        stockButton = <button className={styles.inactiveProduct} onClick={handleToggleStock}> <h1> CERRADO </h1> </button>
    }

    return(
        <>
        <div className={styles.productBox}>
            <img src={props.product.productImage} className={styles.productImage} />
            <div className={styles.textBox}>
                <h1 className={styles.productText}> {props.product.productName} </h1>
                <h2 className={styles.productText}> {props.product.price} </h2>
                <p className={styles.productText}> {props.product.productDescription} </p>
            </div>
            <div className={styles.textBox} >
                <Link to="/EditProduct" state={props.product.id} > 
                    <svg width="80px" height="80px" viewBox="0 0 24 24" id="_24x24_On_Light_Edit" data-name="24x24/On Light/Edit" xmlns="http://www.w3.org/2000/svg" className="
                    rounded-full bg-zinc-300 hover:zinc-400 hover:opacity-95 hover:scale-105
                    ">
                        <rect id="view-box" width="24" height="24" fill="none"/>
                        <path id="Shape" d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z" transform="translate(3.25 3.25)" fill="#141124"/>
                    </svg>
                 </Link>
                 <button onClick={props.onEraseClick} className="bg-zinc-300">
                    Borrar
                 </button>
                {stockButton}
            </div>
        </div>
        </>
    );
}

export default VisualizeMyProduct;