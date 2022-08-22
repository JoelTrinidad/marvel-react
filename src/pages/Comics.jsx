import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics/ListComics";
import useFetch from "../hooks/useFetch";

export default function Comics() {
  const [renderComics, setRenderComics] = useState(10);

  const listComics = useFetch(
    `${import.meta.env.VITE_APP_URL_BASE}/comics?ts=1&apikey=${
      import.meta.env.VITE_APP_API_KEY_MARVEL
    }&hash=${import.meta.env.VITE_APP_HASH_ID}&orderBy=focDate&limit=${renderComics}`
  );

  return (
    <div className="comics-page">
      <div id="slide-comics-image"></div>
      <Grid>
        <Grid.Column>
          <Container bg="Light">
            <Header as="h2">Los mejores Cómics</Header>
            <ListComics />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}
