import { Stack, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <Stack
      direction="row"
      sx={{
        top: "0",
        position: "sticky",
        justifyContent: "space-between",
      }}
      alignItems="center"
      p={2}
    >
      <Stack direction="row" sx={{ alignItems: "center", display: "flex" }}>
        <IconButton>
          <MenuIcon fontSize="large" sx={{ color: "#C9C9C9" }} />
        </IconButton>
        <Link
          to="/"
          style={{ marginLeft: "25px", display: "flex", alignItems: "center" }}
        >
          <YouTubeIcon sx={{ fontSize: "45px", color: "#00A4E6" }} />
          <Typography variant="h6" sx={{ color: "white" }}>
            Learn{" "}
            <span style={{ color: "#00A4E6", fontWeight: "bold" }}>WebDev</span>
          </Typography>
        </Link>
      </Stack>
      <SearchBar />
    </Stack>
  );
}

export default NavBar;
