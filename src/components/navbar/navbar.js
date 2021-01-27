
import { Navbar, Nav, Button } from 'react-bootstrap';
import React from "react";
import Display from '../Display/display';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FetchGoogle from '../../components/Services/dataService';
const url_pt1 = "https://spreadsheets.google.com/feeds/list/";
const apiKey = "1MKPxRE7xn7l2zj3N3vX2jSi0ZH2aOVwr_hj5-bPrekA/";
const url_pt2 = "/public/full?alt=json";
let starterArray = [];
let finalArray = [];

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      triviaQ: "",
      asw1: "",
      asw2: "",
      asw3: "",
      asw4: "",
      aswC: "",
      diffSet: false,
      difficulty: "",
      arr: [],
      fullURL: ""
    }

  }

  onLoad = async (fullURL) => {
    starterArray = await FetchGoogle(fullURL);
    setTimeout(
      this.FillData(),
      1000
    )
  }

  FillData = () => {
    finalArray = [];
    for(let i = 0; i < starterArray.feed.entry.length; i++) {
      const questionArr = {
        q: starterArray.feed.entry[i].gsx$question.$t,
        a1: starterArray.feed.entry[i].gsx$answer1.$t,
        a2: starterArray.feed.entry[i].gsx$answer2.$t,
        a3: starterArray.feed.entry[i].gsx$answer3.$t,
        a4: starterArray.feed.entry[i].gsx$answer4.$t,
        cA: starterArray.feed.entry[i].gsx$correctanswer.$t
      }
      finalArray.push(questionArr);
    }
    setTimeout(() => {
      console.log(finalArray)
    }, 1000)
  }
  // componentDidMount = () => {
  //   this.onLoad();
  // }
  fillState = () => {
    this.setState({arr: finalArray})
  }
  GoogleParse = (props) => {
        console.log(props.target.innerText);
        switch (props.target.innerText) {
          case "Easy":
            this.onLoad(url_pt1 + apiKey + "1" + url_pt2)
            break;
          case "Medium":
            this.onLoad(url_pt1 + apiKey + "2" + url_pt2)
            break;
          case "Hard":
            this.onLoad(url_pt1 + apiKey + "3" + url_pt2)
            break;
        }
    
      }
  render() {
    return (
          <Router>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Trivia Game</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                 <Nav.Link as={Link} to='/game'><Button onClick={this.GoogleParse} > Easy</Button></Nav.Link>
                 <Nav.Link as={Link} to='/game'><Button onClick={this.GoogleParse} > Medium</Button></Nav.Link>
                 <Nav.Link as={Link} to='/game'><Button onClick={this.GoogleParse} > hard</Button></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <hr />
      
            <Switch>
              <Route path="/game">
              <Display className="white" array={this.state.arr}></Display>
              </Route>
              {/* <Route path="/medium">
                <Medium />
              </Route>
              <Route path="/hard">
                <Hard />
              </Route> */}
              {/* <audio src={} controls> </audio> */}
            </Switch>
          </Router>
        )
  }
}
export default NavBar;




