import React from 'react';
import { View, Text } from 'react-native';
import * as S from './styles'

export interface InputProps{
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: () => void;
}

const Input  = ({value, placeholder, secureTextEntry = false, onChangeText}:InputProps) => {
  return (
    <View>
      <S.Input
        value={value}
        placeholder={placeholder}
        placeholderTextColor='gray'
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export default Input;
