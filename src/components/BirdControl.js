import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BirdForm from './BirdForm';
import BirdList from './BirdList';
import Button from 'react-bootstrap/Button';

class BirdControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBirdList: []
    };
  }

  handleAddingNewBirdToList = (newBird) => {
    const newMainBirdList = this.state.mainBirdList.concat(newBird);
    this.setState({mainBirdList: newMainBirdList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  // returnClick = () => {
  //   this.setState(prevState => ({
  //     formVisibleOnPage: !prevState.formVisibleOnPage
  //   }));
  // }

  render(){
    let currentlyVisibleState = null;
    let button = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <BirdForm onNewBirdCreation={this.handleAddingNewBirdToList} />
      button = null;
    } else {
      currentlyVisibleState = null;
      button = <Button variant="outline-info" onClick={this.handleClick}>Add Bird</Button>
    }
    return (
      <React.Fragment>
        <Row>
          <Col><BirdList birdList={this.state.mainBirdList} /> {button} </Col>
          <Col>{currentlyVisibleState}</Col>
        </Row>

      </React.Fragment>
    );
  }

}

export default BirdControl;