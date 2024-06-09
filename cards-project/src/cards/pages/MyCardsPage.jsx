import React, { useEffect,} from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function MyCardsPage() {
  const {
    filterCards,
    error,
    isLoading,
    getAllMyCards,
    handleCardLike,
    handleCardDelete,
  } = useCards();

  useEffect(() => {
    getAllMyCards();
  }, [getAllMyCards]);

  const { user } = useUser();
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <div>
      <PageHeader
        title="My Cards"
        subtitle="Browse All the Cards You've Created on This Page:"
      />
      <CardsFeedback
        cards={filterCards}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
    </div>
  )
}
