import React from "react";
import { Header } from "react-native-elements";
import { AuthContext } from "../Provider/AuthProvider";
const HeaderHome = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <Header backgroundColor='#AAE47E'
                    leftComponent={{
                        icon: "menu",
                        color: "#fff",
                        onPress: props.DrawerFunction,
                    }}
                    centerComponent={{ text: "Timeline", style: { color: "#fff" } }}
                    rightComponent={{
                        icon: "lock-outline",
                        color: "#fff",
                        onPress: function () {

                            auth.setIsLoggedIn(false);
                            auth.setCurrentUser({});

                        },
                    }}
                />
            )}
        </AuthContext.Consumer>
    );
};

export default HeaderHome;