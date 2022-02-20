import { Col, Row } from "react-bootstrap";

function Yhteystiedot() {
  return (
    <>
      <div className="container text-center mt-5">
        <p>Kuja 11, 80100 Joensuu</p>
        <p>0400123456</p>
        <p>sähköposti@gmail.com</p>
      </div>
      <div className="container-open">
        <p className="text-open">
          <p></p>
          <b>Aukioloajat</b>
          <p></p>
          <Row>
            <Col>
              <p>Maanantai</p>
            </Col>
            <Col>12-21</Col>
          </Row>
          <Row>
            <Col>
              <p>Tiistai</p>
            </Col>
            <Col>12-21</Col>
          </Row>
          <Row>
            <Col>
              <p>Keskiviikko</p>
            </Col>
            <Col>12-21</Col>
          </Row>
          <Row>
            <Col>
              <p>Torstai</p>
            </Col>
            <Col>12-21</Col>
          </Row>
          <Row>
            <Col>
              <p>Perjantai</p>
            </Col>
            <Col>12-22</Col>
          </Row>
          <Row>
            <Col>
              <p>Lauantai</p>
            </Col>
            <Col>14-22</Col>
          </Row>
          <Row>
            <Col>
              <p>Sunnuntai</p>
            </Col>
            <Col>14-20</Col>
          </Row>
        </p>
      </div>
    </>
  );
}

export default Yhteystiedot;
