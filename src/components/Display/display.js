import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
    console.log(this.props.array)
  }

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid >
                        <Row>
                            <Col className="center">
                                {/* <h1>{props.question}</h1> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="center">
                                {/* <Button className="answerBtn">{props.answ1}</Button>
                            <Button className="answerBtn">{props.answ2}</Button> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="center">
                                {/* <Button className="answerBtn">{props.answ3}</Button>
                            <Button className="answerBtn">{props.answ4}</Button> */}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div >

        )
    }
}

export default Display;