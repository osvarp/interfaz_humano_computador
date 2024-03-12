
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root.jsx";
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx";

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
