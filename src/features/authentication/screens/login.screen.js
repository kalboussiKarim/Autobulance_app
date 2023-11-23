import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { theme } from "../../../utils/theme";
import { useDispatch, useSelector } from "react-redux";

import { Inputfield } from "../../../components/inputField/Inputfield";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { ForgetPasswordDialog } from "../components/ForgetPassword/forgetPassword.component";
import { Button } from "../components/Button/button.component";
import { LoginWith } from "../components/loginWith/loginWith.component";
import { useNavigation } from "@react-navigation/native";
import { login } from "../slice";
import http from "../../autobulance/utilities/http";
export const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [check, setCheck] = useState(false);
  const [resetPasswordDialog, setResetPasswordDialog] = useState(false);
  const dispatch = useDispatch();

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (err, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: err }));
  };
  const formValidation = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }

    if (isValid) {
      handleLogin();
    }
  };
  const handleLogin = async () => {
    try {
      await dispatch(login(inputs)).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log("An unexpected error occurred:", error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageview}>
          <Image source={require("../../../../assets/login/login.png")} />
        </View>
        {/*input fields View */}
        <View>
          <Inputfield
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            label="Enter you email address"
            error={errors.email}
            iconName="email-outline"
            keyboardType="email-address"
          />
          <Inputfield
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            label="Enter your password"
            error={errors.password}
            keyboardType="default"
            password
          />
        </View>

        {/*Remember and forget password View */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 23,
            marginTop: 30,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5, marginLeft: 23 }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setCheck(!check);
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: 20,
                  height: 20,
                }}
              >
                {check ? (
                  <MaterialCommunityIcons
                    name="check"
                    style={{
                      color: "#22A699",
                      fontSize: 20,
                    }}
                  />
                ) : (
                  ""
                )}
              </View>
            </TouchableWithoutFeedback>
            <Text style={{ color: "#6B5E5E" }}>Remember password</Text>
          </View>
          <View>
            <TouchableWithoutFeedback
              onPress={() => {
                setResetPasswordDialog(true);
              }}
            >
              <View>
                <Text style={{ color: "#4D7EF9" }}>Forgot your password ?</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <ForgetPasswordDialog
            title="Password reset"
            description="change password"
            visible={resetPasswordDialog}
            onCancel={() => setResetPasswordDialog(false)}
          >
            <View style={{ padding: 5, alignItems: "center" }}>
              <Text>To complete baby</Text>
            </View>
          </ForgetPasswordDialog>
        </View>

        {/*login and register buttons View */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Button
            onPress={formValidation}
            title="login"
            titleColor="white"
            backgroundColor="#F2BE22"
            borderColor="#F2BE22"
          />
          <Button
            onPress={() => console.log("navigate to register screen")}
            title="Register"
            titleColor="#FF5E1D"
            backgroundColor="white"
            borderColor="#FF5E1D"
          />
        </View>

        {/*loginWith View */}
        <View
          style={{
            marginTop: 40,
            alignItems: "center",
            gap: 20,
          }}
        >
          <LoginWith
            label="Login with facebook"
            iconName={"facebook"}
            onPress={() => console.log("Login with Facebook")}
          />
          <LoginWith
            label="Login with Google"
            iconName={"google"}
            onPress={() => console.log("Login with Google")}
          />
          <LoginWith
            label="Login with LinkedIn"
            iconName={"linkedin"}
            onPress={() => console.log("Login with LinkedIn")}
          />
          <View style={{ height: 30, label: "to make a spacer" }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
    paddingTop: 40,
  },
  imageview: {
    marginTop: 10,
    alignItems: "center",
  },
});
