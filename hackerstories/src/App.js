import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import List from "./components/List";
import { useState } from "react/cjs/react.development";
import Cars from "./components/Cars";
const items = [
  {
    title: "react",
    url: "http://google.com",
    author: "guribail john",
    no_comments: 4,
    points: 4,
    objects: 0,
    createdAt: new Date(Date.UTC(2021, 1, 2, 3, 4, 5)),
  },
  {
    title: "Redux",
    url: "http://youtube.com",
    author: "kudepet john",
    no_comments: 3,
    points: 7,
    objects: 1,
    createdAt: new Date(Date.UTC(2021, 1, 2, 3, 4, 5)),
  },
];

const car = 
  {
    engine: "hfhfhfh",
    gearBox: "5",
    type: "maruthi",
    spareWheel: "222",
    seatingCapacity: "666",
    bhp: "111",
    torque: "sdfghj"
  }
  console.log(items[0].createdAt);
  console.log(items[1].createdAt);
  if (items[0].createdAt != items[1].createdAt) {
    console.log("bvc");
  }

function App() {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  

  const FilteredStories = items.filter((story) =>
    story.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="">
      <h1>My stories</h1>
      <hr />
      <Search onChange={searchHandler} />
      <h4>searching for : {search}</h4>
      <List stories={FilteredStories} />
      <h1>about cars</h1>
      <Cars {...car} />
    </div>
  );
}

export default App;
