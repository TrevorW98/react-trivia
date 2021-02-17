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

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }
    componentDidMount() {
        this.setState({score: finalScore()})
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