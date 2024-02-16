import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState, useEffect } from "react";
import { host } from "../../utils/env";

const fetchCart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoader(true);
    const id = await AsyncStorage.getItem("id");
    let cleanedId = id.replace(/^"|"$/g, "");
    const data = { userId: cleanedId };

    try {
      const endpoint = `http://${host}:3000/api/cart/find`;

      const response = await axios.get(endpoint, data);
      const responseData = JSON.stringify(response.data);

      const parsedData = JSON.parse(responseData);
      const products = parsedData[0].products;
      await AsyncStorage.setItem("cartCount", JSON.stringify(products.length));

      setData(products);

      setLoader(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoader(true);
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default fetchCart;
