
import DisplayProduct from "/src/components/displayProduct.jsx";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import { Link } from "react-router-dom";

function Explore ( props ) {
    return (
        <>
            <div>
                <Link to="/InicioSesion" > Home </Link>
            </div>
            { props.productsInSale.map( (product) => <DisplayProduct key={product.id} product={product.information} /> ) }            
            <UCommerceIcon />
        </>
    )
}

export default Explore;