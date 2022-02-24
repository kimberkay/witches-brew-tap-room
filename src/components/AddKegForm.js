import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';
import { Row, Col } from 'react-bootstrap';


function AddKegForm (props) {

  function handleAddKegFormSubmission(event) {
    event.preventDefault();
    props.onAddKegCreation({flavor: event.target.flavor.value, maker: event.target.maker.value, instructions: event.target.maker.value, price: event.target.price.value, pintsLeft: event.target.pintsLeft.value, id: v4()});

        
  }
  return (
    <React.Fragment>
      <Row className="wrapper">
        <div className="col-sm">
      <ReusableForm 
        formSubmissionHandler={handleAddKegFormSubmission}
        buttonText ="Add Keg"/>
        </div>
      </Row>
    </React.Fragment>
  );
}

AddKegForm.propTypes = {
  onAddKegCreation: PropTypes.func
};


export default AddKegForm;




