import { Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";

import img1 from "../../images/margarita.jpg";
import img2 from "../../images/pasta.jpg";

function Ruokalista() {
  return (
    <>
      <div className="container-menu">
        <p className="text-open">
          <p></p>
          <b style={{ fontSize: 20 }}>Pizzat</b>
          <p></p>
          <Row className="row mt-5 row align-items-center">
            <Col>
              <p>
                <b>Margherita</b> (Tomaattikastike, juusto, basilika)
              </p>
            </Col>
            <Col>
              <p>11€</p>
            </Col>

            <Col>
              <Image src={img1} style={{ width: 150 }} roundedCircle></Image>
            </Col>
          </Row>
          <Row className="row mt-5 row align-items-center">
            <Col>
              <p>
                <b>Pepperoni</b> (Tomaattikastike, juusto, pepperoni)
              </p>
            </Col>
            <Col>
              <p>12€</p>
            </Col>
            <Col>
              <Image src={img1} style={{ width: 150 }} roundedCircle></Image>
            </Col>
          </Row>
          <Row className="row mt-5 row align-items-center">
            <Col>
              <p>
                <b>Classic Ham</b> (Tomaattikastike, juusto, kinkku)
              </p>
            </Col>
            <Col>
              <p>12€</p>
            </Col>
            <Col>
              <Image src={img1} style={{ width: 150 }} roundedCircle></Image>
            </Col>
          </Row>
          <p></p>
          <b style={{ fontSize: 20 }}>Pastat</b>
          <p></p>
          <Row className="row mt-5 row align-items-center">
            <Col>
              <p>
                <b>Pasta Bolognese</b> (Pastaa ja jauhelihaa
                tomaattikastikkeessa)
              </p>
            </Col>
            <Col>
              <p>11€</p>
            </Col>
            <Col>
              <Image src={img2} style={{ width: 150 }} roundedCircle></Image>
            </Col>
          </Row>
          <Row className="row mt-5 row align-items-center">
            <Col>
              <p>
                <b>Pasta Alfredo</b> (Pastaa kermaisessa kastikkeessa)
              </p>
            </Col>
            <Col>
              <p>11€</p>
            </Col>
            <Col>
              <Image src={img2} style={{ width: 150 }} roundedCircle></Image>
            </Col>
          </Row>
          <Row className="row mt-5 row align-items-center">
            <Col>
              <p>
                <b>Pasta Carbonara</b> (Pastaa ja italialaista suolalihaa
                kastikkeessa)
              </p>
            </Col>
            <Col>
              <p>13€</p>
            </Col>
            <Col>
              <Image src={img2} style={{ width: 150 }} roundedCircle></Image>
            </Col>
          </Row>
          <p></p>
          <b style={{ fontSize: 20 }}>Juomat</b>
          <p></p>
          <div className="container-drink">
            <Row className="row mt-5 row align-items-center">
              <Col className="col justify-content-center">
                <p>
                  <b>Coca-cola</b> 0.33l
                </p>
              </Col>
              <Col>
                <p>3€</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <b>Fanta</b> 0.33l
                </p>
              </Col>
              <Col>
                <p>3€</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <b>Vehnäolut</b> 0.5l
                </p>
              </Col>
              <Col>
                <p>7€</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <b>Punaviini</b> 12cl
                </p>
              </Col>
              <Col>
                <p>6€</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <b>Vesi</b> 0.5l
                </p>
              </Col>
              <Col>
                <p>2€</p>
              </Col>
            </Row>
          </div>
        </p>
      </div>
    </>
  );
}

export default Ruokalista;
