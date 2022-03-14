import {ChangeEvent, Component} from 'react';
import './App.css';
import {Monster} from "./models/monster";
import CardList from "./components/card-list/card-list.component";

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

  onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({searchField});
  };

  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className={"search-box"}
          type={"search"}
          placeholder={"search monsters"}
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
