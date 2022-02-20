import { Col, Form, Row, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import React from "react";
import { OrderContext } from "../OrderContext";

function Tilaa() {
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);
  const [item4, setItem4] = useState(0);
  const [item5, setItem5] = useState(0);
  const [item6, setItem6] = useState(0);
  const [item7, setItem7] = useState(0);
  const [item8, setItem8] = useState(0);
  const [item9, setItem9] = useState(0);
  const [item10, setItem10] = useState(0);
  const [item11, setItem11] = useState(0);
  const [orderType, setOrderType] = useState(null);
  const prices = [11, 12, 12, 11, 11, 13, 3, 3, 7, 6, 2];
  const { price, setPrice } = useContext(OrderContext);
  const { itemName, setItemName } = useContext(OrderContext);
  const { quant, setQuant } = useContext(OrderContext);
  const items = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
  ];
  const names = [
    "Margherita",
    "Peppenoni",
    "Classic Ham",
    "Pasta Bolognese",
    "Pasta Alfredo",
    "Pasta Carbonara",
    "Coca-cola",
    "Fanta",
    "Vehnäolut",
    "Punaviini",
    "Vesi",
  ];
  //const [price, setPrice] = useState(0);

  return (
    <>
      <div>
        <Row className="row mt-5">
          <Col xs={8} className="mx-auto">
            <p style={{ fontSize: 20 }}>
              Voit tilata ruoat kätevästi kotiovellesi tai noutaa tilauksesi
              ravintolastamme. Vaihtoehtona myös tilaaminen etukäteen ja nauttia
              paikanpäällä herkullisesta ruoasta.
            </p>
          </Col>
        </Row>
        <div className="container-order">
          <Row className="row mt-5">
            <Col xsm={4} md={4}>
              <input
                type="radio"
                name="grp"
                onClick={() => {
                  setOrderType("Kotiinkuljetus");
                }}
              />
              <label>&emsp;Kotiinkuljetus</label>
            </Col>

            <Col xsm={4} md={4}>
              <input
                type="radio"
                name="grp"
                onClick={() => {
                  setOrderType("Nouto");
                }}
              />
              <label>&emsp;Nouto</label>
            </Col>

            <Col xsm={4} md={4}>
              <input
                type="radio"
                name="grp"
                id="1"
                onClick={() => {
                  setOrderType("Paikanpäällä");
                }}
              />
              <label>&emsp;Paikanpäällä</label>
            </Col>
          </Row>
        </div>
        <div className="container-order-items">
          <Row className="row mt-5 text-center">
            <b>Ruoka annokset</b>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p id="it1">Margherita</p>
            </Col>
            <Col>
              <p>11€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem1(item1 - 1);
                      setPrice(price - prices[0]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item1">{item1}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem1(item1 + 1);
                      setPrice(price + prices[0]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p>Pepperoni</p>
            </Col>
            <Col>
              <p>12€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem2(item2 - 1);
                      setPrice(price - prices[1]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item2">{item2}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem2(item2 + 1);
                      setPrice(price + prices[1]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p>Classic Ham</p>
            </Col>
            <Col>
              <p>12€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem3(item3 - 1);
                      setPrice(price - prices[2]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item3">{item3}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem3(item3 + 1);
                      setPrice(price + prices[2]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p>Pasta Bolognese</p>
            </Col>
            <Col>
              <p>11€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem4(item4 - 1);
                      setPrice(price - prices[3]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item4">{item4}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem4(item4 + 1);
                      setPrice(price + prices[3]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p>Pasta Alfredo</p>
            </Col>
            <Col>
              <p>11€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem5(item5 - 1);
                      setPrice(price - prices[4]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item5">{item5}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem5(item5 + 1);
                      setPrice(price + prices[4]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p>Pasta Carbonara</p>
            </Col>
            <Col>
              <p>13€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem6(item6 - 1);
                      setPrice(price - prices[5]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item6">{item6}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem6(item6 + 1);
                      setPrice(price + prices[5]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row mt-5 text-center">
            <b>Juomat</b>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p>Coca-cola</p>
            </Col>
            <Col>
              <p>3€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem7(item7 - 1);
                      setPrice(price - prices[6]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item7">{item7}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem7(item7 + 1);
                      setPrice(price + prices[6]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p>Fanta</p>
            </Col>
            <Col>
              <p>3€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem8(item8 - 1);
                      setPrice(price - prices[7]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item8">{item8}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem8(item8 + 1);
                      setPrice(price + prices[7]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p>Vehnäolut</p>
            </Col>
            <Col>
              <p>7€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem9(item9 - 1);
                      setPrice(price - prices[8]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item9">{item9}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem9(item9 + 1);
                      setPrice(price + prices[8]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p>Punaviini</p>
            </Col>
            <Col>
              <p>6€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem10(item10 - 1);
                      setPrice(price - prices[9]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item10">{item10}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem10(item10 + 1);
                      setPrice(price + prices[9]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row mt-5">
            <Col>
              <p>Vesi</p>
            </Col>
            <Col>
              <p>2€</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      setItem11(item11 - 1);
                      setPrice(price - prices[10]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p id="item11">{item11}</p>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      setItem11(item11 + 1);
                      setPrice(price + prices[10]);
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <b>+</b>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="text-center">
            <Link to="/tilauksentiedot">
              <button
                onClick={() => {
                  getItems();
                }}
                className="btn btn-primary tilaa-button "
                id="tilaa_button"
              >
                Jatka {price}€
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  function getItems() {
    var arr1 = [];
    var arr2 = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i] > 0) {
        arr1.push(items[i]);
        arr2.push(names[i]);
      }
    }
    setQuant(arr1);
    setItemName(arr2);
  }
}

export default Tilaa;

/**
 *  <Row className="row mt-5">
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
 */
