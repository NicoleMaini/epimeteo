import { Col, Container, Nav, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AsideBarMEteo from "./componets/AsideBarMeteo";
import CardInfoMeteo from "./componets/CardInfoMeteo";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={3} className="my-5">
            <Form inline className="mb-5">
              <Form.Control
                type="text"
                placeholder="Cerca località"
                className=" mr-sm-2 rounded-5 search-bar border-0 py-2"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
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
