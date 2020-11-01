import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { FontAwesome, Feather, AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { storeDataJSON } from "../functions/AsyncFunctions";

const SignUpScreen = (props) => {
    const [Name, setName] = useState("");
    const [SID, setSID] = useState("");
    const [Number, setNumber] = useState("");
    const [DOB, setDOB] = useState("");
    const [Work, setWork] = useState("");
    const [Password, setPassword] = useState("");

    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title>Welcome Our New User</Card.Title>
                
                <Card.Divider />
                <Input
                    leftIcon={<Ionicons name="ios-person" size={24} color="black" />}
                    placeholder="  Name"
                    onChangeText={function (currentInput) {
                        setName(currentInput);
                    }}
                />
                <Input
                    leftIcon={<AntDesign name="idcard" size={24} color="black" />}
                    placeholder=" Student ID"
                    onChangeText={function (currentInput) {
                        setSID(currentInput);
                    }}
                />

                <Input
                    leftIcon={<AntDesign name="calendar" size={24} color="black" />}
                    placeholder=" Date of Birth"
                    onChangeText={function (currentInput) {
                        setDOB(currentInput);
                    }}
                />

                <Input
                    leftIcon={<MaterialIcons name="work" size={24} color="black" />}
                    placeholder=" Works at"
                    onChangeText={function (currentInput) {
                        setWork(currentInput);
                    }}
                />

                <Input
                    leftIcon={<FontAwesome name="phone" size={24} color="black" />}
                    placeholder="  Phone Number"
                    onChangeText={function (currentInput) {
                        setNumber(currentInput);
                    }}
                />

                <Input
                    placeholder=" Password"
                    leftIcon={<Feather name="key" size={24} color="black" />}
                    secureTextEntry={true}
                    onChangeText={function (currentInput) {
                        setPassword(currentInput);
                    }}
                />

                <Button
                    icon={<AntDesign name="user" size={24} color="white" />}
                    title="  Sign Up"
                    type="solid"
                    buttonStyle={styles.button2style}
                    onPress={function () {
                        let currentUser = {
                            name: Name,
                            sid: SID,
                            work: Work,
                            dob: DOB,
                            phone: Number,
                            password: Password,
                        };
                        storeDataJSON(Number, currentUser);
                        props.navigation.navigate("SignIn");
                    }}
                />
                <Button
                    type="clear"
                    icon={<AntDesign name="login" size={24} color="#C858E4" />}
                    title="  Have an account? Sign in!"
                    titleStyle={styles.loginstyle}
                    onPress={function () {
                        props.navigation.navigate("SignIn");
                    }}
                />
            </Card>
        </View>
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
export default SignUpScreen;