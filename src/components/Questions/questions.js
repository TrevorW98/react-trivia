import React from 'react';
import { Col, Row, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { getValue } from '../Services/dataService'
import { Timer, getEnd } from '../Clock/timer';
import './questions.css'
import Results from '../Results/results';
import But from '../Button/btn'
import Display from '../Display/display'
let end = false;
let q;
let score = 0;
let resetTimerOnClick = false;

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qArr: [],
            isReady: false,
            stop: false,
            idx: 0,
            victoryCount: 0,
            isLoaded: false
        }
    }

    componentDidMount = () => {
        q = getValue();
        this.setState({ qArr: q })
        setTimeout(() => {
            this.setState({ isReady: true })
        }, 1000)
        this.firstInterval = setInterval(() => {
            score = this.state.victoryCount;
            resetTimerOnClick = false;
            end = getEnd();
            if (end === true) {
                this.setState({ idx: this.state.idx + 1 })
               
            }
        }, 1000)
    }
    componentWillUnmount = () => {
        clearInterval(this.firstInterval);
    }

    clickValidate = (props) => {
        if (this.state.idx === 20) {
            this.setState({ stop: true, isReady: false })
        }
        else if (props.target.value === this.state.qArr[this.state.idx].ca) {
            this.setState({ idx: this.state.idx + 1, victoryCount: this.state.victoryCount + 1 })
            resetTimerOnClick = true;
        } else {
            this.setState({ idx: this.state.idx + 1 })
            resetTimerOnClick = true;
        }
        console.log(this.state.victoryCount)

    }

    render() {
        return (
            <>
                <Router>
                    <Link to="/questions">
                    </Link>
                    <Switch>
                        <Route path="/questions">
                            {this.state.stop ?
                                <>
                                    <Container fluid>
                                        <Row>
                                            <Col className="d-flex justify-content-center mt-5">
                                                <Link to="/results"><But className="answerBtn" message={"View your results!"}></But></Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </> :

                                <>
                                    <Container fluid>
                                        <Row>
                                            <Col className="d-flex justify-content-center timerStyle mt-5">
                                                {this.state.isReady ? <Display message={this.state.qArr[this.state.idx].question}></Display> : ""}
                                            </Col>
                                        </Row>
                                        <Row className="mt-5 mb-5">
                                            <Col className="d-flex justify-content-center">
                                                {this.state.isReady ? <But className="answerBtn" onClick={this.clickValidate} value={this.state.qArr[this.state.idx].a1} message={this.state.qArr[this.state.idx].a1}></But> : ""}
                                            </Col >
                                            <Col className="d-flex justify-content-center">
                                                {this.state.isReady ? <But className="answerBtn" onClick={this.clickValidate} value={this.state.qArr[this.state.idx].a2} message={this.state.qArr[this.state.idx].a2}></But> : ""}
                                            </Col>
                                        </Row>
                                        <Row className="mt-5">
                                            <Col className="d-flex justify-content-center">
                                                {this.state.isReady ? <But className="answerBtn" onClick={this.clickValidate} value={this.state.qArr[this.state.idx].a3} message={this.state.qArr[this.state.idx].a3}> </But> : ""}
                                            </Col>
                                            <Col className="d-flex justify-content-center">
                                                {this.state.isReady ? <But className="answerBtn" onClick={this.clickValidate} value={this.state.qArr[this.state.idx].a4} message={this.state.qArr[this.state.idx].a4}> </But> : ""}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="d-flex justify-content-center timerStyle">
                                                <Timer />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="d-flex justify-content-center timerStyle">
                                                {this.state.isReady ? <p> {this.state.victoryCount} </p> : ""}
                                            </Col>
                                        </Row>
                                    </Container>
                                </>
                            }
                        </Route>
                        <Route path="/results">
                            <Results />
                        </Route>
                    </Switch>
                </Router>

            </>

        )
    }
}
function finalScore() {
    return score;
}
function restartTimer() {
    return resetTimerOnClick;
}

export { Questions, finalScore, restartTimer }