import { styled } from "@mui/material/styles";
import React from "react";

const ImageWrapper = styled("figure")(`
  position: relative;
  max-width: 230px;
  border-radius: 8px;
  overflow: hidden;
  transition: 250ms all;
  
  img{
    object-fit: cover;
    width: 100%;
    display: block;
  }

  figcaption{
    position: absolute;
    font-weight: 700;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: white;
    background: linear-gradient(transparent, grey);
    
  }
  :hover{
    transform: scale(1.1);
  }
`);

const CardWrapper = ({ recipe }) => {
  return (
    <ImageWrapper>
      <img
        src={
          recipe?.image
            ? recipe.image
            : "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6-300x188.png"
        }
        alt={recipe.title}
      />
      <figcaption>{recipe.title}</figcaption>
    </ImageWrapper>
  );
};

export default CardWrapper;
