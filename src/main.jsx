import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Route from './route'
import Home from './home'
import Cart from './cart'
import Products from './products'
import Checkout from './checkout'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Route/>,
    errorElement:<p>Something Went Wrong !</p>,
    children:[{
      path:"home",
      element:<Home/>
    },{
      path:"cart",
      element:<Cart/>
    },{
      path:"products",
      element:<Products/>
    },
  {
    index:true,
    element:<Home/>
  }]
  },{
    path:"/checkout",
    element:<Checkout/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

