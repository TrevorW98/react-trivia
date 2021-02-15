import React from 'react';
import Title from '../Title/title'
import { FetchEasy, FetchMed, FetchHard } from '../Services/dataService'
import {Questions} from '../Questions/questions'
import { Col, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


class Options extends React.Component {
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
                                    <Col>
                                        <Link to="/"><button>return</button></Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Route>
                        <Route path="/">
                            <Container>
                                <Row>
                                    <Col>
                                        <Title className="d-flex justify-content-center" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Link to="/questions"><button onClick={asyncFunctionEasy} className="startBtn">Easy</button></Link>
                                        <Link to="/questions"><button onClick={asyncFunctionMed} className="startBtn">Medium</button></Link>
                                    </Col>
                                    <Col>
                                        <Link to="/questions"><button onClick={asyncFunctionHard} className="startBtn">Hard</button></Link>
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

export default Options;