import styled, {css} from "styled-components/native";

export const Wrapper = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.backgroundDefault};

        padding: 10px
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.secondaryD2};
        font-weight: bold;

        font-size: ${theme.size.h2};
    `}
`;