import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BirdForm from './BirdForm';
import BirdList from './BirdList';

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
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <BirdForm onNewBirdCreation={this.handleAddingNewBirdToList} />
      buttonText = "Return to Bird List";
    } else {
      currentlyVisibleState = null;
      buttonText = "Add Bird";
    }
    return (
      <React.Fragment>
        <Row>
          <Col><BirdList birdList={this.state.mainBirdList} /> <button onClick={this.handleClick}>{buttonText}</button></Col>
          <Col>{currentlyVisibleState}</Col>
        </Row>

      </React.Fragment>
    );
  }

}

export default BirdControl;