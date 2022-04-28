import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getRecipe from "../API/getRecipe";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const RecipeWrapper = styled(Box)(`
	margin-top: 30px;
	display: flex;

	.active{
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}

  img{
    max-width: 300px;
  }
`);

const Btn = styled(Button)(`
  background: white;
  color: black;
  margin: 10px 10px;
  min-width: 170px;
  border: 2px solid black;
  border-radius: 0;
`);

const Recipe = () => {
  const param = useParams();
  const [recipe, setRecipe] = useState([]);
  const [activeBtn, setActiveBtn] = useState("instructions");

  useEffect(() => {
    getRecipe(param.id, setRecipe);
  }, [param.id]);
  return (
    <>
      <RecipeWrapper>
        <Box flex={3} sx={{ margin: "2px" }}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
        </Box>
        <Box flex={4} sx={{ margin: "2px 10px" }}>
          <Box>
            <Btn
              onClick={() => setActiveBtn("instructions")}
              className={activeBtn === "instructions" ? "active" : ""}
            >
              Instructions
            </Btn>
            <Btn
              onClick={() => setActiveBtn("ingredients")}
              className={activeBtn === "ingredients" ? "active" : ""}
            >
              Ingredients
            </Btn>
          </Box>
          {activeBtn === "instructions" && (
            <Box>
              <Typography
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
                variant="body2"
                marginBottom={"15px"}
              ></Typography>
              <Typography
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                variant="body2"
                marginBottom={"15px"}
              ></Typography>
            </Box>
          )}
          {activeBtn === "ingredients" && (
            <List>
              {recipe.extendedIngredients.map((ingredient) => (
                <ListItem key={ingredient.id}>
                  <ListItemIcon>
                    <MenuBookIcon />
                  </ListItemIcon>
                  <ListItemText>{ingredient.original}</ListItemText>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </RecipeWrapper>
    </>
  );
};

export default Recipe;
