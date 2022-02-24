import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";


function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <Row>
      <div className="wrapper">
      <h2 className="h1">Keg Detail</h2>
      <p>Potion Power: {keg.flavor}</p>
      <p>Conjured By: {keg.maker}</p>
      <p>Price: {keg.price}</p>
      <p>Estimated Pints Left: {keg.pintsLeft}</p>
      < button className="button-in-wrapper" onClick={()=> props.onClickingSell(keg.id) }>Sell Pint</button>
      </div>
        < div className="col"></div>
      </Row>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSell: PropTypes.func

};

export default KegDetail;