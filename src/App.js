import { useState } from "react";
import "./App.scss";
import CardList from "./components/cardlist/cardlist.component";
import SearchBox from "./components/searchbox/searchbox.component";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList />
    </div>
  );
};

export default App;
