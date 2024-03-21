import styled, {css} from 'styled-components/native';

import {ButtonProps} from '.';

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  container: (color: string) => css`
    background-color: ${color};
  `,

  outline: (color: string) => css`
    border: 1px solid ${color};
  `,

  text: (color: string) => css`
    background-color: ${color};
  `,
};

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonProps>`
  ${({theme, variant, fullWidth, color}) => css`
    height: 50px;
    border-radius: 8px;

    min-width: 50px;

    padding: 5px;

    align-items: center;
    justify-content: center;

    ${variant === 'container' &&
    wrapperModifiers.container(
      color === 'green'
        ? theme.colors.primary
        : color === 'red'
        ? theme.colors.error
        : theme.colors.neutralL4,
    )}

    ${variant === 'outline' &&
    wrapperModifiers.outline(
      color === 'green'
        ? theme.colors.primary
        : color === 'red'
        ? theme.colors.error
        : theme.colors.neutralL4,
    )}

    ${variant === 'text' && wrapperModifiers.text('transparent')}

    ${!!fullWidth && wrapperModifiers.fullWidth()}
  `}
`;

export const TextButton = styled.Text<ButtonProps>`
  ${({theme, color}) => css`
    color: ${color === 'green'
      ? theme.colors.primary
      : color === 'red'
      ? theme.colors.error
      : theme.colors.neutralL4};

    font-size: ${theme?.fonts?.info};

    font-weight: bold;
  `}
`;
