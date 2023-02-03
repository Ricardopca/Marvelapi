import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvents.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";
// 3517d4a519b7ba3a3bcc5bcf70ee3e0b
// key publica f6e1eaf6ac0d14a33ac7e021a3ba7254
// key privada 2b10794017f0c57fd634c00647aaecef14d467aa
//http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
//http://gateway.marvel.com/v1/public/caracthers?ts=1&apikey=f6e1eaf6ac0d14a33ac7e021a3ba7254&hash=3517d4a519b7ba3a3bcc5bcf70ee3e0b
//`${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`

export default function ListLastEvents() {
  const lastEventsFetch = useFetch(`http://gateway.marvel.com/v1/public/events?ts=1&apikey=4a0686d4bf24f7d586df891274df9803&hash=b79d2cea953d166052be117ef13d723a&orderBy=startDate&limit=5`);
  console.log(lastEventsFetch);

  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>

      <Container>
        <Card.Group itemsPerRow={5}>
          <LastEvents lastEventsFetch={lastEventsFetch} />
        </Card.Group>
      </Container>
    </div>
  );
}
