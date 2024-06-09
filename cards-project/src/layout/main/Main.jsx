import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "../../providers/CustomThemeProvider";

export default function Main({ children }) {
  const { isDark } = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: isDark ? "#333333" : "#f1f0f0",
      }}
    >
      {children}
    </Box>
  );
}