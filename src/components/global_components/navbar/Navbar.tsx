import React from 'react'
import { AiOutlineAlignRight } from "react-icons/ai";
import Logo from '../../../assets/images/home/LOgo.gif'
import Image from 'next/image';
import classes from './Navbar.module.css'
import { FaArrowRight } from "react-icons/fa";
function Navbar() {
  return (
    <div className={`${classes.Navbar}`}>
      <nav className="navbar navbar-expand-lg Containers_x">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Image src={Logo} alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon dark"><AiOutlineAlignRight /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`${classes.manu_items} navbar-nav ms-auto mb-2 mb-lg-0`}>
        <li className={` nav-item` }>
          <a className=" active" aria-current="page" href="#"><span className='me-1'>Locations </span> <FaArrowRight /></a>
        </li>
        <li className="nav-item">
          <a className="" href="#"><span className='me-1'>Our Services</span> <FaArrowRight /></a>
        </li>
        <li className="nav-item">
          <a className="" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="" href="#">Pricing</a>
        </li>
       <button className={`${classes.Nav_button}`}><span className='me-4'>Schedule a tour</span> <FaArrowRight /></button>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
