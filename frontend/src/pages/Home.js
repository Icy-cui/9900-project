import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import SearchMovie from './SearchMovie';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchContent = "avengers"
    axios
      .get("http://www.omdbapi.com/?apikey=d758ba7&t&t=" + searchContent)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      });
  }, []);

  const imgStyle= {
    position: "absolute",
    right: '220px',
    top: '0px',
    width: '520px',
    height: '610px',
    marginTop: '-100px'
  }
  return (
    <>
      <Box
        sx={{
          mt: { lg: "180px", xs: "70px" },
          ml: { lg: "180px", xs: "70px" },
        }}
        // border="1px solid black"
        position="relative"
      >
        <Typography variant="h6" color="#808a96" fontWeight="bold">
          Movie Home
        </Typography>
        <Typography
          color="#3e4348"
          fontSize={{ lg: "70px", xs: "30px" }}
          style={{ lineHeight: "80px" }}
        >
          Watch, Smile,
          <br /> and Enjoy
        </Typography>
        <Typography color="#6f7f8c" style={{ lineHeight: "40px" }}>
          All in our website
        </Typography>
        <Button sx={{ mt: { lg: "20px", xs: "10px" } }} variant="contained">
          Explore Movie
        </Button>
        <Typography
          fontWeight={600}
          color="blue"
          sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
          fontSize="200px"
          mb={3}
        >
          MOVIE
        </Typography>
        <Box sx={{display: {lg:'block', xs:'none'}}}>
            <img style={imgStyle} alt='/' src={movies.Poster}></img>
        </Box>
      </Box>
      <SearchMovie/>
    </>
  );
}
