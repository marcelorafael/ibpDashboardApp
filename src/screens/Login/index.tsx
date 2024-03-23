import React from 'react';
import { View, Text, Image } from 'react-native';
import * as S from './styles'
import Input from '../../components/@core/Input';
import Button from '../../components/@core/Button';

const image = require('./logo2.png');


export interface LoginProps {
  valueEmail?: string;
  valuePasswr?: string;
  onChangeTextEmail?: () => void;
  onChangeTextPasswr?: () => void;
  onClick?: () => void;
}

const Login = ({
  valueEmail,
  valuePasswr,
  onChangeTextEmail,
  onChangeTextPasswr,
  onClick,
}: LoginProps) => {
  return (
    <S.Wrapper>
      <S.Head>
        <S.Image source={image} />
        {/* <S.Text>Igreja Batista da Pedreira</S.Text> */}
      </S.Head>
      <S.CenterView>
        <Input
          value={valueEmail}
          placeholder='email'
          onChangeText={onChangeTextEmail}
        />
        <Input
          value={valuePasswr}
          placeholder='******'
          onChangeText={onChangeTextPasswr}
        />
        <Button
          title='Acessar'
          variant='container'
          onClick={onClick}
        />
      </S.CenterView>
    </S.Wrapper>
  );
}

export default Login;
