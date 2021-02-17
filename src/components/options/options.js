import React from 'react';
import Game from '../Game/game';
import { Questions } from '../Questions/questions'
import { Col, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './options.css'
import But from '../Button/btn'
import Display from '../Display/display'
let songIdx = 0;


class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }
    selectSong = (props) => {
        songIdx = props.target.value
    }
    render() {

        return (
            <div>
                <Router>
                    <Link to="/options">
                    </Link>
                    <Switch>
                        <Route path="/questions">
                            {this.state.isLoaded ? <Questions /> : ""}
                        </Route>
                        <Route path="/options">
                            <Container>
                                <Row>
                                    <Col className="d-flex justify-content-center mt-5">
                                        <Display className="timerStyle" message={"Choose your song!"}></Display>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col className="d-flex justify-content-center">
                                        <But value={0} onClick={this.selectSong} className="songBtn" message={"Song 1- African Safari Music- Derek and Brandon Fiechter"}></But>
                                    </Col>
                                    <Col className="d-flex justify-content-center">
                                        <But value={1} onClick={this.selectSong} className="songBtn" message={"Song 2- Danse Macabre - Camille Saint-Saens"}></But>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col className="d-flex justify-content-center">
                                        <But value={2} onClick={this.selectSong} className="songBtn" message={"Song 3- Lacrimosa - Wolfgang Amadeus Mozart"}></But>
                                    </Col>
                                    <Col className="d-flex justify-content-center">
                                        <But value={3} onClick={this.selectSong} className="songBtn" message={"Song 4- No Rain - Blind Melon"}></But>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col className="d-flex justify-content-center">
                                        <But value={4} onClick={this.selectSong} className="songBtn" message={"Song 5- Zombie - Cranberries"}></But>
                                    </Col>
                                    <Col className="d-flex justify-content-center">
                                        <But value={5} onClick={this.selectSong} className="songBtn" message={"Song 6- Under The Bridge - Red Hot Chili Peppers"}></But>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col className="d-flex justify-content-center">
                                        <But value={6} onClick={this.selectSong} className="songBtn" message={"Song 7- Time of Your Life - Green Day"}></But>
                                    </Col>
                                    <Col className="d-flex justify-content-center">
                                        <But value={7} onClick={this.selectSong} className="songBtn" message={"Song 8- Phantoms - CzarFace and MF DOOM"}></But>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col className="d-flex justify-content-center">
                                        <But value={8} onClick={this.selectSong} className="songBtn" message={"Song 9- DOOMSDAY - MF DOOM"}></But>
                                    </Col>
                                    <Col className="d-flex justify-content-center">
                                        <But value={9} onClick={this.selectSong} className="songBtn" message={"Song 10- ALL CAPS - MF DOOM"}></But>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col className="d-flex justify-content-center mt-5">
                                        <Link to="/"><But className="answerBtn" message={"Main Menu"}></But></Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Route>
                        <Route path="/">
                            <Game />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )

    }
}
function getSong() {
    return songIdx;
}

export { Options, getSong }