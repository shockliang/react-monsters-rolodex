import {Component} from "react";
import {Monster} from "../../models/monster";
import './card-list.styles.css';
import Card from "../card/card.component";

interface CardListProps {
  monsters: Monster[];
}

class CardList extends Component<CardListProps, any> {
  render() {
    const {monsters} = this.props;
    return (
      <div className={'card-list'}>
        {monsters.map(monster => (
          <Card monster={monster} />
        ))}
      </div>
    )
  }
}

export default CardList;
