import styles from '/src/styles/productDisplay.module.css';
import { useSelector } from "react-redux";

function DisplayProduct( { product } ) {
    const sellerUser = useSelector( (state) => state.allUsers[product.userName] );

    return (
        <div className={styles.productBox} >
            <div className = {styles.imageFlexBox} >
                <img src={sellerUser.profileImage} className={styles.profileImage} />
                <h4 className={styles.productDisplayText}> {product.userName} </h4>
            </div>

            <div className={styles.imageFlexBox}>
                <img src={product.productImage} className={styles.productImage} />
                <div className={styles.priceBlock} >
                    <h2 className={styles.productDisplayText}> {product.productName} </h2>
                    <h4 className={styles.productDisplayText}> Price: ${product.price} </h4>
                </div>
            </div>

            <p className={styles.productDisplayText}> { product.productDescription } </p>
        </div>
    )
}

export default DisplayProduct;