import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../Provider/AuthProvider";
import { getDataJSON } from "../functions/AsyncFunctions";

const SignInScreen = (props) => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    <Card>
                        <Card.Title>Welcome to PostApp!</Card.Title>
                        <Card.Divider />
                        <Input
                            leftIcon={<FontAwesome name="phone" size={24} color="black" />}
                            placeholder=" Phone Number"
                            onChangeText={function (currentInput) {
                                setEmail(currentInput);
                            }}
                        />

                        <Input
                            placeholder="Password"
                            leftIcon={<Feather name="lock" size={24} color="black" />}
                            secureTextEntry={true}
                            onChangeText={function (currentInput) {
                                setPassword(currentInput);
                            }}
                        />

                        <Button
                            icon={<AntDesign name="login" size={24} color="white" />}
                            title="  Sign In"
                            type="solid"
                            buttonStyle={styles.button2style}
                            onPress={async function () {
                                let UserData = await getDataJSON(Email);
                                if (UserData.password == Password) {
                                    auth.setIsLoggedIn(true);
                                    auth.setCurrentUser(UserData);
                                } else {
                                    alert("Login Failed");
                                    console.log(UserData);
                                }
                            }}
                        />
                        <Button
                            type="clear"
                            icon={<AntDesign name="user" size={24} color="#C858E4" />}
                            title="  Need an account? Sign up!!"
                            titleStyle={styles.loginstyle}
                            onPress={function () {
                                props.navigation.navigate("SignUp");
                            }}
                        />
                    </Card>
                </View>
            )}
        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#AAE47E",
    },
    loginstyle: {
        color: "#C858E4"
    },
    button2style: {
        backgroundColor: "#C858E4"
    },
});
export default SignInScreen;