import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import HomeCategory from '../Route/HomeCategory'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const[menu,setMenu]=useState('home');
    const[hoverMenu,setHoverMenu]=useState('')

    const handleMouseEnter = (category)=>{
        setHoverMenu(category);
    }

    const handleMouseLeave = ()=>{
        setHoverMenu('');
    }

  return (
    <div className="navbar">
        <ul className="nav-menu">
            <li onClick={()=>setMenu("home")}> 
                <Link to="/">Drand</Link>
            </li>
            <li onMouseEnter={()=>handleMouseEnter("Limited Edition")} onClick={()=>setMenu("Limited Edition")}>
                <Link to="Limited Edition">Limited Edition</Link>
                {hoverMenu === "Limited Edition" && <HomeCategory handleMouseleave={handleMouseLeave} category="Limited Edition" />}
            </li>
            <li onMouseEnter={()=>handleMouseEnter("Cases")}  onClick={()=>setMenu("cases")}>
                <Link to="/cases">Cases</Link>
                {hoverMenu === "Cases" && <HomeCategory category="Cases" />}
            </li>
            <li onMouseEnter={()=>handleMouseEnter("Skins")}  onClick={()=>setMenu("Skin")}>
                <Link to="/cases">Skin</Link>
                {hoverMenu === "Skins" && <HomeCategory category="Skins" />}
            </li>
            <li onMouseEnter={()=>handleMouseEnter("Screen Protectors")}  onClick={()=>setMenu("Screen Protectors")}>
                <Link to="/screen Protectors">Screen Protectors</Link>
                {hoverMenu === "Screen Protectors" && <HomeCategory category="Screen Protectors" />}
            </li>
            <li onMouseEnter={()=>handleMouseEnter("Gaming")}  onClick={()=>setMenu("Gaming")}>
                <Link to="/gaming">Gaming</Link>
                {hoverMenu === "Gaming" && <HomeCategory category="Gaming" />}
            </li>
            <li onClick={()=>setMenu("artifacts")}>
                <Link to="/artifacts">Artifacts</Link>
            </li>
            <li onClick={()=>setMenu("help")}>
                <Link to="/help">Help</Link>
            </li>
            <li onClick={()=>setMenu("cart")}>
                <Link to="/cart">Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar