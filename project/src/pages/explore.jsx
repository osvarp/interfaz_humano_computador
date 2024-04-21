
import DisplayProduct from "/src/components/displayProduct.jsx";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import GoBackButton from "../components/goBackButton";

import { useSelector } from "react-redux";

function Explore ( props ) {
    const productsInSale = useSelector( (state) => state.product ) ;

    return (
        <>
            <GoBackButton to="/"></GoBackButton>
            <div>
                { Object.keys(productsInSale).map( (product) => <DisplayProduct key={productsInSale[product].id} product={productsInSale[product]} /> ) }
            </div>
            <UCommerceIcon />
        </>
    )
}

export default Explore;