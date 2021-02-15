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
let end = false;
let q;
let score = 0;

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qArr: [],
            isReady: false,
            end: false,
            idx: 0,
            victoryCount: 0,
            isLoaded: false
        }
    }

    componentDidMount = () => {
        q = getValue();
        console.log("q +" + q);
        this.setState({ qArr: q })
        setTimeout(() => {
            this.setState({ isReady: true })
        }, 1000)
        this.myInterval = setInterval(() => {
            end = getEnd();
            console.log(end)
            score = this.state.victoryCount;
            if (end === true) {
                this.setState({ idx: this.state.idx + 1 })
            }
        }, 1000)
    }
    componentWillUnmount = () => {
        clearInterval(this.myInterval)
    }

    clickValidate = (props) => {
      
            if (this.state.idx === 20) {
                this.setState({ end: true })
            }
            else if (props.target.value === this.state.qArr[this.state.idx].ca) {
                this.setState({ idx: this.state.idx + 1, victoryCount: this.state.victoryCount + 1 })
            } else {
                this.setState({ idx: this.state.idx + 1 })
            }
       
    }
    

    render() {
        return (
            <>
                <Router>
                    <Link to="/questions">
                    </Link>
                    <Switch>
                        <Route path="/questions">
                            {this.state.end ?
                                <>
                                    <Container fluid>
                                        <Row>
                                            <Col>
                                                <Link to="/results"><button className="answerBtn d-flex justify-content-center" >View your results!</button></Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </> :

                                <>
                                    <Container fluid>
                                        <Row>
                                            <Col className="d-flex justify-content-center timerStyle">
                                                {this.state.isReady ? <h1>{this.state.qArr[this.state.idx].question}</h1> : ""}
                                            </Col>
                                        </Row>
                                        <Row className="mt-5 mb-5">
                                            <Col className="d-flex justify-content-center">
                                                {this.state.isReady ? <button className="answerBtn" onClick={this.clickValidate} value={this.state.qArr[this.state.idx].a1}> {this.state.qArr[this.state.idx].a1}</button> : ""}
                                            </Col >
                                            <Col className="d-flex justify-content-center">
                                                {this.state.isReady ? <button className="answerBtn" onClick={this.clickValidate} value={this.state.qArr[this.state.idx].a2}> {this.state.qArr[this.state.idx].a2}</button> : ""}
                                            </Col>
                                        </Row>
                                        <Row className="mt-5">
                                            <Col className="d-flex justify-content-center">
                                                {this.state.isReady ? <button className="answerBtn" onClick={this.clickValidate} value={this.state.qArr[this.state.idx].a3}> {this.state.qArr[this.state.idx].a3}</button> : ""}
                                            </Col>
                                            <Col className="d-flex justify-content-center">
                                                {this.state.isReady ? <button className="answerBtn" onClick={this.clickValidate} value={this.state.qArr[this.state.idx].a4}> {this.state.qArr[this.state.idx].a4}</button> : ""}
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

export { Questions, finalScore }