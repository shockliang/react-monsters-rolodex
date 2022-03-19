import {Monster} from "../../models/monster";
import './card-list.styles.css';
import Card from "../card/card.component";

interface CardListProps {
  monsters: Monster[];
}

const CardList = ({monsters}: CardListProps) => (
  <div className={'card-list'}>
    {monsters.map(monster => (
      <Card monster={monster} key={monster.id}/>
    ))}
  </div>
)

export default CardList;
