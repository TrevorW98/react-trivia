import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../Title/title'
import { FetchEasy, FetchMed, FetchHard } from '../Services/dataService'
import { Questions } from '../Questions/questions'
import Options from '../options/options';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }

  }
  render() {
    const asyncFunctionEasy = () => {
      FetchEasy();
      setTimeout(
        () => {
          this.setState({ isLoaded: true })
        }, 1000)

    }
    const asyncFunctionMed = () => {
      FetchMed();
      setTimeout(
        () => {
          this.setState({ isLoaded: true })
        }, 1000)

    }
    const asyncFunctionHard = () => {
      FetchHard();
      setTimeout(
        () => {
          this.setState({ isLoaded: true })
        }, 1000)

    }
    return (

      <div >
        <Router >
          <Link to="/">
          </Link>
          <Switch>
            <Route path="/questions">
              {this.state.isLoaded ? <Questions /> : ""}
            </Route>
            <Route path="/options">
              <Options />
            </Route>
            <Route path="/">
              <Container>
                <Row>
                  <Col>
                    <Title className="d-flex justify-content-center" />
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <Link to="/questions"><button onClick={asyncFunctionEasy} className="startBtn">Easy</button></Link>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Link to="/questions"><button onClick={asyncFunctionMed} className="startBtn">Medium</button></Link>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Link to="/questions"><button onClick={asyncFunctionHard} className="startBtn">Hard</button></Link>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Link to="/options"><button className="startBtn">Options</button></Link>
                  </Col>
                </Row>
              </Container>
            </Route>
          </Switch>
        </Router>
      </div>

    )
  }
}

export default App;

