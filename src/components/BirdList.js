import React from 'react';
import Bird from './Bird';
import PropTypes from "prop-types";

function BirdList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.birdList.map((bird, index) =>
        <Bird commName={bird.commName}
          sciName={bird.sciName}
          location={bird.location}
          date={bird.date}
          appearance={bird.appearance}
          activity={bird.activity}
          key={index}/>
      )}
    </React.Fragment>
  );
}

BirdList.propTypes = {
  birdList: PropTypes.array
};

export default BirdList;