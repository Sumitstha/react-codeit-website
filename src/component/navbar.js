
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './navbar.css';


const NavBar = (props) => {
const {items}=props
// console.log(items);
const [isSticky, setIsSticky] = useState(false);
const loc=useLocation().pathname


useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsSticky(scrollPosition > 0);
  };


  window.addEventListener('scroll', handleScroll);

 
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); 
  return (
    <div>
<nav className={'navbar navbar-expand-lg bg-body-tertiary ' + (isSticky ? 'sticky-navbar' : '')}>

  <div className="container-fluid">
    <h1 className="navbar-brand" style={{paddingBottom: '0px'}}>LOGO</h1>
   
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav" style={{gap:'10px'}}>
       
       {items.map((ite,index)=>(
        <div key={index}>
        <NavLink to={ite.path} className={ite.path===loc?"active":"navlink"}>

        {ite.name}
        </NavLink>
       
        </div>
       )
       )}
      </ul>
    </div>
    <div className="btnOut">
    <p href="#" className="btn btn-primary "style={{paddingRight:'10px', marginRight:'10px', marginBottom:'0px'}}>Login</p>
    <p href="#" className="btn btn-primary" style={{marginBottom:'0px'}}>Log Out</p>
    </div>
  </div>
</nav>

    </div>
  )
}

NavBar.propTypes={
  items:PropTypes.arrayOf(
    PropTypes.shape({
    name:PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })
  ),
}
export default NavBar;
