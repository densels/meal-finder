import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { getMealById } from "../repositories/mealRepository";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const MealPage = () => {
  const { mealId } = useParams();
  const { data, loading } = useAxios({
    repositoryFunction: getMealById,
    props: mealId,
  });

  // Ingredients are returned as key value pair, each with unique key per ingredient
  // in order to render them as a list, we need to filter list to values
  // which contain strIngredient key
  const IngredientsRenderer = ({ meal }: { meal: any }) => {
    const ingredients = Object.keys(meal)
      .filter((key) => key.includes("strIngredient"))
      .reduce((obj: any, key: any) => {
        obj[key] = meal[key];
        return obj;
      }, {});
    return (
      <ListItemRenderer>
        {Object.values(ingredients).map((ingredient: any, index: any) => {
          if (!ingredient) return null;
          return <h3 key={index}>{ingredient}</h3>;
        })}
      </ListItemRenderer>
    );
  };

  return (
    <MealPageWrapper data-testid="meal-page-wrapper">
      {loading && <LoadingSpinner />}
      {data && (
        <ContentWrapper>
          <Header background={data.meals[0].strMealThumb || ""}>
            <TitleWrapper>
              <h2 data-testid="meal-page-title">{data.meals[0].strMeal}</h2>
            </TitleWrapper>
            <div>
              <CloseButton href="/" />
            </div>
          </Header>
          <IngredientsWrapper>
            <h2>Cooking ingredients</h2>
            <ul>
              <IngredientsRenderer meal={data.meals[0]} />
            </ul>
          </IngredientsWrapper>
          <IframeWrapper>
            <iframe
              width="850"
              height="250"
              src={data.meals[0].strYoutube.replace("watch", "embed")}
              allowFullScreen
              title="Cooking instructions"
            />
          </IframeWrapper>
        </ContentWrapper>
      )}
    </MealPageWrapper>
  );
};

export default MealPage;

const MealPageWrapper = styled.div``;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div<{ background: string }>`
  display: flex;
  width: 100vw;
  height: 500px;
  justify-content: space-between;
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  height: 5em;
  padding: 8px;
  margin: 32px;
  border-radius: 14px;
  width: auto;
`;

const CloseButton = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: black;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const IngredientsWrapper = styled.div`
  margin: 16px;
`;

const ListItemRenderer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IframeWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;
