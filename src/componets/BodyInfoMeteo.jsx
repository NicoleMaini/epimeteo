// la carde che si generà automaticamente sotto la serach bar e darà una panoramica del tempo di tutti i giorni

import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardInfoMeteo from "./CardInfoMeteo";

function BodyInfoMeteo(props) {
  const [city, setCity] = useState("");
  function fetchMeteo() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.searchQuery}&appid=6704139eec1936a1a792ca1e00257325&units=metric`
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
  //   slice(0, 11).

  return (
    <>
      {city === "" && <Spinner />}
      {city !== "" && (
        <Container>
          <h3>{city.city.name}</h3>
          <Row>
            {city.list.map(hour => {
              // ho confrontato all'indice 12 la stringa che rappresentava la data con l'ora in modo che a mezzanotte del giorno attuale
              // l'array cambia e in automatico parte il giorno successivo
              const today = new Date().getDate();
              const day = parseInt(hour.dt_txt.substr(8, 2));
              // console.log(today);
              // console.log(day);
              // console.log(hour.dt_txt.substr(11, 5));

              if (day === today + 1) {
                return (
                  <Col md={4} lg={3} key={hour.dt}>
                    <CardInfoMeteo
                      hour={hour.dt_txt.substr(11, 5)}
                      weather={hour.weather[0].main}
                      icon={hour.weather[0].icon}
                      description={hour.weather[0].description}
                      humidity={hour.main.humidity}
                      temp={hour.main.temp}
                    />
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      )}
    </>
  );
}

export default BodyInfoMeteo;
