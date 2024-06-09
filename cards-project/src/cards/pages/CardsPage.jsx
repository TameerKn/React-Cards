import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../../users/providers/UserProvider";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { Typography, Link, Paper, Box} from "@mui/material";


export default function CardsPage() {
  const {
    filterCards,
    error,
    isLoading,
    getAllCards,
    handleCardLike,
    handleCardDelete,
  } = useCards();

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  const { user } = useUser();


  if (!user) return  (
    <>
      <PageHeader
        title="Welcome to BCard!"
        subtitle="Where showcasing your business cards is a breeze. Enjoy easy-to-use features and sleek design to promote your brand effortlessly!"
        typograph= {<Typography >Please login to access all app features, <Link fontWeight= "bold" href = "/signup">Not Registered?</Link></Typography>}
        typograph2="Browse a Collection of Business Cards Across All Categories:"

      />
      <CardsFeedback
        cards={filterCards}
        isLoading={isLoading}
        error={error}
      />
    </>   
  );
  
  return (
    <>
      <PageHeader
        title="Welcome to BCard!"
        subtitle="Where showcasing your business cards is a breeze. Enjoy easy-to-use features and sleek design to promote your brand effortlessly!"
        typograph2="Browse a Collection of Business Cards Across All Categories:"
      />
        <CardsFeedback
          cards={filterCards}
          handleDelete={handleCardDelete}
          handleLike={handleCardLike}
          isLoading={isLoading}
          error={error}
        />
    </>
  );
}