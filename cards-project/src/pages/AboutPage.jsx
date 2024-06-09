import {Typography, Paper, Avatar, Box } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Discover Our Journey and Commitment to Excellence"
        />

      <Paper sx={{p: 2 , ml: 20, mr: 20, textAlign: "center", boxShadow: " 0px 4px 0px rgb(99, 129, 212)"}}>
      <Typography variant= "h4" fontWeight="bold" >BCard - Your Destination for Premium Business Cards</Typography>
      <Typography sx={{ ml:1, fontSize: 20}}>At BCard, we're dedicated to crafting premium business cards that leave a lasting impression. Our</Typography>
      <Typography sx={{ ml:1, fontSize: 20}}>journey is driven by a passion for design and a relentless commitment to excellence.</Typography>
      </Paper>

      <Paper sx={{p: 2 , ml: 20, mr: 20, mt: 3, textAlign: "center", boxShadow: " 0px 4px 0px rgb(99, 129, 212)"}}>
      <Typography variant= "h4" fontWeight="bold">Our Mission</Typography>
      <Typography sx={{ ml:1, fontSize: 20 }}>Our mission is simple: to provide you with more than just a business card. We offer a masterpiece that </Typography>
      <Typography sx={{ ml:1, fontSize: 20 }}>represents your brand identity and professionalism. Each card is meticulously designed to reflect your </Typography>
      <Typography sx={{ ml:1, fontSize: 20 }}>unique style and make a memorable impact.</Typography>

      <Typography variant= "h4" sx={{mt:2}} fontWeight="bold">Creative Excellence</Typography>
      <Typography sx={{ ml:1, fontSize: 20 }}>With a team of talented designers, we push the boundaries of creativity to offer you</Typography>
      <Typography sx={{ ml:1, fontSize: 20 }}>innovative and eye-catching designs that stand out in any setting.</Typography>


      <Typography variant= "h4" sx={{mt:2}} fontWeight="bold">Uncompromising Quality</Typography>
      <Typography sx={{ ml:1, fontSize: 20 }}>We take pride in delivering unparalleled quality in every card we produce.</Typography>
      <Typography sx={{ ml:1, fontSize: 20 }}>From the finest materials, we ensure perfection at every step.</Typography>


      <Typography variant= "h4" sx={{mt:2}} fontWeight="bold">Thank you!</Typography>
      <Typography sx={{ ml:1, fontSize: 20 }}>Thank you for visiting our site and considering us for your business card needs. We look forward to working with you and helping you achieve your professional goals.</Typography>
      </Paper>
      
    </div>
  );
}