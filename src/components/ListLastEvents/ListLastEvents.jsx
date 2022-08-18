import { Card, Header } from "semantic-ui-react";
import useFetch from "../../hooks/useFetch";
import Container from "../Container";
import "./ListLastEvents.scss";

export default function ListLastEvents() {
  const lastEventsFectch = useFetch(`${import.meta.env.VITE_APP_URL_BASE}/events?ts=1&apikey=${import.meta.env.VITE_APP_API_KEY_MARVEL}&hash=${import.meta.env.VITE_APP_HASH_ID}&orderBy=startDate&limit=5`);

  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>

      <Container bg="Light">
        <Card.Group itemsPerRow={5}>
          <p>eventos...</p>
          <p>eventos...</p>
          <p>eventos...</p>
          <p>eventos...</p>
          <p>eventos...</p>
          <p>eventos...</p>
        </Card.Group>
      </Container>
    </div>
  );
}
