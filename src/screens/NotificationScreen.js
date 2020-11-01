import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext } from "../Provider/AuthProvider";
const NotificationScreen = (props) => {
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
                        centerComponent={{
                            text: "Notifications",
                            style: { color: "#fff" }
                        }}
                        rightComponent={{
                            icon: "lock-outline",
                            color: "#fff",
                            onPress: function () {
                                auth.setIsLoggedIn(false);
                                auth.setCurrentUser({});
                            },
                        }}
                    />
                    <Card>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Avatar
                                containerStyle={{ backgroundColor: "#AAE47E" }}
                                rounded
                                icon={{
                                    name: "thumbs-o-up",
                                    type: "font-awesome",
                                    color: "black",
                                }}
                                activeOpacity={1}
                            />
                            <Text style={{ paddingHorizontal: 10 }}>
                                No Notifications yet.
              </Text>
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

    },
});

export default NotificationScreen;