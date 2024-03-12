
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root.jsx";
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx";
import Explore from "./pages/explore.jsx";

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
    element: <Explore productsInSale={[ {name:"oscar", id: 0}, {name:"juanDiego",id:1}]} />
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
