import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";

export default function Series() {
  const listSeries = useFetch(
    `${import.meta.env.VITE_APP_URL_BASE}/series?ts=1&apikey=${
      import.meta.env.VITE_APP_API_KEY_MARVEL
    }&hash=${import.meta.env.VITE_APP_HASH_ID}&orderBy=startYear&limit=20`
  );
  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image"></div>
        <Grid>
          <Grid.Column>
            <Container bg="Light">
              <Header as="h2">Las últimas series de Marvel</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
