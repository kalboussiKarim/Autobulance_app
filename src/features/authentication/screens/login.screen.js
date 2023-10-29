import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { theme } from "../../../utils/theme";
import { Inputfield } from "../../../components/inputField/Inputfield";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { ForgetPasswordDialog } from "../components/ForgetPassword/forgetPassword.component";
import { Button } from "../components/Button/button.component";
import { LoginWith } from "../components/loginWith/loginWith.component";

const LoginWithComponent = ({ label, iconName }) => {};

export const LoginScreen = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [check, setCheck] = useState(false);
  const [resetPasswordDialog, setResetPasswordDialog] = useState(false);

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (err, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: err }));
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
            onChange={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            label="Enter you email address"
            error={errors.email}
            iconName="email-outline"
            keyboardType="email-address"
          />
          <Inputfield
            onChange={(text) => handleOnchange(text, "password")}
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
            onPress={() => console.log("execute validation form")}
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
  },
  imageview: {
    marginTop: 10,
    alignItems: "center",
  },
});
