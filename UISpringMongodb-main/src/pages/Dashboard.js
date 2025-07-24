import * as React from 'react';
import { Box, Tab, Typography, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import Create from './Create';

export default function Home() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* Enhanced AppBar/Header */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)",
          mb: 4,
          borderRadius: "0 0 24px 24px",
          boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.10)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            component={Link}
            to="/"
            edge="start"
            sx={{
              color: "#fff",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "12px",
              mr: 2,
              "&:hover": { background: "rgba(255,255,255,0.25)" },
            }}
            size="large"
          >
            <HomeIcon fontSize="inherit" />
          </IconButton>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              letterSpacing: 2,
              color: "#fff",
              textShadow: "0 2px 8px rgba(25,118,210,0.18)",
              flexGrow: 1,
              textAlign: "center",
              textTransform: "uppercase",
              fontFamily: "Montserrat, Roboto, Arial",
            }}
          >
            Employer Dashboard
          </Typography>
          <Box sx={{ width: 48 }} /> {/* Spacer for symmetry */}
        </Toolbar>
      </AppBar>

      <Box sx={{ width: '100%', typography: 'body1', mt: 2 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: 600, mx: "auto" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              textColor="primary"
              indicatorColor="primary"
              centered
              sx={{
                ".MuiTab-root": {
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  letterSpacing: 1,
                }
              }}
            >
              <Tab label="Create Post" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1"><Create /></TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
