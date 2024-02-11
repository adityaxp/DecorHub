import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";
export const host = isAndroid ? "192.168.1.3" : "localhost";
