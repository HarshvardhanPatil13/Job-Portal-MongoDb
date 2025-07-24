import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Chip,
  Stack,
  Fade,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = { profile: "", exp: 0, techs: [], desc: "" };

const skillSet = [
  { name: "Javascript" },
  { name: "Java" },
  { name: "Python" },
  { name: "Django" },
  { name: "Rust" },
  { name: "React" },
  { name: "Node.js" },
  { name: "SQL" },
  { name: "AWS" },
];

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://job-portal-using-mongodb.onrender.com/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/employee/feed");
  };

  const handleSkillToggle = (skill) => {
    setForm((prev) => ({
      ...prev,
      techs: prev.techs.includes(skill)
        ? prev.techs.filter((s) => s !== skill)
        : [...prev.techs, skill],
    }));
  };

  const { profile, exp, desc, techs } = form;

  return (
    <Fade in timeout={600}>
      <Paper
        sx={{
          padding: { xs: "6% 2%", md: "3% 6%" },
          maxWidth: 600,
          margin: "3% auto",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.97)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        }}
        elevation={6}
      >
        <Typography
          align="center"
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: "#1976d2",
            letterSpacing: 1,
          }}
        >
          Create New Job Post
        </Typography>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
            }}
          >
            <TextField
              sx={{ width: "100%" }}
              required
              onChange={(e) => setForm({ ...form, profile: e.target.value })}
              label="Job Profile"
              variant="outlined"
              value={profile}
            />
            <TextField
              min="0"
              type="number"
              sx={{ width: "100%" }}
              required
              onChange={(e) => setForm({ ...form, exp: e.target.value })}
              label="Years of Experience"
              variant="outlined"
              value={exp}
            />
            <TextField
              sx={{ width: "100%" }}
              required
              multiline
              rows={4}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              label="Job Description"
              variant="outlined"
              value={desc}
            />
            <Box sx={{ width: "100%" }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                Required Skills
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {skillSet.map(({ name }, idx) => (
                  <Chip
                    key={idx}
                    label={name}
                    clickable
                    color={techs.includes(name) ? "primary" : "default"}
                    variant={techs.includes(name) ? "filled" : "outlined"}
                    onClick={() => handleSkillToggle(name)}
                    sx={{
                      mb: 1,
                      fontWeight: 500,
                      fontSize: "1rem",
                      transition: "all 0.2s",
                    }}
                  />
                ))}
              </Stack>
            </Box>
            <Button
              sx={{
                width: "100%",
                py: 1.5,
                fontWeight: 600,
                fontSize: "1.1rem",
                mt: 2,
                borderRadius: "12px",
              }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Fade>
  );
};

export default Create;
