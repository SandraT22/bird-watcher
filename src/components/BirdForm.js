import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BirdForm(props) {

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
    <Form onSubmit={handleBirdFormSubmission}>
      <Form.Group className="mb-3" controlId="commName">
        <Form.Label>Common Name</Form.Label>
        <Form.Control type="commName" placeholder="Enter Bird's Common Name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="sciName">
        <Form.Label>Scientific Name</Form.Label>
        <Form.Control type="sciName" placeholder="Enter Bird's Scientific Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="location" placeholder="Where See Bird?" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="MM/DD/YYYY" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="appearance">
        <Form.Label>Appearance</Form.Label>
        <Form.Control type="appearance" placeholder="Bird's Appearance" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="activity">
        <Form.Label>Activity</Form.Label>
        <Form.Control type="activity" placeholder="What the Bird Doin'?" />
      </Form.Group>
      <Button Button variant="outline-info" type='submit'>Submit Bird</Button>
    </Form>
  );
}
// function BirdForm(props){

//   function handleBirdFormSubmission(event) {
//     event.preventDefault();
//     props.onNewBirdCreation({
//       commName: event.target.commName.value, 
//       sciName: event.target.sciName.value, 
//       location: event.target.location.value, 
//       date: event.target.date.value, 
//       appearance: event.target.appearance.value,
//       activity: event.target.activity.value,
//       id: v4()
//     });
//   }
//   return (
//     <React.Fragment>
//       <hr />
//       <form onSubmit={handleBirdFormSubmission}>
//         <input
//           type='text'
//           name='commName'
//           placeholder='Common Name' />
//         <input
//           type='text'
//           name='sciName'
//           placeholder='Scientific Name' />
//         <input
//           type='text'
//           name='location'
//           placeholder='Location Seen' />
//         <input
//           type='text'
//           name='date'
//           placeholder='Date: MM/DD/YYYY' />
//         <textarea
//           name='appearance'
//           placeholder='Describe the bird.' />
//         <textarea
//           name='activity'
//           placeholder='What was the bird doing??' />
//         <button type='submit'>Submit Bird</button>
//       </form>
//     </React.Fragment>
//   );
// }

BirdForm.propTypes = {
  onNewBirdCreation: PropTypes.func
};


export default BirdForm;