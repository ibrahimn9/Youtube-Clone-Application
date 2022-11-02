import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import { Stack, Box, Typography, Button, Divider } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const Feed = ({ open }) => {

  const [selectedCategory, setSelectedCategory] = useState("JavaScript");
  const [selectedVideoCategory, setSelctedVideoCategory] = useState("Videos");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory} ${selectedVideoCategory}`)
    .then((data) => setVideos(data.items))
  },[selectedCategory, selectedVideoCategory]);


  return (
    <Stack
      sx={{
        flexDirection: "row",
        minHeight: '100vh'
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRdius: 20,
          px: { sx: 0, md: 3 },
        }}
      >
        <SideBar
          open={open}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#fff",
          }}
        >
          @copyright 2022 @Hamdani_Ibrahim
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#00A4E6" }}>Videos</span>
        </Typography>
        <Stack
          direction="row"
          spacing={{md:20, xs:0}}
          sx={{
            height: "auto",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            onClick={(e) => setSelctedVideoCategory('Videos')}
            sx={{
              borderBottom: selectedVideoCategory === 'Videos' && '4px solid #00A4E6'
            }}
          >
            Videos
          </Button>
          <Button
            variant="text"
            onClick={(e) => setSelctedVideoCategory('Crash Courses')}
            sx={{
              borderBottom: selectedVideoCategory === 'Crash Courses' && '4px solid #00A4E6'
            }}
          >
            Crash Courses
          </Button>
        </Stack>
        <Videos videos={videos} selectedVideoCategory={selectedVideoCategory} />
      </Box>
    </Stack>
  );
};

export default Feed;