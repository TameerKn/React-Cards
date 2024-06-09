import React from "react";
import { Card, CardActionArea } from "@mui/material";

import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function CardComponent({
  card,
  handleCardLike,
  handleCardDelete,
}) {
  const navigate = useNavigate();

  return (
    <Card elevation={3} sx={{ elevation: "", transition: "500ms", borderRadius: 2, width: 233, m: 2, ':hover': {boxShadow: "3px 0px 20px 3px rgb(99, 129, 212)", width: 270, }, }}>
      <CardActionArea
        onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}
      >
        <CardHeaderComponent image={card.image} />
        <CardBody
          title={card.title}
          subtitle={card.subtitle}
          phone={card.phone}
          address={card.address}
          cardNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar
        likes = {card.likes}
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
        cardId={card._id}
        userId={card.user_id}
      />
    </Card>
  );
}
