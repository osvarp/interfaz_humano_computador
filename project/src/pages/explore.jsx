import React from 'react';
import { useSelector } from 'react-redux';
import DisplayProduct from '/src/components/displayProduct.jsx';
import GoBackButton from '/src/components/goBackButton';
import EmptySequenceMessage from '/src/components/emptySequenceMessage';
import ProfileImage from '/src/components/profileImage';
import UCommerceIcon from '/src/components/UCommerceIcon';
import MenuAndFilters from  '/src/components/menuAndFilters.jsx';
function Explore(props) {
  const productsInSale = useSelector((state) => state.product);

  return (
    <>

{/* Buscador */}
<div className="group flex items-center">
  <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {/* Icono de búsqueda */}
  </svg>
  <input placeholder="Search" type="search" className="focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow px-3 py-2 rounded-md border border-gray-300" />
</div>

      {/* Contenedor del grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* Botón de retroceso */}
        
        {/* Mostrar mensaje si no hay productos */}
        {Object.keys(productsInSale).length === 0 && <EmptySequenceMessage />}

        {/* Mostrar productos */}
        {Object.keys(productsInSale).map((product) => (
          <DisplayProduct
            key={productsInSale[product].id}
            product={productsInSale[product]}
            className="bg-white rounded-lg shadow-lg" // Estilo de cada tarjeta de producto
          />
        ))}
      </div>
        <br></br>
      {/* Icono de U-Commerce */}
      <UCommerceIcon />
    </>
  );
}

export default Explore;
