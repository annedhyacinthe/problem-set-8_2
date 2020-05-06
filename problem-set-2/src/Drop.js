import React from 'react';
import Button from './Button';


const DropDown = (props) => {

 
  function dropButton(id){
      return <Button id={id} />
  }
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
        {dropButton(1)}
        </a>
        <a className="navbar-item">
        {dropButton(2)}
        </a>
        <a className="navbar-item">
        {dropButton(3)}
        </a>
        <a className="navbar-item">
        {dropButton(4)}
        </a>
        <a className="navbar-item">
        {dropButton(5)}
        </a>
        <a className="navbar-item">
        {dropButton(6)}
        </a>
      </div>
  
    </div>
  </nav>
  )
}

export default DropDown;