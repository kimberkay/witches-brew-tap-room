import React from 'react';
import { Row,Col } from 'react-bootstrap';
import Logo from '../img/brew-logo.png';



function Header(){
  return (
    <React.Fragment>
      <Row>
        <div className="header-wrapper">
          <img className="logo" src={Logo} alt="picture of cauldron and conjuring hands with Witches' Brew text" />
        </div>
      </Row>
    </React.Fragment>
      
  );
}

export default Header;