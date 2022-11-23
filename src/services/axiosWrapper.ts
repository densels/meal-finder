import axios from "axios";
// Generic axiosWrapper will become useful when applications scales as
// it helps us to achieve reusability and modifyability of the code
// where behaviour can be changed by changing single function, rather than
// every repository or even worse, every compoenent
interface GetProps {
  url: string;
  params?: any;
}

// we need to change base url to query 3rd party API
let axiosInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});
// It's useful to have generic GET method which would contain
// logic for shared behaviour
// as well as shared and consistent error handling
const get = async (props: GetProps): Promise<any> => {
  const { url, params } = props;
  console.log("calling url", axios.defaults.baseURL);
  return new Promise((resolve) => {
    axiosInstance
      .get(url, params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        // For now we can keep it simple but we could pass the custom
        // error handler from the consumer if needed
        resolve({ isError: true, error });
      });
  });
};

export { get };
