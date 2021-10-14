
import './App.css';
import { Container, Row, Col } from "reactstrap";
import { InfoCard } from './components/InfoCard';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <div className="m-4 p-4 d-flex justify-content-center bg-white">
              <InfoCard />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
