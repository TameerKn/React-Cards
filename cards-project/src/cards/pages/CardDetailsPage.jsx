import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import { Typography, Paper, Divider, Avatar, Box } from "@mui/material";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Map from "../services/MapContainer"
export default function CardDetailsPage() {
  const { id } = useParams();
  const { card, error, isLoading, getCardById } = useCards();


  useEffect(() => {
    getCardById(id);
  }, [id, getCardById]);

  if (isLoading) return <Spinner/>
  if (error) return <Error
   errorMessage={error} />;

  return (
    <Container sx={{p:2}}>
      <PageHeader
        title="Card details"
        subtitle="Here you can find all the details about specific card:"
      />

      <Paper sx={{p: 3, ml: 20, mr: 20, textAlign: "center", boxShadow: "0px 4px 0px rgb(99, 129, 212)"}}>      
        <Typography variant= "h4" fontWeight="bold" >{card.title}</Typography>
        <Typography sx={{ ml:1, fontSize: 20}}>{card.subtitle}</Typography>
        <Divider sx={{ my: 2, bgcolor: "#6381d4"}} />
        <Avatar sx={{mb: 2, mt: 1, borderRadius: 0, width: '100%', height: 300, boxShadow:  "0px 2px 13px rgb(51, 51, 204)" }}
         src={card.image?.url}
         alt={card.image?.alt}/>
        <Typography sx={{ ml:1, fontSize: 20}}>{card.description}</Typography>
      </Paper>

      <Paper sx={{p: 3, mt: 3, ml: 20, mr: 20, textAlign: "center", boxShadow: "0px 4px 0px rgb(99, 129, 212)"}}>      
        <Typography variant= "h5" fontWeight="bold" textAlign="left" >Address Details:</Typography>
        <Typography textAlign="left" sx={{ml: 0.5, fontSize: 20}}>{card.phone}</Typography>
        <Typography textAlign="left" sx={{ml: 0.5, fontSize: 20}}>Email Address: {card.email}</Typography>
        <Typography textAlign="left" sx={{ml: 0.5, fontSize: 20}}>Country: {card.address?.country}</Typography>
        <Typography textAlign="left" sx={{ml: 0.5, fontSize: 20}}>State: {card.address?.state}</Typography>
        <Typography textAlign="left" sx={{ml: 0.5, fontSize: 20}}>City: {card.address?.city}</Typography>
        <Typography textAlign="left" sx={{ml: 0.5, fontSize: 20}}>Street: {card.address?.country}</Typography>
        <Typography textAlign="left" sx={{ml: 0.5, fontSize: 20}}>House Number: {card.address?.houseNumber}</Typography>
        <Typography textAlign="left" sx={{ml: 0.5, fontSize: 20}}>Card Likes: {card.likes.length} </Typography>   
        <Divider sx={{ my: 2, bgcolor: "#6381d4"}} />
        <Typography variant= "h5" fontWeight="bold" textAlign="left" >Find on Google Maps:</Typography>
        <Box sx={{height: 401, width: 781, mb: 2, mt: 2, boxShadow: "0px 2px 13px rgb(99, 129, 212)"}}>
        <Map
         address={card.address}
         />
        </Box>
        <Typography textAlign="left" sx={{ml: 0.5, fontSize: 20}}>Biz Number: {card.bizNumber}</Typography>
        <Typography textAlign="left" sx={{ml: 0.5, fontSize: 20}}>Created At: {card.createdAt}</Typography>
      </Paper>


    </Container>
  );
}
