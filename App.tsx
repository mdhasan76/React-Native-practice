import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const App = () => {
  return (
    <View style={tw`flex-1`}>
      <Text style={tw`text-3xl text-center mt-10 text-green-600`}>App</Text>
      <Text>Hello Bro whats up</Text>
    </View>
  );
};

export default App;
