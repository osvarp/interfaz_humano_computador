import GoBackButton from "../components/goBackButton";
import VisualizeMyProduct from "../components/visualizeMyProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function MyProducts( props ) {
    const allProducts = useSelector( (state) => state.product );
    const myUser = useSelector( (state) => state.localUser.username );
    const myProductsId = useSelector( (state) => state.allUsers[myUser].associatedProducts );
    return(
    <>
    <GoBackButton to="/Menu" />
    <h1 className=" 
    text-7xl text-red-500 font-semibold text-center my-10
    " > My Products </h1>
    { myProductsId.map( (productId) => <VisualizeMyProduct key={productId} product={allProducts[productId]} /> ) }
    
    
    <div className="
    flex flex-row justify-around
    " >
        <Link to="/CreateProduct">
            <button 
            className="bg-rose-700 text-white w-64 px-4 py-2 rounded-full my-1 
            shadow-md hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
            > <p> Crear Producto </p> </button>
        </Link>
        <button 
        className="bg-violet-950 text-white w-64 px-4 py-2 rounded-full my-1 
        shadow-md hover:bg-fuchsia-950 focus:outline-none hover:scale-105"
        > <p>Borrar Producto</p></button>
    </div>
    </>
    );
}

export default MyProducts;