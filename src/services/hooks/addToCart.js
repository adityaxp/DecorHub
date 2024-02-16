import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
//import fetchCart from "./fetchCart";
import { host } from "../../utils/env";

const AddToCart = async (productId, quantity) => {
  try {
    const id = await AsyncStorage.getItem("id");
    const endpoint = `http://${host}:3000/api/cart`;
    let cleanedId = id.replace(/^"|"$/g, "");
    const data = {
      cartItem: productId,
      quantity: quantity,
      userId: cleanedId,
    };

    // const headers = {
    //         'Content-Type': 'application/json',
    //         'token': 'Bearer '+ JSON.parse(token)
    //     };

    await axios.post(endpoint, data);
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export default AddToCart;
