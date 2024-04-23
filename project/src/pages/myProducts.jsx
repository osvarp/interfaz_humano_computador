import GoBackButton from "../components/goBackButton";
import ProfileImage from "../components/profileImage";
import EmptySequenceMessage from "../components/emptySequenceMessage";
import VisualizeMyProduct from "../components/visualizeMyProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyProducts( props ) {
    const allProducts = useSelector( (state) => state.product );
    const myUser = useSelector( (state) => state.localUser.username );
    const myProductsId = useSelector( (state) => state.allUsers[myUser].associatedProducts );
    return(
    <>
    <GoBackButton to ="/Menu" />
    <ProfileImage />

    <h1 className=" 
    text-7xl text-red-500 font-semibold text-center my-10
    " > My Products </h1>
    { myProductsId.length == 0 && <EmptySequenceMessage/> }
    { myProductsId.map( (productId) => <VisualizeMyProduct key={productId} product={allProducts[productId]} /> ) }
    
    <div className="flex justify-center
    " >
        <Link to="/CreateProduct">
            <button 
            className="bg-rose-700 text-white w-64 px-4 py-2 rounded-full my-1 
            shadow-md hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
            > <p> Crear Producto </p> </button>
        </Link>
    </div>
    </>
    );
}

export default MyProducts;