
import { createBrowserRouter, BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx";
import Explore from "./pages/explore.jsx";
import { Provider } from 'react-redux';
import { store } from './slice/index.jsx';
import ErrorPage from "./pages/errorPage.jsx";
import MyProducts from "./pages/myProducts.jsx";
import CreateProduct from "./pages/createProduct.jsx";
import NavBar from "./pages/navBar.jsx";
import EditProfile from "./pages/editProfile.jsx";
import EditProduct from "./pages/editproduct.jsx";

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/Registro",
    element: <Register/>
  },
  {
    path: "/CreateProduct",
    element: <CreateProduct />
  },
  {
    path: "/EditProduct",
    element: <EditProduct />
  },
  {
    path:"/Menu",
    element: <NavBar />,
    children: [
      {
        path: "/Menu/Explorar",
        element: <Explore/>
      },
      {
        path : "/Menu/MyProducts",
        element: <MyProducts />
      },
    ],
  },
  {
    path: "/EditProfile",
    element: <EditProfile />
  }
]);*/



function App() {

  return (
    <>
      <Provider store={store} >

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Registro" element={<Register/>}/>
        <Route path="/CreateProduct" element={<CreateProduct />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/EditProduct" element={<EditProduct />}/>
        <Route path="/Menu" element={<NavBar />}>
          <Route path="/Menu/Explorar" element={<Explore/>} />
          <Route path="/Menu/MyProducts" element={<MyProducts />} />
        </Route>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>

    </>
  )

  return (
    <>
      <Provider store={store} >
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
