import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

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
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12}>
        <Button sx={{ margin: "1% 2%" }} variant="outlined">
          <Link to="/">Home</Link>
        </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>

      {post.length === 0 && query.length > 0 ? (
        <Typography>No posts found for "{query}".</Typography>
      ) : (
        post.map((p) => (
          <Grid key={p.id} item xs={12} md={6} lg={4}>
            <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "2rem", fontWeight: "600" }}
              >
                {p.profile}
              </Typography>
              <Typography
                sx={{ color: "#585858", marginTop: "2%" }}
                variant="body"
              >
                Description: {p.desc}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: "10px" }}>
                Years of Experience: {p.exp} years
              </Typography>
              <Typography gutterBottom variant="body">
                Skills :
              </Typography>
              {p.techs &&
                p.techs.map((s, i) => (
                  <Typography key={i} variant="body" gutterBottom>
                    {s}.
                  </Typography>
                ))}
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Feed;
