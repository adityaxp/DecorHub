import React, { useState, useEffect } from "react";
import axios from "axios";
import { Platform } from "react-native";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isAndroid = Platform.OS === "android";
  const host = isAndroid ? "192.168.1.3" : "localhost";

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://${host}:3000/api/products`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error };
};
