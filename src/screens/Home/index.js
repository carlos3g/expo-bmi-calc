import React, { useState } from 'react';

import { Card, Modifier } from '@components/';

import { useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  Container,
  Section,
  Label,
  GenderMaleIcon,
  GenderFemaleIcon,
  H1,
  H6,
  Range,
  ModifiersContainer,
  CalculateButton,
  CalculateButtonText,
} from './styles';

function HomeScreen() {
  const [gender, setGender] = useState(0); // {0: "Male", 1: "Female"}
  const [height, setHeight] = useState(100);
  const [weight, setWeight] = useState(50);
  const [age, setAge] = useState(10);

  const { navigate } = useNavigation();

  const handleAddModifier = (value, func) => {
    func(value + 1);
  };

  const handleMinusModifier = (value, func) => {
    func(value - 1);
  };

  return (
    <Wrapper>
      <Container>
        <Section horizontal>
          <Card onPress={() => setGender(0)}>
            <GenderMaleIcon focus={gender == 0} />
            <Label focus={gender == 0}>Male</Label>
          </Card>

          <Card onPress={() => setGender(1)}>
            <GenderFemaleIcon focus={gender} />
            <Label focus={gender}>Female</Label>
          </Card>
        </Section>

        <Section>
          <Card full>
            <Label>Height</Label>
            <H1>
              {height}
              <H6>cm</H6>
            </H1>
            <Range
              onValueChange={(value) => setHeight(value)}
              step={1}
              minimumValue={100}
              maximumValue={300}
            />
          </Card>
        </Section>

        <Section horizontal>
          <Card>
            <Label>Weight</Label>
            <H1>{weight}</H1>
            <ModifiersContainer>
              <Modifier
                type="plus"
                onPress={() => handleAddModifier(weight, setWeight)}
              />
              <Modifier
                type="minus"
                onPress={() => handleMinusModifier(weight, setWeight)}
              />
            </ModifiersContainer>
          </Card>

          <Card>
            <Label>Age</Label>
            <H1>{age}</H1>
            <ModifiersContainer>
              <Modifier
                type="plus"
                onPress={() => handleAddModifier(age, setAge)}
              />
              <Modifier
                type="minus"
                onPress={() => handleMinusModifier(age, setAge)}
              />
            </ModifiersContainer>
          </Card>
        </Section>
      </Container>

      <CalculateButton
        onPress={() => {
          navigate('Result', { gender, height, weight, age });
        }}
      >
        <CalculateButtonText>Calculate your BMI</CalculateButtonText>
      </CalculateButton>
    </Wrapper>
  );
}

export default HomeScreen;
