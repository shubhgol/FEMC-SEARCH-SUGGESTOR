import { useState } from "react";
import "./styles.css";

const listOfFruits = ["Banana", "Apple", "Gauvava", "Orange", "Watermelon"];
export default function App() {
  const [fruits, setfruits] = useState(listOfFruits);

  const handleSearch = (e) => {
    const searchText = e.target.value.trim().toLowerCase();
    console.log(">>>>>sssssss", searchText);
    if (!searchText) {
      setfruits(listOfFruits);
    } else {
      const newList = listOfFruits.filter((fruit) => {
        return fruit.toLowerCase().indexOf(searchText) > -1;
      });
      setfruits(newList);
    }
  };
  return (
    <div className="searchSuggestor">
      <input type="search" onChange={handleSearch} />
      <div className="searchResult">
        <ul>
          {fruits.map((fruit, index) => {
            return <li key={index}>{fruit}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
