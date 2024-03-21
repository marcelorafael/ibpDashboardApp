/* eslint-disable prettier/prettier */
import React from 'react';

import * as S from './styles';

export type VariantTypes = 'outline' | 'container' | 'text';
export type ColorstTypes = 'red' | 'white' | 'green';
export type IconLocale = 'left' | 'right';

export interface ButtonProps {
  title?: string;
  variant?: VariantTypes;
  fullWidth?: boolean;
  color?: ColorstTypes;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'outline',
  fullWidth = false,
  color = 'green',
  onClick,
}) => {
  return (
    <S.Wrapper
      onPress={onClick}
      variant={variant}
      fullWidth={fullWidth}
      color={color}>
      <S.TextButton color={color} style={{ transform: [{ translateX: -10 }] }}>
        {title}
      </S.TextButton>
    </S.Wrapper >
  );
};

export default Button;
