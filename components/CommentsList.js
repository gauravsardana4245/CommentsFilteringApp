import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import PostCard from './PostCard';
import CommentCard from './CommentCard';


const CommentsList = ({ selectedPostId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (selectedPostId) {
            axios
                .get('https://jsonplaceholder.typicode.com/comments', {
                    params: {
                        _limit: 100,
                    },
                })
                .then((response) => {
                    setComments(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching comments:', error);
                });
        }
    }, [selectedPostId]);

    const firstComment = comments.length > 0 ? comments[0] : [];
    const restOfComments = comments.slice(1);

    const renderRestOfComments = () => (
        <View>
            {restOfComments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </View>
    );


    return (
        <ScrollView style={styles.container}>
            {firstComment && <PostCard comment={firstComment} />}
            {renderRestOfComments()}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingHorizontal: 16,
        width: "100%"
    },
});

export default CommentsList;
