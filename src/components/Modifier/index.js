import React from 'react';

import { Container, Icon } from './styles';

function Modifier({ type, onPress, style }) {
  return (
    <Container style={style} onPress={onPress}>
      <Icon name={type} />
    </Container>
  );
}

export default Modifier;
