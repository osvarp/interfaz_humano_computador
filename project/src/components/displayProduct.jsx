import styles from '/src/styles/productDisplay.module.css';

function DisplayProduct( { product } ) {
    return (
        <>
        <div className={styles.productBox} >
            <img src={product.profileImage} className={styles.profileImage} />
            <h4 className={styles.productDisplayText}> {product.userName} </h4>
            <h2 className={styles.productDisplayText}> {product.productName} </h2>
            <h4 className={styles.productDisplayText}> ${product.price} </h4>
            <img src={product.productImage} className={styles.productImage} />
            <p className={styles.productDisplayText}> { product.productDescription } </p>
        </div>
        </>
    )
}

export default DisplayProduct;