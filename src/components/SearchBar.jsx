import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
     navigate(`/search/${searchTerm}`);

     setSearchTerm('')
    }
}
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={0}
      sx={{
        borderRadius: 20,
        boxShadow: "none",
        pl: 2,
        mr: { sm: 5 },
        background: '#121212',
        border: '1px solid #C9C9C9',
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <IconButton
        type="submit"
        sx={{
          color: "#C9C9C9",
          p: "10px",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
