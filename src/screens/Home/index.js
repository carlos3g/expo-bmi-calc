import React from 'react';

import {
  Wrapper,
  CalculateButton,
  CalculateButtonText,
  Container,
} from './styles';

function HomeScreen() {
  return (
    <Wrapper>
      <Container></Container>

      <CalculateButton>
        <CalculateButtonText>Calculate your BMI</CalculateButtonText>
      </CalculateButton>
    </Wrapper>
  );
}

export default HomeScreen;
