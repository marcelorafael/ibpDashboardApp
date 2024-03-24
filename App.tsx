/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';

import dark from './src/theme/dark';
import light from './src/theme/light';

import Routes from './src/Routes';

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <View style={{flex: 1}}>
        <Routes />
      </View>
    </ThemeProvider>
  );
};

export default App;

// export default require('./storybook').default;

// export { default } from './storybook';
