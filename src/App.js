import { React } from 'react';
import FetchGoogle from './components/Services/dataService';
import BtnComp from './components/Button/btnComp';
import { Col, Container, Row } from 'react-bootstrap';
const url_pt1 = "https://spreadsheets.google.com/feeds/list/";
const apiKey = "1Mc3CxMCREE6A8O6NxJl-THcyYN-_cEkbZ5Pk2Vw6SYU/";
let easyMedHard = "1";
const url_pt2 = "/public/full?alt=json";
let questionData;
let url = (url_pt1 + apiKey + easyMedHard + url_pt2);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      triviaQ: "",
      asw1: "",
      asw2: "",
      asw3: "",
      asw4: "",
      aswC: "",
      diff: 0
    }
    
  }
HandleClickDifficulty = () => {
  
}
onLoad = async () => {
  questionData = await FetchGoogle(url);
  console.log(questionData);
}
componentDidMount = () => {
  this.onLoad();
}

render() {
  return (
      <Container>
        <Row>
          <Col>
          <BtnComp message={1} />
          <BtnComp message={2} />
          <BtnComp message={3} />
          </Col>
        </Row>
      </Container>
  )
}
}

export default App;
