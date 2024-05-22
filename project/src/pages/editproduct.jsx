
import { useLocation } from "react-router-dom";
import GoBackButton from "../components/goBackButton";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
//import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
//import { modifyProductData } from "../slice/productSlice";

import { db } from "../firebase.jsx";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, deleteObject, uploadBytes } from 'firebase/storage';

function EditProduct( props ) {
  const { state } = useLocation(); //por algun motivo debe llamarse 'state'
  //const dispatch = useDispatch();

  const [myProduct,setMyProduct] = useState( {} );
  const [productImageAddress, setProductImageAddress] = useState("");

  const cargarDatos = async () => {
    const productRef = doc( db, "Product", state );
    const snapshot = await getDoc( productRef );

    setProductImageAddress( snapshot.data().productImage );
    const imageRef = ref( getStorage(), 'productImage/' + snapshot.data().productImage );
    getDownloadURL( imageRef ).then( (url) => {
        setMyProduct( { ...snapshot.data(), productImage : url } );
    } )
}
cargarDatos();

const [inputs, setInputs] = useState({
    productName : myProduct.productName,
    price: myProduct.price,
    productImage : myProduct.productImage,
    productDescription : myProduct.productDescription,
});

const [image, setImage] = useState( "" );

  //const myProduct = useSelector( (storeState) => storeState.product[state] );

const handleChange = (event) => {
    const { name, value } = event.target;
    let finalValue;
    if ( name === "productImage" ) {
        setImage( event.target.files[0] );
        finalValue = URL.createObjectURL( event.target.files[0] );
    } else {
        finalValue = value;
    }
    setInputs(values => ({ ...values, [name]: finalValue }));
};

const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("suasdf adsf as ");
    let newProductImage;
    if ( image ) {
        const delRef = ref( getStorage(), 'productImage/' + productImageAddress );
        deleteObject( delRef );

        const imgRef = ref( getStorage(), 'productImage/' + state  );
        uploadBytes( imgRef, image );
        newProductImage = state;
    } else {
        newProductImage = productImageAddress;
    }

    await setDoc( doc( db, "Product", state ), {...inputs, productImage:newProductImage }, { merge: true } );
    //dispatch( modifyProductData( {...inputs, id:state} ) );
    setMyProduct({});
    cargarDatos();
    handleCancel();
};
const handleCancel = (event) => {
    setInputs(values => ({...values,
      productName : myProduct.productName,
      price: myProduct.price,
      productImage : myProduct.productImage,
      productDescription : myProduct.productDescription,
  }))
  setImage("");
}

return (
    <>
        <GoBackButton />
        <UCommerceIcon />

        <div className="mx-auto max-w-md mt-8 p-4 bg-white rounded shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="productName" className="block text-gray-700">Nombre del Producto</label>
                    <input type="text" name="productName" id="productName" value={inputs.productName} onChange={handleChange} className="form-input" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700">Apellido</label>
                    <input type="text" name="price" id="price" value={inputs.price} onChange={handleChange} className="form-input" />
                </div>
                <div className="mb-4">
                    <label htmlFor="productDescription" className="block text-gray-700">Descripcion usuario</label>
                    <input type="text" name="productDescription" id="productDescription" value={inputs.productDescription} onChange={handleChange} className="form-input" />
                </div>
                <div className="mb-4">
                    <label htmlFor="productImage" className="block text-gray-700"> 
                        Foto de perfil

                        <input type="file" name="productImage" id="productImage" 
                        onChange={handleChange}
                        accept= "image/*"
                        />
                    </label>
                    <img src={inputs.productImage} />
                </div>
                <input type="submit" value="Guardar Cambios" 
                className="bg-violet-950 text-white px-4 py-2 rounded-md shadow-md 
                hover:bg-blue-600 hover:scale-105 hover:cursor-pointer hover:bg-fuchsia-950
                focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={handleCancel}
                className="bg-rose-700 text-white px-4 py-2 rounded-md shadow-md 
                hover:scale-105 hover:cursor-pointer hover:bg-rose-900
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                 > Restaurar Datos </button>
            </form>
        </div>
    </>
);
}

export default EditProduct;
