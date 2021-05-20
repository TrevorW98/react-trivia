import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Game from '../Game/game';
import './results.css'
import { finalScore } from '../Questions/questions';
import { Container, Row, Col } from 'react-bootstrap';
import But from '../Button/btn'
import Display from '../Display/display'
import Image from '../images/Panda8.jpg'

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }
    componentDidMount() {
        this.setState({ score: finalScore() })
    }
    render() {
        return (
            <>
                <Router>
                    <Link to="/results">
                    </Link>
                    <Switch>
                        <Route path="/results">
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <p className="timerStyle d-flex justify-content-center mt-5">
                                            Congratulations! You made {this.state.score} out of 20 points!
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-center mt-5">
                                        <Display className="final text-center" message="Every year we lose multiple species of animals due to factors such as pollution and deforestation. There are ways to help and learn more, see the links below for more information"></Display>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                        <img src={Image} alt={"A panda"}></img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Display className="final text-center" message={"https://www.endangered.org/15-ways-to-help-protect-endangered-species/"}></Display>
                                    </Col>
                                    <Col>
                                        <Display className="final text-center" message={"https://www.worldwildlife.org/"}></Display>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className="d-flex justify-content-center mt-5">
                                        <Link to="/game"><But className="answerBtn" message={"Restart Game"}></But></Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Route>
                        <Route path='/game'>
                            <Game />
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}
export default Results;