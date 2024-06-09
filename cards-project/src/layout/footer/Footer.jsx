import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

export default function Footer() {
  const { user } = useUser();
  const navigate = useNavigate();

  if(!user) return (
    <Paper elevation={5}
    sx={{position: "sticky", bottom: 0, boxShadow: 15}}
    >
      <BottomNavigation showLabels
      sx={{}}> 
        <BottomNavigationAction
        label="About"
        icon={<InfoIcon />}
        onClick={() => navigate(ROUTES.ABOUT)}
        />
        <BottomNavigationAction
        label="Cards"
        icon={<StyleIcon />}
        onClick={() => navigate(ROUTES.CARDS)}
        />
      </BottomNavigation>
    </Paper>
  )

  if(user.isBusiness === false) return (
    <Paper
      elevation={5}
      sx={{position: "sticky", bottom: 0, boxShadow: 15}}
    >
     <BottomNavigation showLabels
      sx={{}}> 
        <BottomNavigationAction
          label="Cards"
          icon={<StyleIcon />}
          onClick={() => navigate(ROUTES.CARDS)}
        />
        <BottomNavigationAction
          label="Liked Cards"
          icon={<FavoriteIcon />}
          onClick={() => navigate(ROUTES.FAV_CARDS)}
        />
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        </BottomNavigation>
    </Paper>
  )

  return (
    <Paper
      elevation={5}
      sx={{position: "sticky", bottom: 0, boxShadow: 15}}
    >
     <BottomNavigation showLabels
      sx={{}}> 

        <BottomNavigationAction
          label="Cards"
          icon={<StyleIcon />}
          onClick={() => navigate(ROUTES.CARDS)}
        />
        <BottomNavigationAction
          label="My Cards"
          icon={<AccountBoxIcon />}
          onClick={() => navigate(ROUTES.MY_CARDS)}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          onClick={() => navigate(ROUTES.FAV_CARDS)}
        />
        <BottomNavigationAction
          label="Add Card"
          icon={<AddBoxIcon />}
          onClick={() => navigate(ROUTES.CREATE_CARD)}
        />
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        </BottomNavigation>
    </Paper>
  );
}