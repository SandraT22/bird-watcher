import React from "react";
import Header from "./Header";
import BirdControl from "./BirdControl";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BirdForm from './BirdForm';
// import BirdList from './BirdList';

function App(){
  return ( 
    <React.Fragment>
      <Container>
        <Header />
        <Row>
          <Col><BirdControl /></Col>
          {/* <Col><BirdForm /></Col>
          <Col><BirdList /></Col> */}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;