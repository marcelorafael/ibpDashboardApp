import React from "react";
import * as S from './styles';

export interface HomeProps {
    children?: JSX.Element;
    title?: string;
    name?: string;
}

const Home = ({ children, name, title }: HomeProps) => {
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <S.Title>{name}</S.Title>
            {children}
        </S.Wrapper>
    );
}

export default Home;