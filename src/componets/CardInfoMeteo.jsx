// la carde che si generà automaticamente sotto la serach bar e darà una panoramica del tempo di tutti i giorni

import { Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

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
      {city === "" && <Spinner className="my-3" />}
      {city !== "" && (
        <Container className="py-2 my-2">
          <Row className="w-50 mx-auto color p-3 justify-content-center text-center">
            <h5 className="fw-bold ">Today in: {city.name}</h5>
            <p>{city.weather[0].main}</p>
            <div className="rounded-circle img-cont text-center my-3">
              <img
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
                alt="sun"
                className="w-100 h-100 object-fit-cover p-1 m-0"
              />
            </div>
            <p>{city.weather[0].description}</p>
            <p className="small">Humidity: {city.main.humidity}%</p>
            <p className="small">Temp: {city.main.temp}°</p>
          </Row>
        </Container>
      )}
    </>
  );
}

export default CardInfoMeteo;
