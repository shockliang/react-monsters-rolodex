import {ChangeEvent, useState, useEffect} from 'react';
import './App.css';
import {Monster} from "./models/monster";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState<string>('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonster] = useState<Monster[]>(monsters);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className={'app-title'}>Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={'search monsters'}
        className={'monster-search-box'}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;
