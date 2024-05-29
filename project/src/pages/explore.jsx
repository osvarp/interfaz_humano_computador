import React from 'react';
//import { useSelector } from 'react-redux';
import DisplayProduct from '/src/components/displayProduct.jsx';
import EmptySequenceMessage from '/src/components/emptySequenceMessage';
import UCommerceIcon from '/src/components/UCommerceIcon';
<<<<<<< HEAD
import styles from '/src/styles/productDisplay.module.css';
import MenuAndFilters from  '/src/components/menuAndFilters.jsx';
import Navbar from "/src/components/Navbar.jsx";
=======
import { useState } from "react";
import NavBar from './navBar.jsx';

import { db } from "../firebase.jsx";
import { collection, query, where, getDocs } from "firebase/firestore";
>>>>>>> e5ee02b13060d4dfd7d366831f3d1a137c11d0e3


function Explore(props) {
  //const productsInSale = useSelector((state) => state.product);

  const [productsInSale,setProductsInSale] = useState([]);
  const [input, setInput] = useState("");

  const getData = async () => {
    const q = query( collection( db, "Product" ), where( "inStock", "==", true ) );
    const snapshot = await getDocs( q );

    const res = [];
    snapshot.forEach( (doc) => {
      res.push( { ...doc.data(), id: doc.id } );
    })
    setProductsInSale(res);
  }
  if ( productsInSale.length == 0 ){
    getData();
  }
  const handleChange = ( event ) => {
    setInput( (prev) => event.target.value );
  }

  return (
    <>
<<<<<<< HEAD
    <Navbar/>
    <div>
        <img className={styles.smallIcon} src="/public/Diseño sin título.svg" alt="U-Commerce icon" />        
    </div>

=======
    <NavBar/>
>>>>>>> e5ee02b13060d4dfd7d366831f3d1a137c11d0e3
{/* Buscador */}
<div className="group flex items-center">
  <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {/* Icono de búsqueda */}
  </svg>
  <input placeholder="Search" value={input} onChange={handleChange} className="focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow px-3 py-2 rounded-md border border-gray-300" />
</div>

      {/* Contenedor del grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* Botón de retroceso */}
        
        {/* Mostrar mensaje si no hay productos */}
        {productsInSale.length === 0 && <EmptySequenceMessage />}

        {/* Mostrar productos */}
        {productsInSale.map((product) => (
          <div key = {product.id}>
            {(product.productName).includes(input) && 
          <DisplayProduct
            product={product}
            className="bg-white rounded-lg shadow-lg" // Estilo de cada tarjeta de producto
          />
            }
          </div>
        ))}
      </div>
        <br></br>
      {/* Icono de U-Commerce */}
      <UCommerceIcon />
    </>
  );
}

export default Explore;
