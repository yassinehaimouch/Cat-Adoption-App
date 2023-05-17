import React from "react";
import Card from "../Card/Card";
import './Cards.css';

const Cards = ({ cats }) => {
  return (
    <div className="pets-cards-container">
      {cats.map((cat) => (
        <Card
          key={cat.id}
          name={cat.name}
          email={cat.email}
          phone={cat.phone}
          image={{ url: cat.image.url, alt: cat.image.url }}
          favoured={cat.favoured}
        />
      ))}
    </div>
  );
};

export default Cards;
