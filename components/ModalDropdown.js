import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios';

const ModalDropdown = ({ setSelectedPostId }) => {
    const [posts, setPosts] = useState([]);
    const [selectedPostTitle, setSelectedPostTitle] = useState('Select Post'); // State for selected post title

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    const handlePostSelection = (item) => {
        setSelectedPostId(item.key);
        setSelectedPostTitle(item.label);
    };

    return (
        <View >
            <Text style={styles.head}>Select Post:</Text>
            <ModalSelector
                data={posts.map((post) => ({ key: post.id, label: post.title }))}
                initValue={selectedPostTitle}
                onChange={(item) => handlePostSelection(item)}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    head: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 5,
    }
});

export default ModalDropdown;
