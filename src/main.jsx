import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './footer'
import Header from './header'
import Products from './products'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Products/>
    <Footer/>
  </React.StrictMode>,
)

