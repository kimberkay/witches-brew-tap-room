import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { Row, Col } from 'react-bootstrap';

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({flavor: event.target.flavor.value, maker: event.target.maker.value, instructions: event.target.maker.value, price: event.target.price.value, pintsLeft: event.target.pintsLeft.value, id: keg.id});
  }

  return (
    <React.Fragment>
    <div className="wrapper">
    <Row> 
      <h2 className="h1">Keg to Edit</h2>
    </Row>
      <Row className="justify-content-center">
        <div className="col-4">
      <p> Potion Power: {keg.flavor}</p>
      <p> Conjured By: {keg.maker}</p>
      <p> Instructions: {keg.instructions}</p>
      <p> Price: {keg.price}</p>
      <p> Pints Left: {keg.pintsLeft}</p>
      </div>
      <div className="col-4">
        <div className="edit-form-alignment">
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
        </div>
      </div>
      </Row>
      </div>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;