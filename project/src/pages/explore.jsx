import styles from '/src/styles/productDisplay.module.css';

import DisplayProduct from "/src/components/displayProduct.jsx";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import GoBackButton from "../components/goBackButton";


import { useSelector } from "react-redux";

function Explore ( props ) {
    const productsInSale = useSelector( (state) => state.product ) ;

    return (
        <>
            <GoBackButton to="/Menu"></GoBackButton>

            <div className={styles.container}>
                <div className={styles.centeredDiv}>
                    { Object.keys(productsInSale).map( (product) => <DisplayProduct key={productsInSale[product].id} product={productsInSale[product]}  /> ) }
                </div>
            </div>
            <br></br>

            <UCommerceIcon />
        </>
    )
}

export default Explore;