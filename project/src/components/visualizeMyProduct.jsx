import styles from "/src/styles/visualizeMyProduct.module.css";
import { useDispatch } from "react-redux";
import { changeStockState } from "../slice/productSlice";
import { useState } from "react";

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
            {stockButton}
        </div>
        </>
    );
}

export default VisualizeMyProduct;