import React from "react";
import Keg from "./Keg"
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import Icon from '../img/plant-circle.png';

function KegList(props) {
  return(
    <React.Fragment>
      <Row>
        <div className="col-sm">
          <div className="wrapper"> 
            <h1 className="h1">Hand Crafted Potions</h1>
              <hr/>
                  {props.kegList.map((keg) =>
                  <Keg 
                  whenKegClicked={ props.onKegSelection }
                  flavor= { keg.flavor } 
                  maker = { keg.maker }
                  price = { keg.price }
                  id={ keg.id }
                  key={ keg.id }/>
                  )}
                  <img className="icon" src={Icon} alt="plant and stars icon"/>
                </div>
            </div>
          <div/>    
        </Row>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;