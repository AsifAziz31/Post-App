import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import PostScreen from "./src/screens/PostScreen";

import { AuthContext, AuthProvider } from "./src/Provider/AuthProvider";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
const AuthStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator();
const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen name="Home" component={NotificationStackScreen} />
            <AppDrawer.Screen name="Profile" component={ProfileScreen} />
        </AppDrawer.Navigator>
    );
};

const HomeTabScreen = () => {
    return (
        <HomeTab.Navigator initialRouteName="Home" barStyle={{
            backgroundColor: "#AAE47E"
        }}>
            <HomeTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="home" color="white" size={26} />
                        ) : (
                                <AntDesign name="home" color="white" size={22} />
                            ),
                }}
            />
            <HomeTab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    tabBarLabel: "Notifications",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="ios-notifications" size={26} color="white" />
                        ) : (
                                <Ionicons
                                    name="ios-notifications-outline"
                                    size={22}
                                    color="white"
                                />
                            ),
                }}
            />
        </HomeTab.Navigator>
    );
};

const NotificationStackScreen = () => {
    return (
        <NotificationStack.Navigator initialRouteName="Home">
            <NotificationStack.Screen name="HomeTab"
                component={HomeTabScreen}
                options={{ headerShown: false }}
            />
            <NotificationStack.Screen name="Post"
                component={PostScreen}
                options={{ headerShown: false }}
            />
        </NotificationStack.Navigator>
    )
}

const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator initialRouteName="SignIn">
            <AuthStack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
        </AuthStack.Navigator>
    );
};

function App() {
    return (
        <AuthProvider>
            <AuthContext.Consumer>
                {(auth) => (
                    <NavigationContainer>
                        {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
                    </NavigationContainer>
                )}
            </AuthContext.Consumer>
        </AuthProvider>
    );
}

export default App;
