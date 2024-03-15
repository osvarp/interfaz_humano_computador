import { useNavigate } from "react-router-dom";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import styles from "/src/styles/editProduct.module.css";

function EditProduct({ producto }) {
  const navigate = useNavigate();

  const handleCambiarImagen = () => {
    // Aquí puedes implementar la lógica para cambiar la imagen del producto
    alert('Cambiar imagen');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <header className="text-center mb-8">
          <div className="text-redChimba font-bold text-4xl">Editar Producto</div>
        </header>

        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
            <input type="text" id="nombre" defaultValue={producto.information.productName} className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción:</label>
            <input type="text" id="descripcion" defaultValue={producto.information.productDescription} className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div className="form-group">
            <label htmlFor="precio" className="block text-sm font-medium text-gray-700">Precio:</label>
            <input type="text" id="precio" defaultValue={producto.information.price} className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Imagen Actual:</label>
            <img src={producto.information.productImage} alt="Imagen del producto" className="w-full h-32 object-cover border border-gray-300 rounded-lg shadow-lg mb-4" />
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={handleCambiarImagen}>Cambiar Imagen</button>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
