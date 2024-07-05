import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './footer'
import Header from './header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Footer/>
  </React.StrictMode>,
)
