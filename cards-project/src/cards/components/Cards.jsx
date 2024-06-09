import React from "react";
import CardComponent from "./card/CardComponent";
import { Container, Typography } from "@mui/material";

export default function Cards({ cards, handleCardDelete, handleCardLike }) {

  return cards.length === 0 ? (
    <Typography>
      Oops… it seems there are no business cards to display
    </Typography>
  ) : (
    <Container sx={{display: "flex", flexWrap: "wrap", }}>
      {cards.map((card) => (
        <CardComponent
          key={card._id}
          card={card}
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}
        />
      ))}
    </Container>
  );
}