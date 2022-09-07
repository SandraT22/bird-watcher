import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Bird(props){
  
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{props.commName} Details</Popover.Header>
      <Popover.Body>
        {props.sciName !== "" ? <li>Latin Name: <em>{props.sciName}</em></li> : null}
        <li>Location: {props.location}</li>
        <li>Date Seen: {props.date}</li>
        {props.appearance !== "" ? <li>Appearance: {props.appearance}</li> : null}
        {props.activity !== "" ? <li>Activity: {props.activity}</li> : null}
      </Popover.Body>
    </Popover>
  );
  
  const Example = () => (
      <Dropdown as={ButtonGroup}>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="info">{props.commName}</Button>
        </OverlayTrigger>
        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />
        <Dropdown.Menu>
        <Dropdown.Item href="#/edit">Edit Bird</Dropdown.Item>
        <Dropdown.Item href="#/delete">Destroy Bird</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
  
  return (
    <div className='mb-3'>
      <Example />
      <br />
    </div>
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

