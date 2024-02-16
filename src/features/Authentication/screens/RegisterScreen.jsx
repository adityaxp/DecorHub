import {
  ScrollView,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { CustomSafeAreaView } from "../../../components/CustomSafeAreaView";
import { BackButton } from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import styles from "./styles/loginScreen.style";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  MaterialCommunityIcons,
  Ionicons,
  EvilIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../../infrastructure/theme";
import { SIZES } from "../../../infrastructure/theme";
import { host } from "../../../utils/env";
import axios from "axios";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 character")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
  location: Yup.string()
    .min(3, "Provide a valid location")
    .required("Required"),
  username: Yup.string()
    .min(3, "Provide a valid username")
    .required("Required"),
});
export const RegisterScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [obsecureText, setObsecureText] = useState(false);

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
      { defaultIndex: 1 },
    ]);
  };

  const registerUser = async (values) => {
    setLoader(true);
    try {
      const endpoint = `http://${host}/api/register`;
      const data = values;

      const response = await axios.post(endpoint, data);

      if (response.status === 201) {
        setLoader(false);
        navigation.replace("LoginScreen");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <ScrollView>
      <CustomSafeAreaView>
        <View style={{ marginHorizontal: 20 }}>
          <View>
            <BackButton onPress={() => navigation.goBack()} />
            <Image
              source={require("../../../../assets/images/bk.png")}
              style={{
                height: SIZES.height / 3,
                width: SIZES.width - 60,
                resizeMode: "contain",
                marginBottom: SIZES.xxLarge,
              }}
            />

            <Text style={styles.title}>DécorHub</Text>
            <Formik
              initialValues={{
                email: "",
                password: "",
                location: "",
                username: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => registerUser(values)}
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
                    <Text style={styles.label}>Username</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.email ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="face-man-profile"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />

                      <TextInput
                        placeholder="Username"
                        onFocus={() => {
                          setFieldTouched("username");
                        }}
                        onBlur={() => {
                          setFieldTouched("username", "");
                        }}
                        value={values.username}
                        onChangeText={handleChange("username")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.username && errors.username && (
                      <Text style={styles.errorMessage}>{errors.username}</Text>
                    )}
                  </View>

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
                    <Text style={styles.label}>Location</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.location ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <Ionicons
                        name="location-outline"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />

                      <TextInput
                        placeholder="Enter location"
                        onFocus={() => {
                          setFieldTouched("location");
                        }}
                        onBlur={() => {
                          setFieldTouched("location", "");
                        }}
                        value={values.location}
                        onChangeText={handleChange("location")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.location && errors.location && (
                      <Text style={styles.errorMessage}>{errors.location}</Text>
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
                    title={"Sign Up"}
                    onPress={isValid ? handleSubmit : inValidForm}
                    loader={loader}
                    isValid={isValid}
                  />

                  <View style={styles.signUpWrapper}>
                    <Text style={styles.regText}>Already have an account?</Text>
                    <Text
                      style={styles.signUpText}
                      onPress={() => navigation.navigate("LoginScreen")}
                    >
                      {"  "}
                      Log In
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
