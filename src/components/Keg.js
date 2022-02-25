import React from "react";
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div className="select-hover" onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.flavor}</h3>
        <p>{props.maker}</p>
        <p>{props.instructions}</p>
        <p>{props.price}</p>
        <p>{props.pintsLeft}</p>
      </div>
        <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  flavor: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pintsLeft: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;


