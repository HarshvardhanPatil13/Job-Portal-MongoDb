import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Chip,
  Fade,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (query.length > 0) {
        try {
          const response = await axios.get(`https://job-portal-using-mongodb.onrender.com/posts/${query}`);
          setPost(response.data);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      } else {
        fetchInitialPosts();
      }
    };

    const fetchInitialPosts = async () => {
      try {
        const response = await axios.get(`https://job-portal-using-mongodb.onrender.com/allPosts`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };

    fetchPosts();
  }, [query]);

  return (
    <Box sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      py: 4,
    }}>
      <Grid container spacing={3} sx={{ maxWidth: 1200, margin: "0 auto" }}>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)",
              color: "#fff",
              borderRadius: "16px", // less circular, more rounded-square
              minWidth: 0,
              width: 48,
              height: 48,
              boxShadow: "0 2px 8px 0 rgba(25,118,210,0.10)",
              mr: 2,
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0 60%, #64b5f6 100%)",
                color: "#fff",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 0,
            }}
          >
            <HomeIcon fontSize="medium" />
          </Button>
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search for jobs, skills, or companies..."
              sx={{ width: "75%", background: "#fff", borderRadius: 2, boxShadow: 1 }}
              fullWidth
              onChange={(e) => setQuery(e.target.value)}
            />
          </Box>
        </Grid>

        {post.length === 0 && query.length > 0 ? (
          <Typography sx={{ margin: "2% auto" }}>No posts found for "{query}".</Typography>
        ) : (
          post.map((p, idx) => (
            <Grid key={p.id || idx} item xs={12} md={6} lg={4}>
              <Fade in timeout={600}>
                <Card
                  sx={{
                    padding: "2rem",
                    borderRadius: "18px",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.03)",
                      boxShadow: "0 16px 40px 0 rgba(31, 38, 135, 0.22)",
                    },
                    background: "#fff",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: "#1976d2", mb: 1 }}
                  >
                    {p.profile}
                  </Typography>
                  <Typography
                    sx={{ color: "#585858", mb: 2 }}
                    variant="body2"
                  >
                    {p.desc || p.description}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <b>Experience:</b> {p.exp || p.experience} years
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Skills:
                    </Typography>
                    {(p.techs || p.skill || []).map((s, i) => (
                      <Chip
                        key={i}
                        label={s}
                        color="primary"
                        variant="outlined"
                        sx={{ mr: 1, mt: 1 }}
                      />
                    ))}
                  </Box>
                </Card>
              </Fade>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Feed;

