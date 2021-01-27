import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './components/navbar/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // triviaQ: "",
      // asw1: "",
      // asw2: "",
      // asw3: "",
      // asw4: "",
      // aswC: "",
      // diffSet: false,
      // difficulty: "",
      // arr: [],
      // fullURL: ""
    }

  }

  render() {
    return (
      <Container fluid className="pageBG">
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;

