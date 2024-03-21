/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import dark from './src/theme/dark';
import light from './src/theme/light';

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <View>
        <Text>App</Text>
      </View>
    </ThemeProvider>
  );
};

// export default App;

export default require('./storybook').default;

// export { default } from './storybook';
