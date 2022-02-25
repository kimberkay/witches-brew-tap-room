import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <p><input
          type='text'
          name='flavor'
          placeholder='Potion Power' /></p>
        <p><input
          type='text'
          name='maker'
          placeholder='Potion Brewer' /></p>
        <p><textarea
          name='instructions'
          placeholder='Describe potion instructions for imbiber' /></p>
        <p><input
          type='text'
          name='price'
          placeholder='Price Per Pint' /> </p>
        <p><input
          type='string'
          name='pintsLeft'
          placeholder='Pints In Keg' /></p>
        <p><button className="button" type='submit'>{props.buttonText}</button></p>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;