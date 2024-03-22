// la carde che si generà automaticamente sotto la serach bar e darà una panoramica del tempo di tutti i giorni

import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

// import { sun } from "../img/sun.png";

function CardInfoMeteo(props) {
  function fetchMeteo() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.searchQuery}&appid=6704139eec1936a1a792ca1e00257325`
    )
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(obj => {
        const city = obj;
        console.log(city);
      })
      .catch(error => {
        console.log("Errore", error);
      });
  }

  useEffect(() => {
    fetchMeteo();
  }, [props.searchQuery]);

  // weatherIcon={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`}
  return (
    <Container className="color py-2 my-2">
      <Row>
        <Col className="col-8 d-flex align-items-center">
          <div className="rounded-circle img-container ">
            <img
              src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-10.png"
              alt="sun"
              className="w-100 h-100 object-fit-cover p-1 m-0"
            />
          </div>
          <div>
            <h5 className="fw-bold small">Oggi</h5>
            <p className="small">Pioggia</p>
          </div>
        </Col>
        <Col className="col-4">
          <p>--%</p>
          <p>--°</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CardInfoMeteo;
