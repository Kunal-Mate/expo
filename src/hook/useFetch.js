import { useState, useEffect } from "react";
import axios from "axios";
import mockPets from "../mock/mockPets";
import mockdoctors from "../mock/mockDoctor";

const useFetch = (method,endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    // method: "GET",
    method: `${method}`,
    // url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    url: `https://b60e-103-158-139-130.ngrok-free.app/api/${endpoint}`,
    params: { ...query },
    // headers: {
    //   'X-RapidAPI-Key': 'e3d01f2d50msh031c4348d9545fcp1a4b0djsnac8510891b07',
    //   'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    // }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
      // setData(mockPets);
      // setData(mockdoctors);
      // console.log(response.data.data);
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
export default useFetch;
