import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Col, Container, Row } from 'react-bootstrap'
import Display from '../Display/display'
import { FetchEasy, FetchMed, FetchHard } from '../Services/dataService'
import { Questions } from '../Questions/questions'
import {Options} from '../Options/options';
import But from '../Button/btn'
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
                <Row >
                  <Col className={"d-flex justify-content-center mt-5"}>
                    <Display className="timerStyle" message={"Welcome to Animal Trivia!"}/>
                  </Col>
                </Row>
                <Row>
                  <Col className={"d-flex justify-content-center mt-5"}>
                  <Display className={"timerStyle text-center"} message={"Choose from Easy, household pet facts, Medium, exotic pet facts, or Hard, wild animal facts."}></Display>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center mt-5">
                    <Link to="/questions"><But onClick={asyncFunctionEasy} className="startBtn" message={"Easy"}></But></Link>
                  </Col>
                  <Col className="d-flex justify-content-center mt-5">
                    <Link to="/questions"><But onClick={asyncFunctionMed} className="startBtn" message={"Medium"}></But></Link>
                  </Col>
                  <Col className="d-flex justify-content-center mt-5">
                    <Link to="/questions"><But onClick={asyncFunctionHard} className="startBtn" message={"Hard"}></But></Link>
                  </Col>
                  <Col className="d-flex justify-content-center mt-5">
                    <Link to="/options"><But className="startBtn"  message={"Options"}></But></Link>
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

