import React from "react";
import { Box, Divider, Typography, } from "@mui/material";

export default function PageHeader({ title, subtitle, typograph, typograph2 }) {
  return (
    <Box sx={{padding: 1, textAlign: "center"}}>
      <Typography variant="h2" component="h1" fontWeight="bolder" color="secondary">
        {title}
      </Typography>
      <Typography variant="h5" component="h2" fontWeight="bold" color="secondary">
        {subtitle}
      </Typography>
      <Typography component="h3" color="secondary">
        {typograph}
      </Typography>
      <Divider sx={{ my: 2, bgcolor: "#dedede"}} />
      <Typography variant= "h5" component="h4" color="secondary">
        {typograph2}
      </Typography>
    </Box>
  );
}