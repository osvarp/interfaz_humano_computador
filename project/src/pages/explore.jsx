
import DisplayProduct from "/src/components/displayProduct.jsx";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import { Link } from "react-router-dom";
import GoBackButton from "../components/goBackButton";

function Explore ( props ) {
    return (
        <>
            <GoBackButton to="/"></GoBackButton>
            <div>
                { props.productsInSale.map( (product) => <DisplayProduct key={product.id} product={product.information} /> ) }            
            </div>
            <UCommerceIcon />
        </>
    )
}

export default Explore;