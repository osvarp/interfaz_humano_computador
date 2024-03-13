
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root.jsx";
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx";
import Explore from "./pages/explore.jsx";

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
    element: <Root/>,
  },
  {
    path: "/InicioSesion",
    element: <Login/>
  },
  {
    path: "/Registro",
    element: <Register/>
  },
  {
    path: "/Explorar",
    element: <Explore productsInSale={productosDePrueba} />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
