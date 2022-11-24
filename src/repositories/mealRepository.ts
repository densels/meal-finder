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
  return response;
};

const getMealById = async (id: string): Promise<Meal | any> => {
  if (!id)
    // TODO: We should redirect to the home page in order to allow user to search for new meal
    return { isError: true, text: "Please select product from the list" };
  const response = await get({ url: `/lookup.php?i=${id}` });
  return response;
};

const getMeals = async (name?: string): Promise<Meal | Error | any> => {
  if (!name) {
    return getRandomMeal();
  }
  return getMealByName({ name });
};

export { getMeals, getMealByName, getMealById };
