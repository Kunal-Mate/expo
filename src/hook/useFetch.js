import { useState, useEffect } from "react";
import axios from "axios";
import mockPets from "../mock/mockPets";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    // url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    url: mockPets
    // params: { ...query },
    // headers: {
    //   'X-RapidAPI-Key': 'e3d01f2d50msh031c4348d9545fcp1a4b0djsnac8510891b07',
    //   'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    // }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // const response = await axios.request(options);
      // setData(response.data.data);
      setData(mockPets);
      setIsLoading(false);
      // console.log(response)
    } catch (error) {
      setError(error);
      console.log(error);
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
export default useFetch;
