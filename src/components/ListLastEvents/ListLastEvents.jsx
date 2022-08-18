import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvents.scss";

export default function ListLastEvents() {
  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>

      <Container>
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
