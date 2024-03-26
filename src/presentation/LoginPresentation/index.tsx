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

  function handleForgotPassword() {
    if(email === ''){
      Alert.alert('Atenção!','Preencha o campo o email que deseja recuperar a senha.')
      return;
    }
    
    auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert('Redefinir senha','Enviamos um email para você'))
      .catch(error => console.log('ERROR FORGOTPASSWORD: ', error))
  }

  return (
    <View style={{ flex: 1 }}>
      <Login
        loading={loading}
        disabled={loading}
        onChangeTextEmail={(email) => setEmail(email) }
        onChangeTextPasswr={(password) => setPassword(password)}
        onClickForgot={handleForgotPassword}
        onClick={() => handleSignIn()}
      />
    </View>
  );
}

export default LoginPresentation