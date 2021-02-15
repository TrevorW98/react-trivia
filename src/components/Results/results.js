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
let score;

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        score = finalScore();
    }
    componentWillUnmount() {
        clearInterval(this.newInterval)
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
                                        <p className="timerStyle">
                                            You made {score} points!
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Link to="/game"><button className="answerBtn d-flex justify-content-center" >Restart Game</button></Link>
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