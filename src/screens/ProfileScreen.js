import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext } from "../Provider/AuthProvider";
import { Image } from "react-native";
const ProfileScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    <Header backgroundColor='#AAE47E'
                        leftComponent={{
                            icon: "menu",
                            color: "#fff",
                            onPress: function () {
                                props.navigation.toggleDrawer();
                            },
                        }}
                        centerComponent={{ text: "My Profile", style: { color: "#fff" } }}
                        rightComponent={{
                            backgroundColor: "#C858E4",
                            icon: "lock-outline",
                            color: "#fff",
                            onPress: function () {
                                auth.setIsLoggedIn(false);
                                auth.setCurrentUser({});
                            },
                        }}
                    />
                    <Card>
                        <View>
                            <Text style={styles.nameStyle}>Name: {auth.CurrentUser.name}</Text>
                            <Text style={styles.otherStyle}>Student ID: {auth.CurrentUser.sid}</Text>
                            <Text style={styles.otherStyle}>Date of Birth: {auth.CurrentUser.dob}</Text>
                            <Text style={styles.otherStyle}>Works at: {auth.CurrentUser.work}</Text>
                            <Text style={styles.otherStyle}>Phone Number: {auth.CurrentUser.phone}</Text>
                        </View>
                    </Card>
                </View>
            )}
        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "blue",
    },
    viewStyle: {
        flex: 1,
        color: "#AAE47E",
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "#AAE47E",
    },
    otherStyle: {
        fontSize: 22,
        color: "#000",
        textAlign: "left",
    },
    nameStyle: {
        fontSize: 28,
        color: "#000",
        textAlign: "left",
    },
});

export default ProfileScreen;