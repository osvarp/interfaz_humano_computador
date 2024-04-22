import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import GoBackButton from '../components/goBackButton';

import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../slice/productSlice';
import { addAssociatedProduct } from '../slice/allUsersSlice';

function CreateProduct(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({productName:"",price:"",productDescription:"", productImage:"noProductImage.jpg",inStock:false});
    const dispatch = useDispatch();
    
    const myUser = useSelector( (state) => state.localUser.userName );
    const nextId = myUser + "_" + useSelector( (state) => state.allUsers[myUser].nextId );

    const handleChange = (event) => {
        const { name, value } = event.target;
        let finalValue;
        if ( name === "productImage" ) {
            console.log(event.target.files);
            finalValue = URL.createObjectURL( event.target.files[0] );
        } else if( name === "inStock" ) {
            finalValue = !inputs.inStock;
        } else {
            finalValue = value;
        }
        setInputs(values => ({ ...values, [name]: finalValue }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const fullProduct = {...inputs, id : nextId, userName: myUser };
        dispatch( addProduct( fullProduct ) );
        dispatch( addAssociatedProduct( { user:myUser, product:nextId} ) );

        navigate("/MyProducts");
    };

    return (
        <>
            <GoBackButton to="/MyProducts" />
            <UCommerceIcon />

            <div className="mx-auto max-w-md mt-8 p-4 bg-white rounded shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="productName" className="block text-gray-700">Nombre del Producto</label>
                        <input type="text" name="productName" id="productName" value={inputs.productName} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700">Precio del Producto</label>
                        <input type="text" name="price" id="price" value={inputs.price} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="productDescription" className="block text-gray-700">Descripción del Producto</label>
                        <input type="text" name="productDescription" id="productDescription" value={inputs.productDescription} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="inStock" className="block text-gray-700">
                            <input type="checkbox" name="inStock" id="inStock" checked={inputs.inStock} onChange={handleChange} className="form-checkbox" />
                            Iniciar con el producto en stock
                        </label>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="productImage" className="block text-gray-700"> 
                            Imagen del producto

                            <input type="file" name="productImage" id="productImage" 
                            onChange={handleChange}
                            accept= "image/*"
                            />
                        </label>
                        <img src={inputs.productImage} />
                    </div>
                    <input type="submit" value="Crear" 
                    className="bg-violet-950 text-white px-4 py-2 rounded-md shadow-md 
                    hover:bg-blue-600 hover:scale-105 hover:cursor-pointer hover:bg-fuchsia-950
                    focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </form>
            </div>
        </>
    );
}

export default CreateProduct;
