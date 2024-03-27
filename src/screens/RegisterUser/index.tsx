import React from 'react';
import { View } from 'react-native';
import Input from '../../components/@core/Input';
import Button from '../../components/@core/Button';

export interface RegisterUserProps {
    valueName?: string;
    valueEmail?: string;
    valueSenha?: string;
    isLoading?: boolean;
    onChangeTextName?: (text: string) => void;
    onChangeTextEmail?: (text: string) => void;
    onChangeTextSenha?: (text: string) => void;
    onClick?: () => void;
}

const RegisterUser = ({
    valueName,
    valueEmail,
    valueSenha,
    isLoading,
    onChangeTextName,
    onChangeTextEmail,
    onChangeTextSenha,
    onClick,
}: RegisterUserProps) => {
    return (
        <View style={{ flex: 1 }}>
            <Input
                value={valueName}
                placeholder='Nome'
                onChangeText={onChangeTextName}
            />
            <Input
                value={valueEmail}
                placeholder='Email'
                onChangeText={onChangeTextEmail}
            />
            <Input
                value={valueSenha}
                placeholder='Senha'
                secureTextEntry
                onChangeText={onChangeTextSenha}
            />
            <Button
                title='Cadastrar'
                variant='container'
                loading={isLoading}
                onClick={onClick}
            />
        </View>
    );
}

export default RegisterUser;