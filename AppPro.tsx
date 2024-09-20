import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={style.container}>
      <Text style={isDarkMode ? style.darkText : style.whiteText}>Hello</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloText: {
    fontWeight: 'bold',
  },
  whiteText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});

export default AppPro;
