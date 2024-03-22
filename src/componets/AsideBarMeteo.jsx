// componenete aside-bar

import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardSmallMeteo from "./CardSmallMeteo";

function AsideBarMEteo(props) {
  const [days, setDays] = useState(null);

  function fetchMeteo() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.searchQuery}&appid=6704139eec1936a1a792ca1e00257325`
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
    fetchMeteo();
  }, [props.searchQuery]);

  return (
    <Container>
      <h3>{days.city.name}</h3>
      <CardSmallMeteo />
    </Container>
  );
}

export default AsideBarMEteo;
