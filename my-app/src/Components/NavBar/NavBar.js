import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import background from "../../images/bgPizza.jpg";
import "./tyylit.css";

function NavBar() {
  return (
    <div
      className="navbar-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Row>
        <Col xs={6}>
          <Button href="/etusivu" type="submit">
            Koti
          </Button>
        </Col>
      </Row>
      <Row className="text-center row mt-5">
        <Col className="col-mt-2"></Col>
        <Col className="col-mt-8">
          <Link to="/" className="my-text-head">
            <h1 className="text-white my-text-head">Giovanni's Ristorante</h1>
          </Link>
        </Col>
        <Col className="col-mt-2"></Col>
      </Row>

      <Row className="text-center row mt-5">
        <Col xs={3} className="navbutton col-mt-5">
          <Link className="my-text" to="/ruokalista">
            <h4 className="text-white my-text">Ruokalista</h4>
          </Link>
        </Col>
        <Col xs={3} className="navbutton">
          <Link className="my-text" to="/tilaa">
            <h4 className="text-white my-text">Tilaa</h4>
          </Link>
        </Col>
        <Col xs={3} className="navbutton">
          <Link className="my-text" to="/yhteystiedot">
            <h4 className="text-white my-text">Yhteystiedot</h4>
          </Link>
        </Col>

        <Col xs={3} className="navbutton">
          <Link className="my-text" to="/tietoa">
            <h4 className="text-white my-text">Tietoa meistä</h4>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default NavBar;

/*


<div class="row mt-5 justify-content-center">
        <div class="col ">
          <Button href="/ruokalista" type="submit">
            Ruokalista
          </Button>
        </div>
        <div class="col">
          <Button href="/tilaa" type="submit">
            Tilaa
          </Button>
        </div>
        <div class="col">
          <Button href="/yhteystiedot" type="submit">
            Yhteystiedot
          </Button>
        </div>
        <div class="col">
          <Button href="/tietoa" type="submit">
            Tietoa meistä
          </Button>
        </div>
      </div>
    </div>

<div class="row">
        <div class="col {1}">
          <Button href="/etusivu" type="submit">
            Koti
          </Button>
        </div>
        <div class="col {1}">
          <Button href="/etusivu" type="submit">
            Giovanni's Ristorante
          </Button>
        </div>
      </div>


<Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/ruokalista">Ruokalista</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/etusivu">Etusivu</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tietoa">Tietoa meistä</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tilaa">Tilaa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/yhteystiedot">Yhteystiedot</Nav.Link>
        </Nav.Item>
      </Nav>
*/

/*
<div>
      <nav>
        <p>
          <Link to="/etusivu">Etusivu</Link>
        </p>
        <p>
          <Link to="/ruokalista">Ruokalista</Link>
        </p>
        <p>
          <Link to="/tilaa">Tilaa</Link>
        </p>
        <p>
          <Link to="/yhteystiedot">Yhteystiedot</Link>
        </p>
        <p>
          <Link to="/tietoa">Tietoa meistä</Link>
        </p>
      </nav>
    </div>
*/
