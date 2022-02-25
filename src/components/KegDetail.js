import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";;




function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <Row>
      <div className="wrapper">
      <h2 className="h1">Keg Detail</h2>
      <p>Potion Power: {keg.flavor}</p>
      <p>Conjured By: {keg.maker}</p>
      <p>Instructions for Use: {keg.instructions}</p>
      <p>Price: {keg.price}</p>
      <p>Estimated Pints Left: {keg.pintsLeft}</p>
      <button className="button-in-wrapper" onClick={() => props.onClickingSell(keg.id) }>Sell Pint</button>
      <button className="button-in-wrapper" onClick={ props.onClickingEdit }>Update Keg</button>
      <button className="button-in-wrapper" onClick={() => props.onClickingDelete(keg.id) }>Remove Keg</button>
      
      </div>
      </Row>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;