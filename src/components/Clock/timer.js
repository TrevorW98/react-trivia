import React from 'react';
import '../Questions/questions.css'
import { restartTimer } from '../Questions/questions'
import { Container, Row, Col } from 'react-bootstrap'
import './clock.css'
let end = false;
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 20,
            restart: false

        }
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({ restart: restartTimer() })
            if (this.state.restart === true) {
                this.setState({ seconds: 21 })
            }
            if (this.state.seconds > 0) {
                end = false
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            } else if (this.state.seconds === 0) {
                end = true
                this.setState({ seconds: 20 })
            }
        }, 1000)
    }
    componentWillUnmount = () => {
        clearInterval(this.myInterval);
    }

    render() {
        return (
            <Container>
                <Row className="mt-5 center">
                    <Col lg={6} className="center timerBG">
                        <div className="timeText">
                            <p>You have {this.state.seconds} seconds left </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
function getEnd() {
    return end;
}

export { Timer, getEnd }