import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ModalDropdown from '../components/ModalDropdown';
import CommentsList from '../components/CommentsList';

const CommentsScreen = () => {
    const [selectedPostId, setSelectedPostId] = useState(null);

    return (
        <View style={styles.container}>
            <ModalDropdown setSelectedPostId={setSelectedPostId} />
            {selectedPostId && <CommentsList selectedPostId={selectedPostId} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CommentsScreen;