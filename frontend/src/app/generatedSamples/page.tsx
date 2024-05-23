// pages/index.tsx

import React from "react";
import { Box, Typography, Button } from "@mui/material";

/** AIで生成したランディングページ。ログインページのベースデザインとして使えそう。 */
const LandingPage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#303841"
    >
      <Typography variant="h3" color="#FFD24C" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="body1" color="#FFFFFF">
        Discover amazing products and services!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4, backgroundColor: "#92B4EC" }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default LandingPage;
