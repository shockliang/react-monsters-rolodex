import {Component} from "react";
import {Monster} from "../../models/monster";
import './card.styles.css';

interface CardProps {
  monster: Monster
}

class Card extends Component<CardProps, any> {
  render() {
    const {id, name, email} = this.props.monster;
    return (
      <div className={'card-container'} key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card;
