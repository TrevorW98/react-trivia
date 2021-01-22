import './App.css';
import FetchJSON from './components/Services/data2';
import BtnComp from './components/Button/btnComp'
import { Container, Row, Col } from 'react-bootstrap';
function App() {
  return (
    <html>
      <head>
      </head>
      <body>
        <Container >
          <Row>
            <Col>
              <BtnComp onClick={HandleClick} message={"Push this"} />
            </Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
async function HandleClick() {
  //JSON format allows for the grabbing of the value of the fetch, or whatever inner info you need
  let jsonFormat = await FetchJSON("https://spreadsheets.google.com/feeds/list/1MKPxRE7xn7l2zj3N3vX2jSi0ZH2aOVwr_hj5-bPrekA/1/public/full?alt=json");
  console.log(jsonFormat.feed.entry[1].gsx$answer1.$t);
}
export default App;
