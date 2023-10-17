import { useState, useEffect } from "react";
import axios from "axios";

const useIdFetch = (method, endpoint, id, query = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: method,
    url: `https://fee9-103-158-139-130.ngrok-free.app/api/${endpoint}/${id}`,
    params: query,
  };
//   console.log(options.url);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("there is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data , isLoading, error, refetch };
}
export default useIdFetch;
