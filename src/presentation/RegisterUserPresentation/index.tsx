import React, {useState} from 'react';

import auth from '@react-native-firebase/auth';

import RegisterUser from '../../screens/RegisterUser';
import { Alert } from 'react-native';

const RegisterUserPresentation = () => {
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    function handleNewUser() {
        // loading
        auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(() => Alert.alert('Conta','Cadastrado com sucesso!'))
            .catch(error => console.log(error))
            // .finally(() => setIsloading(false))
    }

 return (
   <RegisterUser
    onChangeTextName={(text: string) => setNome(text)}
    onChangeTextEmail={(text: string) => setEmail(text)}
    onChangeTextSenha={(text: string) => setSenha(text)}
    onClick={handleNewUser}
   />
  );
};

export default RegisterUserPresentation;