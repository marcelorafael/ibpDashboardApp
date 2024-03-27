import React, { useState } from 'react';

import auth from '@react-native-firebase/auth';
import firsstore from '@react-native-firebase/firestore'

import RegisterUser from '../../screens/RegisterUser';
import { Alert } from 'react-native';

const RegisterUserPresentation = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  function handleNewUser() {
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(async (value) => {
        let uid = value.user.uid;
        await firsstore().collection('users')
          .doc(uid).set({
            nome: nome,
            createdAt: new Date(),
            isAdmin: isAdmin
          })
          .then(() => {
            // let data = {
            //   uid: uid,
            //   nome: nome,
            //   email: value.user.email,
            //   isAdmin
            // }
            console.log("value: ", value)
          })
        Alert.alert('IBP', 'Usuário cadastrado com sucesso')
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }

  return (
    <RegisterUser
      onChangeTextName={(text: string) => setNome(text)}
      onChangeTextEmail={(text: string) => setEmail(text)}
      onChangeTextSenha={(text: string) => setSenha(text)}
      isLoading={isLoading}
      onClick={handleNewUser}
    />
  );
};

export default RegisterUserPresentation;