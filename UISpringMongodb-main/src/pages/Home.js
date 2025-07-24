import React from "react";
import { Typography, Button, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: "3rem 2rem",
          borderRadius: "24px",
          textAlign: "center",
          background: "rgba(255,255,255,0.95)",
          maxWidth: 480,
        }}
      >
        <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, color: "#1976d2" }}>
          Get Hired or Hire for Free!
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: "#444" }}>
          Find your dream job or the perfect candidate in seconds.
        </Typography>
        <Box>
          <Button
            sx={{ margin: "1rem", px: 4, py: 1.5, fontWeight: 600, fontSize: "1.1rem" }}
            variant="contained"
            color="primary"
            component={Link}
            to="/employer/dashboard"
          >
            Hire Talent
          </Button>
          <Button
            sx={{ margin: "1rem", px: 4, py: 1.5, fontWeight: 600, fontSize: "1.1rem" }}
            variant="outlined"
            color="primary"
            component={Link}
            to="/employee/feed"
          >
            Get Job Now
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
