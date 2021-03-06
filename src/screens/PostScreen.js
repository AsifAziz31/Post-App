import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, Card, Avatar, Button, Input } from "react-native-elements";
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import HeaderHome from "./../components/HeaderHome";
import CommentCard from "./../components/CommentCard"
import { AuthContext } from "../Provider/AuthProvider";
import { storeDataJSON, getDataJSON, removeData } from "../functions/AsyncFunctions";

const PostScreen = (props) => {
    const post = props.route.params.posts
    const currUser = props.route.params.currentUser
    const likecount = props.route.params.LikeCount
    const [CurDate, setCurDate] = useState("");
    const [NewComment, setNewComment] = useState("");
    const [CommentList, setCommentList] = useState([]);
    const [CommenterInfo, setCommenterInfo] = useState([]);
    const [CommentCount, setCommentCount] = useState(0);
    const [PostCommentInfo, setPostCommentInfo] = useState([]);


    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        setCurDate(date + '/' + month + '/' + year);
        const getData = async () => {
            let allcomments = []
            allcomments = await getDataJSON(post.key + 'Comment');
            let len = allcomments.length
            if (allcomments != null) {
                setCommentList(allcomments)
                setCommentCount(len)
                console.log(CommentCount)
            }
            let commenters = await getDataJSON(post.key + 'Commenter')
            if (commenters != null) {
                setCommenterInfo(commenters)
            }
        }
        getData();
    }, []);

    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    <HeaderHome
                        DrawerFunction={() => {
                            props.navigation.toggleDrawer();
                        }}
                    />
                    <Button
                        type="outline"
                        title="Go Back"
                        titleStyle={styles.buttonStyle}
                        buttonStyle={{ alignSelf: "flex-start", marginLeft: 5, paddingRight: 300 }}
                        icon={<AntDesign name="back" size={28} color="black" />}
                        onPress={
                            function () {
                                props.navigation.navigate("HomeTab");
                            }}
                    />

                    <Card>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Avatar
                                containerStyle={{ backgroundColor: "#F7E5FF" }}
                                rounded
                                icon={{ name: "user", type: "font-awesome", color: "black" }}
                                activeOpacity={1}
                            />
                            <Text h4Style={{ padding: 10 }} h4>{post.name}</Text>
                        </View>
                        <Text style={{ fontStyle: "italic" }}>  posted on {post.date}</Text>
                        <Card.Divider />
                        <Text style={{ paddingVertical: 10, }}> {post.postbody}</Text>
                        <Card.Divider />
                        <Card>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>

                                <Text style={{ paddingHorizontal: 10 }}>
                                    Like:  {likecount}
                                </Text>
                                <Text style={{ paddingHorizontal: 10 }}>
                                    Comments: {CommentCount}
                                </Text>
                            </View>
                        </Card>
                    </Card>
                    <Card>
                        <Input
                            multiline
                            placeholder="Write Something"
                            leftIcon={<Entypo name="pencil" size={24} color="black" />}
                            onChangeText={function (val) {
                                setNewComment(val);
                            }}
                        />
                        <Button title="Comment" titleStyle={styles.button2Style}
                            type="outline"
                            onPress={
                                async function () {
                                    var RandomNumber = Math.floor(Math.random() * 100) + 1;
                                    const Cid = RandomNumber.toString();
                                    let commentInfo = {
                                        name: currUser.name,
                                        date: CurDate,
                                        commentbody: NewComment,
                                        key: Cid,
                                        pid: post.key,
                                        author: post.name,
                                    }
                                    let commentList = CommentList.copyWithin()
                                    commentList.push(commentInfo)
                                    setCommentList(commentList)
                                    storeDataJSON(post.key + 'Comment', CommentList);
                                    console.log(CommentList);

                                    let commenterinfo = {
                                        commenter: currUser.name,
                                        cid: CommentList.key,
                                        pid: post.key,
                                        postauthor: post.name,
                                    }
                                    let allcommenter = CommenterInfo.copyWithin()
                                    allcommenter.push(commenterinfo)
                                    setCommenterInfo(allcommenter)
                                    storeDataJSON(post.key + 'Commenter', CommenterInfo);
                                    console.log(CommenterInfo);


                                }} >
                        </Button>
                    </Card>
                    <FlatList
                        data={CommentList}
                        renderItem={function ({ item }) {
                            return (
                                <CommentCard
                                    comments={item}
                                    currentUser={auth.CurrentUser}

                                />
                            )
                        }}
                    />

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
        backgroundColor: "white",
        flex: 1,
    },
    buttonStyle: {
        color: "#4169E1",
        fontSize: 14,
        fontWeight: "100",
        marginLeft: 10,

    },
    button2Style: {
        color: "#4169E1",
        fontSize: 16,
        fontWeight: "100",
    }

});

export default PostScreen;