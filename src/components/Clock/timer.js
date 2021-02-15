import React from 'react';
import '../Questions/questions.css'
let end = false;

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 20
            
        }
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.seconds > 0) {
                end = false
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
               console.log(end)
            } else if (this.state.seconds === 0) {
                console.log(end)
                end = true
               this.secondInterval = setInterval(() => {
                    this.setState({seconds: 20})
                    end = false
               }, 500)
            }
           
        }, 1000)
    }
   
    render() {
        return (
            <div className="timerStyle">
                <p>You have {this.state.seconds} seconds left </p>
            </div>
        )
    }
}
function getEnd() {
    return end;
}

export {Timer, getEnd }