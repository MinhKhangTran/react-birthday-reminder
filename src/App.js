import React from "react";
import List from "./List";
import data from "./data";

export default function App() {
  const [people, setPeople] = React.useState(data);
  console.log(people);

  return (
    <div className="bg-pink-400 h-screen grid place-items-center">
      <h1>{people.length} Birthdays today </h1>
      <List people={people} />
      <button onClick={() => setPeople([])}>Remove all</button>
    </div>
  );
}
