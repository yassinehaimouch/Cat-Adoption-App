import React from "react";
import Card from "../Card/Card";
import './Cards.css';

const Cards = ({ cats , setCats}) => {
  const updatedFavourite = (index, favoured) => {
    const updatedCats = [...cats];
    updatedCats[index].favoured = favoured;
    setCats(updatedCats)
  }

  return (
    <div className="pets-cards-container">
      {cats.map((cat, index) => (
        <Card
          key={cat.id}
          name={cat.name}
          email={cat.email}
          phone={cat.phone}
          image={{ url: cat.image.url, alt: cat.image.url }}
          favoured={cat.favoured}
          updatedFavourite={updatedFavourite}
          index={index}
        />
      ))}
    </div>
  );
};

export default Cards;
