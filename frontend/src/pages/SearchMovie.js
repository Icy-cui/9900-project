import React from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

export default function SearchMovie() {
  return (
    <Stack alignItems="center" justifyContent="center" mt="35px" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" }, mb: "50px" }}
        textAlign="center"
      >
        Awesome Movie you should know
      </Typography>
      <Box position="relative" mb="70px">
        <TextField
          height="76px"
          type="text"
          value=""
        //   onChange={(e) => {}}
          placeholder="Search movie you are interested..."
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "900px", xs: "100%" },
            borderRadius: "4px",
          }}
        ></TextField>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            height: "56px",
            width: { lg: "175px", xs: "100%" },
            mt: { lg: "0", xs: "70px" },
            fontSize: { lg: "20px", xs: "14px" },
            position: "absolute",
            right: 0,
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}
