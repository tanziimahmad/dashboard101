import React from "react";
import Card from "./Card";
import data from "./data.js";

const App = () => {
  return (
    <div>
      <Card />
      <h1>My App</h1>
      {data?.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default App;
