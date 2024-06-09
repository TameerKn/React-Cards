import React, { useEffect  } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { Navigate } from "react-router-dom";


export default function FavCardsPage() {
  const {
    filterCards,
    error,
    isLoading,
    GetFavCards,
    handleCardLike,
    handleCardDelete,
  } = useCards();

  useEffect(() => {
    GetFavCards();
  }, [GetFavCards]);

  const { user } = useUser();
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;
  
  return (
    <div>
      <PageHeader
        title="Favorite Cards"
        subtitle="Browse all your favorite cards here:"
      />
      <CardsFeedback
        cards={filterCards}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}