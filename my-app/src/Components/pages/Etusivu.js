import { Col, Row } from "react-bootstrap";

function Etusivu() {
  return (
    <>
      <div className="container-sm mt-5 mx-auto">
        <h2>Ravintolamme</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          semper mauris vel lectus commodo feugiat. Cras et justo ultricies,
          interdum purus eu, aliquet ante. Aenean egestas purus sit amet ipsum
          maximus lacinia. In venenatis justo at viverra laoreet. Donec quis est
          tempus, fermentum ante eu, hendrerit ex. Curabitur tempor purus eu
          felis efficitur, in vestibulum nisl pharetra. Phasellus eget metus ut
          eros placerat faucibus. Ut orci dui, volutpat id mattis at, bibendum a
          leo. Aliquam pulvinar at sapien eu sagittis. Praesent at efficitur
          odio, eget tincidunt eros. Donec tempus eu urna id pulvinar.
        </p>
        <p>
          In vehicula neque lectus, ac molestie diam aliquet id. Etiam iaculis
          libero ac justo condimentum ultrices. Donec sit amet urna euismod
          ipsum pellentesque dignissim vitae eu ligula. Pellentesque id tellus
          at eros accumsan convallis. Nulla sit amet pharetra leo. Pellentesque
          sit amet tempor purus, et dapibus erat. Cras maximus rutrum ultricies.
          Donec mauris erat, volutpat vitae felis et, consequat luctus tortor.
          Mauris ut dignissim elit, eu congue purus. Aenean convallis hendrerit
          ex, non finibus elit. Aenean rhoncus orci leo, sit amet feugiat magna
          convallis sit amet. Quisque tristique vestibulum dolor, nec
          ullamcorper tortor porta eget.
        </p>
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

export default Etusivu;
