import React from "react";
import { Card } from "../Card/card.component.jsx";
import "./card-list.style.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
