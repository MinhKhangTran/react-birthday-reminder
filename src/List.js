import React from "react";
import Listitem from "./Listitem";

export default function List({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, age, name, image } = person;
        return <Listitem key={id} {...person}></Listitem>;
      })}
    </>
  );
}
