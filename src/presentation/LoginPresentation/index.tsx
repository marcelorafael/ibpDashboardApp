import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import Login from '../../screens/Login';

import { Alert, View } from 'react-native';

const LoginPresentation = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // console.log(email, password)

  function handleSignIn() {
    if(email === '' || password === ''){
      Alert.alert('Atenção!','Preencha todos os campos')
      return;
    }

    setLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('HomePresentation')
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }

  return (
    <View style={{ flex: 1 }}>
      <Login
        loading={loading}
        disabled={loading}
        onChangeTextEmail={(email) => setEmail(email) }
        onChangeTextPasswr={(password) => setPassword(password)}
        onClick={() => handleSignIn()}
      />
    </View>
  );
}

export default LoginPresentation