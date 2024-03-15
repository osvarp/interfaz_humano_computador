import { useNavigate } from "react-router-dom";
import UCommerceIcon from "/src/components/UCommerceIcon.jsx";
import styles from "/src/styles/editProduct.module.css";

function EditProduct({ producto }) {
  const handleCambiarImagen = () => {
    // Aquí puedes implementar la lógica para cambiar la imagen del producto
    alert('Cambiar imagen');
  };

  return (
    <div className="container">
      <h2>Editar Producto</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" defaultValue={producto.information.productName} />
      </div>

      <div className="form-group">
        <label htmlFor="descripcion">Descripción:</label>
        <input type="text" id="descripcion" defaultValue={producto.information.productDescription} />
      </div>

      <div className="form-group">
        <label htmlFor="precio">Precio:</label>
        <input type="text" id="precio" defaultValue={producto.information.price} />
      </div>

      <div className="form-group">
        <label>Imagen Actual:</label>
        <img src={producto.information.productImage} alt="Imagen del producto" />
        <button className="cambiar-imagen" onClick={handleCambiarImagen}>Cambiar Imagen</button>
      </div>

      <button type="submit">Guardar Cambios</button>
    </div>
  );
}

export default EditProduct;
