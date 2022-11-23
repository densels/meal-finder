import React, { useEffect, useState } from "react";

interface UseAxiosProps {
  repositoryFunction: (props?: any) => Promise<any>;
  props?: any;
}
const useAxios = ({ repositoryFunction, props }: UseAxiosProps) => {
  const [data, setData] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setData(null);
    if (!repositoryFunction) return;
    repositoryFunction(props).then((response) => {
      if (response && response.isError) {
        setError(true);
        setData(null);
      } else {
        setData(response.data);
      }
      setLoading(false);
      return () => {
        // dispose if needed
      };
    });
  }, [props]);

  return { data, loading, error };
};

export default useAxios;
