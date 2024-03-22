import styled,{css} from 'styled-components/native';

export const Input = styled.TextInput`
    ${({theme}) => css`
        width: 100%;
        background-color: ${theme.colors.neutralL1};

        border-radius: 5px;
    `};
`;
