import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const ApproachList: React.FC = () => {
  const approaches = [
    "Cold calling",
    "Email outreach",
    "Social media engagement",
    "Networking events",
    "Content marketing",
    "Referral programs",
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#FFFFFF"
    >
      <Typography variant="h4" color="#303841" gutterBottom>
        Approaches for Customer Engagement
      </Typography>
      <List>
        {approaches.map((approach, index) => (
          <ListItem key={index}>
            <ListItemText primary={approach} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ApproachList;
