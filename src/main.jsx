import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from './pages/Login';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './style.scss'

const Layout = ()=>{
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/post/:id",
        element:<Single></Single>
      },
      {
        path: "/Write",
        element: <Write></Write>
      }
    ]
  },
  {
    path: "/Register",
    element: <Register></Register>
  },
  {
    path: "/Login",
    element: <Login></Login>
  },
  {
    path: "/Single",
    element: <Single></Single>
  },
  {
    path: "/Write",
    element: <Write></Write>
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);

