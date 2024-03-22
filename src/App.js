import { Col, Container, Nav, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AsideBarMEteo from "./componets/AsideBarMeteo";
import CardInfoMeteo from "./componets/CardInfoMeteo";

function App() {
  const [searchQuery, setSearchQuery] = useState("Bologna");
  const [changeCity, setChangeCity] = useState("");

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={3} className="my-5">
            <Form inline className="mb-5 mx-2">
              <Row className="justify-content-around">
                <Col xs="auto px-0">
                  <Form.Control
                    type="text"
                    placeholder="Cerca località"
                    className=" mr-sm-2 rounded-5 search-bar border-0 py-2 "
                    value={changeCity}
                    onChange={e => setChangeCity(e.target.value)}
                    // onKeyDown={() => {
                    //   setSearchQuery(changeCity);
                    // }}
                  />
                </Col>
                <Col xs="auto px-0">
                  <button
                    className="btn px-0"
                    type="button"
                    onClick={() => {
                      setSearchQuery(changeCity);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </button>
                </Col>
              </Row>
            </Form>
            <AsideBarMEteo searchQuery={searchQuery} />
          </Col>
          <Col xs={12} md={9}>
            <h1 className="text-center mt-5">Le più ricercate</h1>
            <Container className="d-flex justify-content-evenly align-items-center my-5">
              <Nav>
                <Nav.Item className="h3">
                  <Nav.Link
                    className="py-0"
                    onClick={() => {
                      setSearchQuery("milan");
                    }}
                  >
                    Milan
                  </Nav.Link>
                </Nav.Item>
                <h3>|</h3>
                <Nav.Item className="h3">
                  <Nav.Link
                    className="py-0"
                    onClick={() => {
                      setSearchQuery("genoa");
                    }}
                  >
                    Genoa
                  </Nav.Link>
                </Nav.Item>
                <h3>|</h3>
                <Nav.Item className="h3">
                  <Nav.Link
                    className="py-0"
                    onClick={() => {
                      setSearchQuery("rome");
                    }}
                  >
                    Rome
                  </Nav.Link>
                </Nav.Item>
                <h3>|</h3>
                <Nav.Item className="h3">
                  <Nav.Link
                    className="py-0"
                    onClick={() => {
                      setSearchQuery("naples");
                    }}
                  >
                    Naples
                  </Nav.Link>
                </Nav.Item>
                <h3>|</h3>
                <Nav.Item className="h3">
                  <Nav.Link
                    className="py-0"
                    onClick={() => {
                      setSearchQuery("palermo");
                    }}
                  >
                    Palermo
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
            <CardInfoMeteo searchQuery={searchQuery} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
