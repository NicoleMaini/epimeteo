// componenete aside-bar

import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardSmallMeteo from "./CardSmallMeteo";

function AsideBarMEteo(props) {
  const [days, setDays] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.searchQuery}&appid=6704139eec1936a1a792ca1e00257325&units=metric`;
  const urlFail = `https://api.openweathermap.org/data/2.5/forecast?q=bologna&appid=6704139eec1936a1a792ca1e00257325&units=metric`;

  function fetchMeteo(url) {
    fetch(url)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          alert("Ops, la città é inesistente");
          return fetchMeteo(urlFail);
        }
      })
      .then(obj => {
        const days = obj;
        console.log("days", days);
        setDays(days);
      })
      .catch(error => {
        console.log("Errore", error);
      });
  }

  useEffect(() => {
    if (props.searchQuery !== "") {
      fetchMeteo(url);
    }
  }, [props.searchQuery]);

  console.log(days === undefined);

  return (
    <>
      {days === "" && <Spinner />}
      {days !== "" && days !== undefined && (
        <Container>
          <h3>{days.city.name}</h3>
          {days.list.map(day => {
            // ho confrontato all'indice 12 la stringa che rappresentava la data con l'ora in modo che a mezzanotte del giorno attuale
            // l'array cambia e in automatico parte il giorno successivo
            if (day.dt_txt.charAt(12) === "0") {
              return (
                <CardSmallMeteo
                  date={new Date(day.dt_txt).toLocaleDateString("en-EN", { weekday: "long" })}
                  key={day.dt}
                  day={day.weather[0].main}
                  icon={day.weather[0].icon}
                  description={day.weather[0].description}
                  percentage={day.main.humidity}
                  temp={day.main.temp}
                />
              );
            }
          })}
        </Container>
      )}
    </>
  );
}

export default AsideBarMEteo;
