import {
  ScrollView,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";
import { BackButton } from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import styles from "./styles/loginScreen.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../../infrastructure/theme";
import { host } from "../../../utils/env";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 character")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
});

const inValidForm = () => {
  Alert.alert("Invalid Form", "Please provide all required fields", [
    {
      text: "Cancel",
      onPress: () => {},
    },
    {
      text: "Continue",
      onPress: () => {},
    },
  ]);
};

export const LoginScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [obsecureText, setObsecureText] = useState(false);
  const [error, setError] = useState({});

  const login = async (values) => {
    setLoader(true);
    try {
      const endpoint = `http://${host}:3000/api/login`;
      const data = values;
      const response = await axios.post(endpoint, data);
      if (response.status === 200) {
        setLoader(false);
        setResponseData(response.data);
        await AsyncStorage.setItem("id", JSON.stringify(responseData._id));
        await AsyncStorage.setItem("token", JSON.stringify(responseData.token));
        await AsyncStorage.setItem(
          `user${responseData._id}`,
          JSON.stringify(responseData)
        );
        navigation.replace("BottomTabNavigation");
      } else {
        Alert.alert("Invalid credentials", "Wrong Password/Email", [
          {
            text: "Ok",
            onPress: () => {},
          },
        ]);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Something went wrong!", [
        {
          text: "Ok",
          onPress: () => {},
        },
      ]);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ScrollView>
      <CustomSafeAreaView>
        <BackButton onPress={() => navigation.goBack()} />

        <View style={{ marginHorizontal: 20 }}>
          <View>
            <Image
              source={require("../../../../assets/images/bk.png")}
              style={styles.cover}
            />
            <Text style={styles.title}>DécorHub</Text>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => login(values)}
            >
              {({
                handleChange,
                handleBlur,
                touched,
                handleSubmit,
                values,
                errors,
                isValid,
                setFieldTouched,
              }) => (
                <View>
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Email</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.email ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />

                      <TextInput
                        placeholder="Enter email"
                        onFocus={() => {
                          setFieldTouched("email");
                        }}
                        onBlur={() => {
                          setFieldTouched("email", "");
                        }}
                        value={values.email}
                        onChangeText={handleChange("email")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.email && errors.email && (
                      <Text style={styles.errorMessage}>{errors.email}</Text>
                    )}
                  </View>

                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Password</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.password ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="lock-outline"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />

                      <TextInput
                        secureTextEntry={obsecureText}
                        placeholder="Password"
                        onFocus={() => {
                          setFieldTouched("password");
                        }}
                        onBlur={() => {
                          setFieldTouched("password", "");
                        }}
                        value={values.password}
                        onChangeText={handleChange("password")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />

                      <TouchableOpacity
                        onPress={() => {
                          setObsecureText(!obsecureText);
                        }}
                      >
                        <MaterialCommunityIcons
                          name={
                            obsecureText ? "eye-outline" : "eye-off-outline"
                          }
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                      <Text style={styles.errorMessage}>{errors.password}</Text>
                    )}
                  </View>

                  <Button
                    loader={loader}
                    title={"Log In"}
                    onPress={isValid ? handleSubmit : inValidForm}
                    isValid={isValid}
                  />

                  <View style={styles.signUpWrapper}>
                    <Text style={styles.regText}>Not a member?</Text>
                    <Text
                      style={styles.signUpText}
                      onPress={() => navigation.navigate("RegisterScreen")}
                    >
                      {" "}
                      Sign up
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </CustomSafeAreaView>
    </ScrollView>
  );
};
