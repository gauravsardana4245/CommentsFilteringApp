import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const CommentCard = ({ comment }) => (
    <View style={styles.commentContainer}>
        <View style={styles.userInfoContainer}>
            <FontAwesome5 name="user-alt" size={24} color="black" />
            <Text style={styles.userName}> {comment.name}</Text>
            <Text>1h</Text>
        </View>
        <View style={styles.commentContentContainer}>
            <Text style={styles.commentText}>{comment.body}</Text>
        </View>
        <View style={styles.commentActionsContainer}>
            <Ionicons name="chatbubble-outline" size={18} color="black" />
            <Ionicons name="arrow-redo-circle-outline" size={18} color="black" />
            <Ionicons name="heart-outline" size={18} color="black" />
            <View></View>
            <View></View>
        </View>
        <View style={styles.horizontalLine2} />
    </View>
);


const styles = StyleSheet.create({
    commentContainer: {
        marginBottom: 16,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 5,
    },
    userName: {
        fontWeight: 'bold',
        marginRight: 8,
    },
    commentContentContainer: {
        marginBottom: 10
    },
    commentText: {
        fontSize: 16,
    },
    commentInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    commentTime: {},
    commentDate: {},
    horizontalLine: {
        height: 1,
        backgroundColor: 'lightgray',
        marginVertical: 8,
    },
    horizontalLine2: {
        height: 1,
        backgroundColor: 'lightgray',
    },
    commentStatsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    commentStatItem: {},
    commentActionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
});

export default CommentCard
