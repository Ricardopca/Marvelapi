import BestCharacters from "../components/BestCharacters/BestCharacters";
import Insider from "../components/Insider/Insider";
import ListLastEvents from "../components/ListLastEvents/ListLastEvents";

export default function Home() {
  return (
    <div>
      <BestCharacters />
      <ListLastEvents />
      <Insider />
    </div>
  );
}
