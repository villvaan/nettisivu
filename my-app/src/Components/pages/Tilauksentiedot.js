import { OrderContext } from "../OrderContext";
import { useContext } from "react";
import { Col, Row, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Tilauksentiedot() {
  const { price, setPrice } = useContext(OrderContext);
  const { itemName, setItemName } = useContext(OrderContext);
  const { quant, setQuant } = useContext(OrderContext);

  return (
    <>
      <div className="container-order">
        <Row className="row mt-5">
          <Col xsm={4} md={4}>
            <input type="radio" name="grp" />
            <label>&emsp;Käteinen</label>
          </Col>

          <Col xsm={4} md={4}>
            <input type="radio" name="grp" />
            <label>&emsp;Verkkopankki</label>
          </Col>

          <Col xsm={4} md={4}>
            <input type="radio" name="grp" />
            <label>&emsp;Kortti</label>
          </Col>
        </Row>
        <Row className="row mt-5">
          <Col>
            <p>Kellonaika</p>
          </Col>
          <Col>
            <select>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
            </select>
          </Col>
        </Row>
      </div>

      <div className="container-order">
        {" "}
        <Row className="row mt-5">
          <b>Tilauksesi</b>
        </Row>
        <br></br>
        {getData(quant, itemName)}
      </div>
      <div className="container-order ">
        <Row className="row mt-5">
          <Col>
            <Link to="/tilaa">
              <button className="btn btn-primary">Palaa</button>
            </Link>
          </Col>
          <Col>
            <Link to="/">
              <button
                onClick={() => {
                  alert("Tilauksesi onnistui! Palaa etusivulle painamalla OK.");
                }}
                className="btn btn-primary"
              >
                Vahvista tilaus
              </button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
  function getData(quant, itemName) {
    var dataItems = [];
    var dataNames = [];
    itemName.forEach((element) => {
      dataItems.push(element);
    });
    quant.forEach((element) => {
      dataNames.push(element);
    });

    let rows = [];
    for (let i = 0; i < dataItems.length; i++) {
      rows.push(
        <Row>
          <Col>
            <p>{itemName[i]}</p>
          </Col>
          <Col>
            <p>{quant[i]}kpl</p>
          </Col>
        </Row>
      );
    }
    rows.push(
      <Row>
        <Col>
          <b>Yhteensä</b>
        </Col>
        <Col>
          <b>{price}€</b>
        </Col>
      </Row>
    );
    return rows;
  }
}
export default Tilauksentiedot;
