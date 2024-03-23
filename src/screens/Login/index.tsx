import React from 'react';
import { View, Text, Image } from 'react-native';
import * as S from './styles'
import Input from '../../components/@core/Input';
import Button from '../../components/@core/Button';

const image = require('./logo2.png');


export interface LoginProps {
}

const Login = ({ }: LoginProps) => {
  return (
    <S.Wrapper>
      <S.Head>
        <S.Image source={image} />
        {/* <S.Text>Igreja Batista da Pedreira</S.Text> */}
      </S.Head>
      <S.CenterView>
        <Input placeholder='email' />
        <Input placeholder='******' />
        <Button
          title='Acessar'
          variant='container'
        />
      </S.CenterView>
    </S.Wrapper>
  );
}

export default Login;
