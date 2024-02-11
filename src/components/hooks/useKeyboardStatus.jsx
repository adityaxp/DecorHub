import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";

const useKeyboardStatus = () => {
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardIsVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardIsVisible(false);
      }
    );

    // cleanup function
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return keyboardIsVisible;
};

export default useKeyboardStatus;
