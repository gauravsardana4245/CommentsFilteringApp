import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const PostCard = ({ comment }) => (
    <View style={styles.commentContainer}>
        <View style={styles.userInfoContainer}>
            <FontAwesome5 name="user-alt" size={24} color="black" />
            <Text style={styles.userName}> {comment.name}</Text>
        </View>
        <View style={styles.commentContentContainer}>
            <Text style={styles.commentText}>{comment.body}</Text>
        </View>
        <View style={styles.commentInfoContainer}>
            <Text style={styles.commentTime}>12:18 pm</Text>
            <Text style={styles.commentDate}>09 Oct 2023</Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.commentStatsContainer}>
            <Text style={styles.commentStatItem}><Text style={styles.dataText}>317 </Text> Reposts</Text>
            <Text style={styles.commentStatItem}><Text style={styles.dataText}>6 </Text> Quotes</Text>
            <Text style={styles.commentStatItem}><Text style={styles.dataText}>2,2300 </Text> Likes</Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.commentActionsContainer}>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
            <Ionicons name="arrow-redo-circle-outline" size={24} color="black" />
            <Ionicons name="heart-outline" size={24} color="black" />
            <Ionicons name="bookmark-outline" size={24} color="black" />
            <Ionicons name="share-social-outline" size={24} color="black" />
        </View>
        <View style={styles.horizontalLine} />
    </View>
);


const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    commentContainer: {
        marginTop: 20
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginBottom: 8,
    },
    userName: {
        fontWeight: 'bold',
        marginRight: 8,
    },
    commentContentContainer: {},
    commentText: {
        fontSize: 20,
    },
    commentInfoContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        marginBottom: 8,
    },
    commentTime: {},
    commentDate: {},
    horizontalLine: {
        height: 1,
        backgroundColor: 'lightgray',
        marginVertical: 8,
    },

    commentStatsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10
    },
    commentStatItem: {},
    commentActionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default PostCard
