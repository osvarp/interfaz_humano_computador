import { useNavigate } from "react-router-dom";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import styles from "/src/styles/editProduct.module.css";

function EditProduct({ producto }) {
  const handleCambiarImagen = () => {
    // Aquí puedes implementar la lógica para cambiar la imagen del producto
    alert('Cambiar imagen');
  };

  return (
    <div className="flex items-stretch">
      <header>
      <div className="text-redChimba font-bold text-center text-4xl">Editar Producto</div>
      </header>
    <div className="container border-4">
      
      <div className="form-group">
        <label htmlFor="nombre" className="">Nombre:</label>
        <input type="text" id="nombre" defaultValue={producto.information.productName} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>

      <div className="form-group">
        <label htmlFor="descripcion">Descripción:</label>
        <input type="text" id="descripcion" defaultValue={producto.information.productDescription} />
      </div>

      <div className="form-group">
        <label htmlFor="precio">Precio:</label>
        <input type="text" id="precio" defaultValue={producto.information.price} />
      </div>

      <div>
        <div className="form-group">
          <label>Imagen Actual:</label>
          <img src={producto.information.productImage} alt="Imagen del producto" className="border-2 border-black"/>
          <button className="cambiar-imagen" onClick={handleCambiarImagen}>Cambiar Imagen</button>
        </div>

        <button type="submit">Guardar Cambios</button>
      </div>
    </div>
    </div>
  );
}

export default EditProduct;
