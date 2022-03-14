import {Component} from "react";
import {Monster} from "../../models/monster";

interface CardListProps {
  monsters: Monster[];
}

class CardList extends Component<CardListProps, any> {
  render() {
    const {monsters} = this.props;
    return (
      <div>
        {monsters.map(monster => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })}
      </div>
    )
  }
}

export default CardList;
