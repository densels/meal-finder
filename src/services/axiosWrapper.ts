import axios from "axios";

// Generic axiosWrapper will become useful when applications scales as
// it helps us to achieve reusability and modifyability of the code
// where behaviour can be changed by changing single function, rather than
// every repository or even worse, every compoenent
interface GetProps {
  url: string;
  params?: any;
}
// It's useful to have generic GET method which would contain
// logic for shared behaviour
// as well as shared and consistent error handling
const get = async (props: GetProps) => {
  const { url, params } = props;
  return new Promise((resolve) => {
    axios
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
