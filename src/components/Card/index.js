import React from 'react';

import { Wrapper, Container } from './styles';

function Card(props) {
  const { full, children, style, onPress } = props;

  return (
    <Wrapper onPress={onPress}>
      <Container style={style} full={full}>
        {children}
      </Container>
    </Wrapper>
  );
}

export default Card;
