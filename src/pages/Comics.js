import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";

export default function Comics() {
  const [renderComics, setRenderComics] = useState(10);

  const listComics = useFetch(
    `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=4a0686d4bf24f7d586df891274df9803&hash=b79d2cea953d166052be117ef13d723a&orderBy=focDate&limit=${renderComics}`
  );
  console.log(listComics);

  return (
    <div className="comics-page">
      <div id="slide-comics-image" />
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2">Los mejores Cómics</Header>
            <ListComics
              listComics={listComics}
              renderComics={renderComics}
              setRenderComics={setRenderComics}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}
