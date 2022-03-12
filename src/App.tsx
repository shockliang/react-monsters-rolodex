import {Component} from 'react';
import './App.css';
import {Monster} from "./models/monster";

interface MainProps {

}

interface MainState {
  monsters: Monster[],
  searchField: string
}

class App extends Component<MainProps, MainState> {

  constructor(prop: MainProps) {
    super(prop);
    this.state = {
      monsters: [],
      searchField: ''
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

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className={"search-box"}
          type={"search"}
          placeholder={"search monsters"}
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState({searchField});
          }}
        />
        {filteredMonsters.map(monster => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })}
      </div>
    );
  }
}

export default App;
