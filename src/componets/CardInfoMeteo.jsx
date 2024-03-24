// la carde che si generà automaticamente sotto la serach bar e darà una panoramica del tempo di tutti i giorni

import { Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

// import { sun } from "../img/sun.png";

function CardInfoMeteo(props) {
  const [city, setCity] = useState("");
  function fetchMeteo() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.searchQuery}&appid=6704139eec1936a1a792ca1e00257325&units=metric`
    )
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(city => {
        console.log(city);
        setCity(city);
      })
      .catch(error => {
        console.log("Errore", error);
      });
  }

  useEffect(() => {
    if (props.searchQuery !== "") {
      fetchMeteo();
    }
  }, [props.searchQuery]);

  return (
    <>
      {city === "" && <Spinner />}
      {city !== "" && (
        <Container className="py-2 my-2">
          <Row className="w-50 mx-auto color p-3 justify-content-center text-center">
            <h5 className="fw-bold ">Today</h5>
            <p className="small">{city.weather[0].main}</p>
            <div className="rounded-circle img-cont text-center my-3">
              <img
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
                alt="sun"
                className="w-100 h-100 object-fit-cover p-1 m-0"
              />
            </div>
            <p className="small">{city.weather[0].description}</p>
            <p>Humidity: {city.main.humidity}%</p>
            <p>Temp: {city.main.temp}°</p>
          </Row>
        </Container>
      )}
    </>
  );
}

export default CardInfoMeteo;
