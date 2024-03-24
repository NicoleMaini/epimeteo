// componenete aside-bar

import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardSmallMeteo from "./CardSmallMeteo";

function AsideBarMEteo(props) {
  const [days, setDays] = useState("");

  function fetchMeteo() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.searchQuery}&appid=6704139eec1936a1a792ca1e00257325&units=metric`
    )
      .then(resp => {
        if (resp.ok) {
          return resp.json();
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
      fetchMeteo();
    }
  }, [props.searchQuery]);

  return (
    <>
      {days === "" && <Spinner />}
      {days !== "" && (
        <Container>
          <h3>{days.city.name}</h3>
          {days.list.map(day => {
            // ho confrontato all'indice 12 la stringa che rappresentava la data con l'ora in modo che a mezzanotte del giorno attuale
            // l'array cambia e in automatico parte il giorno successivo
            if (day.dt_txt.charAt(12) === "0") {
              return (
                <CardSmallMeteo
                  date={new Date(day.dt_txt).toLocaleDateString("it-IT", { weekday: "long" })}
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
