import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const[menu,setMenu]=useState('home');

  return (
    <div className="navbar">
        <ul className="nav-menu">
            <li onClick={()=>setMenu("home")}> 
                <Link to="/">Drand</Link>
            </li>
            <li onClick={()=>setMenu("limitedEdition")}>
                <Link to="limitedEdition">Drand</Link>
            </li>
            <li onClick={()=>setMenu("cases")}>
                <Link to="/cases">Drand</Link>
            </li>
            <li onClick={()=>setMenu("screenProtecter")}>
                <Link to="/screenProtecter">Drand</Link>
            </li>
            <li onClick={()=>setMenu("gaming")}>
                <Link to="/gaming">Drand</Link>
            </li>
            <li onClick={()=>setMenu("artifacts")}>
                <Link to="/artifacts">Drand</Link>
            </li>
            <li onClick={()=>setMenu("help")}>
                <Link to="/help">Drand</Link>
            </li>
            <li onClick={()=>setMenu("cart")}>
                <Link to="/cart">Drand</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar