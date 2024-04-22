import styles from "/src/styles/visualizeMyProduct.module.css";

function VisualizeMyProduct( props ) {
    let stockButton;
    if ( props.product.inStock ) {
        stockButton = <button className={styles.activeProduct} > <h1> ACTIVO </h1> </button>
    } else {
        stockButton = <button className={styles.inactiveProduct}> <h1> CERRADO </h1> </button>
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