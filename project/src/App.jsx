
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx";
import Explore from "./pages/explore.jsx";
import EditProduct from "./pages/editproduct.jsx";
import { Provider } from 'react-redux';
import { store } from './slice/index.jsx';

const productosDePrueba=[ 
  {
    id: 0,
    information: {
      userName: "asterion",
      productName: "brownie",
      price: 200,
      profileImage: "/public/profileImages/asterion.jpg",
      productImage: "/public/productImages/asterion_brownie.png",
      productDescription: "Rico brownie para pasar la tarde",
    }
  }, 
  {
    id:1,
    information: {
      userName: "jeronimo",
      productName: "durazno",
      price: 8000,
      profileImage: "/public/profileImages/jeronimo.jpg",
      productImage: "/public/productImages/jeronimo_durazno.png",
      productDescription: "Un durazno. Esta bueno.",
    }
  },
  {
    id: 2,
    information: {
      userName: "doña_florinda",
      productName: "pato de hule",
      price: 4000,
      profileImage: "/public/profileImages/dona_florinda.jpg",
      productImage: "/public/productImages/dona_florinda_patoDeHule.jpeg",
      productDescription: "Debugea como los dioses usando la renombrada técnica del ‘rubber duck’.",
    }
  }
];



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/Registro",
    element: <Register/>
  },
  {
    path: "/Explorar",
    element: <Explore productsInSale={productosDePrueba} />
  },
  {
    path: "/EditProduct",
    element: <EditProduct producto={productosDePrueba[1]} />
  }

]);



function App() {

  return (
    <>
      <Provider store={store} >
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
