import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigation } from "./src/infrastructure/navigation/BottomTabNavigation";
import CartScreen from "./src/features/Cart/screens/CartScreen";
import SearchScreen from "./src/features/Search/screens/SearchScreen";
import ProductDetailsScreen from "./src/features/Product/screens/ProductDetailsScreen";
import { NewArrivals } from "./src/features/Product/screens/NewArrivals";
import { LoginScreen } from "./src/features/Authentication/screens/LoginScreen";
import { FavouritesScreen } from "./src/features/Favourites/screens/FavouritesScreen";
import { Orders } from "./src/features/Orders/screens/Orders";
import { RegisterScreen } from "./src/features/Authentication/screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductList"
          component={NewArrivals}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FavouritesScreen"
          component={FavouritesScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
