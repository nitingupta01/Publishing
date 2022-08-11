import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Navbar(){
    
   const [isMobile, setisMobile] = useState(false);
    
    return(
        <nav className="navbar">
            <h1 className="navbar-logo"><img src="https://as1.ftcdn.net/v2/jpg/02/48/39/94/500_F_248399428_Ugw35Yn0DUMVjWJonRTkWKBF88EYBf4V.jpg"></img></h1>
            <button className="mobile-menu-icon"
            onClick={ ()=> setisMobile(!isMobile) }>≡</button>
            <div className={isMobile?"navbar-mobile-list" :"navbar-list"}
            onClick={() =>setisMobile(false)} >
            <a href="#">Home</a>
            <a href="#">Prices</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            </div>
            
        </nav>
    );
}

export default Navbar;
