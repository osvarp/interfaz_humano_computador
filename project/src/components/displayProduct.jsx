import styles from '/src/styles/productDisplay.module.css';

function DisplayProduct( { product } ) {
    return (
        <div className={styles.productBox} >
            <div>
                <img src={product.profileImage} className={styles.profileImage} />
                <h4 className={styles.productDisplayText}> {product.userName} </h4>
            </div>
            <div className={styles.imageTextBlock}>
                <img src={product.productImage} className={styles.productImage} />
                <h2 className={styles.productDisplayText}> {product.productName} </h2>
                <h4 className={styles.productDisplayText}> Price: ${product.price} </h4>
            </div>
            <p className={styles.productDisplayDescription}> { product.productDescription } </p>
        </div>
    )
}

export default DisplayProduct;