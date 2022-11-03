import { Stack } from "@mui/material";
import { categories } from "../utils/constante";

const SideBar = ({ open, selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="column"
      sx={{
        overflowY: "auto",
        flexDirection: { md: "column" },
        height: { sx: "auto", md: "95%" },
        mt: 3,
        width: 'auto'
      }}
    >
      {categories.map((category) => (
        <span
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#272727",
          }}
          className="category-btn"
        >
          <span
            style={{
              marginRight: '36px',
            }}
          >
            {category.icon}
          </span>
          <span
            className="category-name"
            style={{
              justifyContent: 'center'
            }}
          >
            {category.name}
          </span>
        </span>
      ))}
    </Stack>
  );
};

export default SideBar;
