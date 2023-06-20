import React from "react";
import Card from "./Card";
import data from "./data.js";
import Calendar from "./Calendar";
import "./card.css";

const App = () => {
  return (
    <div>
      <div className="card-container">
        {data.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
      <Calendar />
    </div>
  );
};

export default App;
