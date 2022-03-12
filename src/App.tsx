import {Component} from 'react';
import './App.css';
import {Monster} from "./models/monster";

interface MainProps {

}

interface MainState {
  monsters: Monster[]
}

class App extends Component<MainProps, MainState> {

  constructor(prop: MainProps) {
    super(prop);
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {monsters: users}
      }, () => {
        console.log(this.state);
      }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })}
      </div>
    );
  }
}

export default App;
