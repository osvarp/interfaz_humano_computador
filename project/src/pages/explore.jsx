
import DisplayProduct from "/src/components/displayProduct.jsx";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";

function Explore ( props ) {
    return (
        <>
            { props.productsInSale.map( (product) => <DisplayProduct key={product.id} product={product} /> ) }            
            <UCommerceIcon />
        </>
    )
}

export default Explore;