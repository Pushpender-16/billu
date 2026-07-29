import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
   <nav style={{}}   >
        <ul>
             <a class="" href="/">
      <img  src="https://billu.co.in/assets/img/customer_logo.svg" alt="" width="120" height="40" class="d-inline-block align-text-top"/> </a> 

            <li><a href="/">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES & CATEGORIES</a></li>
            <li><a href="#contact">CONTACT US</a></li>
            <li><a href="#sbms">SALON BUSINESS MANAGEMENT SOLUTION (POS)</a></li>
       
    <a
  href="#"
  style={{
    display: "inline-block",
 marginLeft: "60px",
    backgroundColor: "black",
    color: "white",
    fontSize : "small",
    textDecoration: "none",
    padding: "8px 48px",
    borderRadius: "6px"
  }}
>
  SALON PARTNER
</a>
        </ul>
    </nav>
</>
  )
}

export default Navbar