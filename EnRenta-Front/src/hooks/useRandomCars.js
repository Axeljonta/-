import { useEffect, useState } from "react";
import { getRandomCars } from "../services/productService";

export const useRandomCars = () => {

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchCars = async () => {
      try {
        const data = await getRandomCars();
        setCars(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();

  }, []);

  return { cars, loading };
};