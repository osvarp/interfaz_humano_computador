import styles from '/src/styles/productDisplay.module.css';
import { useSelector } from "react-redux";

function DisplayProduct( { product } ) {
    const sellerUser = useSelector( (state) => state.allUsers[product.userName] );

    return (
        /*
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
        </div>*/
        
<div className={styles.card}>
  <img src={product.productImage}></img>
  <div className={styles.card__content}>
    <p className={styles.card__title}>{product.productName}</p>
    <p className={styles.card__price}>Price: ${product.price}</p>
    <p className={styles.card__description}>{ product.productDescription }</p>


  </div>

</div>

    )
}

export default DisplayProduct;