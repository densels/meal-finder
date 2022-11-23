import { Meal } from "../interfaces/Meal";
import { get } from "../services/axiosWrapper";

type Error = {
  isError: true;
  error: any;
};

const getRandomMeal = async (): Promise<Meal | Error | any> => {
  const response = await get({
    url: "/random.php",
  });
  console.log("get random meal response", response);
  return response;
};

interface GetMealByNameProps {
  name: string;
}

const getMealByName = async ({
  name,
}: GetMealByNameProps): Promise<Meal[] | Error | any> => {
  if (!name)
    return { isError: true, error: "Please provide a meal name to search for" };
  const response = await get({
    url: `/search.php?s=${name}`,
  });
  console.log("get meal by name result", response);
  return response;
};

export { getRandomMeal, getMealByName };
