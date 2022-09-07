import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function BirdForm(props){

  function handleBirdFormSubmission(event) {
    event.preventDefault();
    props.onNewBirdCreation({
      commName: event.target.commName.value, 
      sciName: event.target.sciName.value, 
      location: event.target.location.value, 
      date: event.target.date.value, 
      appearance: event.target.appearance.value,
      activity: event.target.activity.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <hr />
      <form onSubmit={handleBirdFormSubmission}>
        <input
          type='text'
          name='commName'
          placeholder='Common Name' />
        <input
          type='text'
          name='sciName'
          placeholder='Scientific Name' />
        <input
          type='text'
          name='location'
          placeholder='Location Seen' />
        <input
          type='text'
          name='date'
          placeholder='Date: MM/DD/YYYY' />
        <textarea
          name='appearance'
          placeholder='Describe the bird.' />
        <textarea
          name='activity'
          placeholder='What was the bird doing??' />
        <button type='submit'>Submit Bird</button>
      </form>
    </React.Fragment>
  );
}

BirdForm.propTypes = {
  onNewBirdCreation: PropTypes.func
};


export default BirdForm;