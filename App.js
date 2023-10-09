import React from 'react';
import { SafeAreaView } from 'react-native';
import CommentsScreen from './screens/CommentsScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CommentsScreen />
    </SafeAreaView>
  );
};

export default App;
