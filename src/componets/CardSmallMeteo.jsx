// la carde che si generà automaticamente sotto la serach bar e darà una panoramica del tempo di tutti i giorni

import { Col, Container, Row } from "react-bootstrap";
// import { sun } from "../img/sun.png";

function CardSmallMeteo(props) {
  //   console.log(props.icon);
  //   // nonostante abbia trovato un convertitore online per i gradi, secondo me 140° sono davvero troppo
  //   function temperatureConverter(valNum) {
  //     valNum = parseFloat(valNum);
  //     return ((valNum - 32) * 5) / 9;
  //   }
  //   // quindi in barba a ciò li ho divisi per 10
  //   const temperature = Math.floor(temperatureConverter(props.temp)) / 10;

  return (
    <Container className="color py-2 my-2">
      <Row>
        <Col className="col-8 d-flex align-items-center">
          <div className="rounded-circle img-container me-3">
            <img
              src={`http://openweathermap.org/img/wn/${props.icon}.png`}
              alt=""
              className="w-100 h-100 object-fit-cover "
            />
          </div>
          <div>
            <h5 className="fw-bold small">{props.day}</h5>
            <p className="small">{props.description}</p>
          </div>
        </Col>
        <Col className="col-4">
          <p>{props.percentage}%</p>
          {/* <p>{temperature}°</p> */}
          <p>{props.temp}°</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CardSmallMeteo;
