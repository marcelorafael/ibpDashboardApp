import React from 'react';
import { View, Text } from 'react-native';
import * as S from './styles'

export interface InputProps{
  value?: string;
  placeholder?: string;
  onChangeText?: () => void;
}

const Input  = ({value, placeholder, onChangeText}:InputProps) => {
  return (
    <View>
      <S.Input
        value={value}
        placeholder={placeholder}
        placeholderTextColor='gray'
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default Input;
