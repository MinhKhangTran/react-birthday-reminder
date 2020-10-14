import React from "react";

export default function ListItem({ id, age, name, image }) {
  return (
    <article className="flex w-2/3 justify-center bg-gray-200 p-2">
      <div className="w-16 h-16">
        <img
          className="h-full w-full object-cover rounded-full"
          src={image}
          alt={name}
        />
      </div>

      <div className="flex-grow">
        <h1>{name}</h1>
        <p>{age}</p>
      </div>
    </article>
  );
}
