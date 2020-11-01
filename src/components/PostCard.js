import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const PostCard = (props) => {
    return (
        <Card>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Avatar
                    containerStyle={{ backgroundColor: "#AAE47E" }}
                    rounded
                    icon={{ name: "user", type: "font-awesome", color: "black" }}
                    activeOpacity={1}
                />
                <Text h4Style={{ padding: 10 }} h4>
                    {props.author}
                </Text>
                <Text h5Style={{ padding: 10 }} h5>
                    {props.date}
                </Text>
            </View>
            <Text style={{ fontStyle: "italic" }}> {props.title}</Text>
            <Text
                style={{
                    paddingVertical: 10,
                }}
            >
                {props.body}
            </Text>
            <Card.Divider />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Button
                    type="outline"
                    title="  Like (21)" 
                    titleStyle={styles.loginstyle}
                    icon={<AntDesign name="like1" size={24} color="#C858E4" />}
                />
                <Button
                    buttonStyle={styles.button2style}
                    type="solid" title="Comment (10)" />
            </View>
        </Card>
    );
};
const styles = StyleSheet.create({
    button2style: {
        backgroundColor: "#C858E4"
    },
    loginstyle: {
        color: "#C858E4"
    },
});

export default PostCard;