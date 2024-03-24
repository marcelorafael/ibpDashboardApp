import React from 'react'
import Login from '../../screens/Login';

import { View } from 'react-native';

const LoginPresentation = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <Login onClick={() => navigation.navigate('HomePresentation')} />
    </View>
  );
}

export default LoginPresentation