/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import Input from '.';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <Input />
    </>
  ));
