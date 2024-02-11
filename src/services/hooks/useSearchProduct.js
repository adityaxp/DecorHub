import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { host } from "../../utils/env";
import axios from "axios";

export const useSearchProduct = ({ searchKey }) => {
  const [searchResults, setSearchResults] = useState([]);

  const getSearchedResults = async () => {
    try {
      const response = await axios.get(
        `http://${host}:3000/api/products/search/${searchKey}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchKey ? getSearchedResults() : console.log("Search Key is undefined");
  }, [searchKey]);

  return searchResults;
};
