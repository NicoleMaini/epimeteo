// componenete aside-bar

import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardSmallMeteo from "./CardSmallMeteo";

function AsideBarMEteo(props) {
  const [days, setDays] = useState(null);

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
      {days === null && <Spinner />}
      {days !== null && (
        <Container>
          <h3>{days.city.name}</h3>
          {days.list.slice(0, 7).map(day => {
            return (
              <CardSmallMeteo
                // data={new Date(day.dt * 1000).toLocaleDateString("it-IT", { weekday: "short" })}
                key={day.dt}
                day={day.weather[0].main}
                icon={day.weather[0].icon}
                description={day.weather[0].description}
                percentage={day.main.humidity}
                temp={day.main.temp}
              />
            );
          })}
        </Container>
      )}
    </>
  );
}

export default AsideBarMEteo;
