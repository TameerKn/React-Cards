
import { Box, CardActions, IconButton, Typography } from "@mui/material";
import React, { useState, } from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from "../../../users/providers/UserProvider";
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';


export default function CardActionBar({
  handleCardLike,
  handleCardDelete,
  cardId,
  userId,
  likes = [],
  card,
  }) {

  const { user } = useUser();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(() => likes.includes(user?._id));

  const handleCardEdit = (id) => {
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  const handleLikeCard = async () => {
    await handleCardLike(cardId, isLiked);
    setIsLiked((prev) => !prev);
  };

  

  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        {user && (user.isAdmin || user._id === userId) ? (
          <>
            <IconButton onClick={() => handleCardDelete(cardId)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleCardEdit(cardId)}>
              <ModeEditIcon />
            </IconButton>
          </>
        ) :        
        <>
        <IconButton aria-label="DeleteIcon" disabled>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="ModeEditIcon" disabled>
          <ModeEditIcon />
        </IconButton>
      </>
        }
      </Box>

      
      <Box>
        {!user ? (
         <>
          <IconButton aria-label="FavoriteIcon" disabled>
            <FavoriteIcon />
          </IconButton>
         </> 
        ) :
         <>
        {isLiked ? (
          <IconButton onClick={() => handleLikeCard(cardId)}>           
          <FavoriteIcon color={isLiked ? "error" : "inherit"} />
          </IconButton>
        ) : (
          <IconButton onClick={() => handleLikeCard(cardId)}>           
          <FavoriteIcon color={isLiked ? "error" : "inherit"}/>
          </IconButton>
        )}
         </>
        }   
      </Box>
    </CardActions>
  );
}