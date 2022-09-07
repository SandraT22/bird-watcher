import React from "react";
import PropTypes from "prop-types";

function Bird(props){
  return (
    <React.Fragment>
      <h3><em>{props.commName}</em></h3>
      <h4>{props.sciName}</h4>
      <p>{props.location}</p>
      <p>{props.date}</p>
      <p>{props.appearance}</p>
      <p>{props.activity}</p>
      <hr/>
    </React.Fragment>
  );
}

Bird.propTypes = {
  commName: PropTypes.string.isRequired,
  sciName: PropTypes.string,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  appearance: PropTypes.string,
  activity: PropTypes.string
};

export default Bird;