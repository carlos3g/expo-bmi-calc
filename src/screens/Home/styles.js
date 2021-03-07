import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Slider from '@react-native-community/slider';

const SectionHorizontalStyles = `\
flex-direction: row;
justify-content: space-between
`;

export const Wrapper = styled(SafeAreaView)`
  background-color: #0a0f33;
  flex: 1;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})`
  flex: 1;
`;

export const Section = styled.View`
  margin-bottom: 20px;
  ${({ horizontal }) => horizontal && SectionHorizontalStyles}
`;

export const GenderMaleIcon = styled(MaterialCommunityIcons).attrs(
  ({ focus }) => ({
    name: 'gender-male',
    size: 80,
    color: focus ? '#f8f8f2' : '#A3A6B5',
  })
)`
  margin-bottom: 20px;
`;

export const GenderFemaleIcon = styled(MaterialCommunityIcons).attrs(
  ({ focus }) => ({
    name: 'gender-female',
    size: 80,
    color: focus ? '#f8f8f2' : '#A3A6B5',
  })
)`
  margin-bottom: 20px;
`;

export const CalculateButton = styled.TouchableOpacity`
  background-color: #e6005c;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 68px;
`;

export const CalculateButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: #f8f8f2;
`;

export const Label = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  color: ${({ focus }) => (focus ? '#f8f8f2' : '#A3A6B5')};
`;

export const Range = styled(Slider).attrs({
  thumbTintColor: '#e6005c',
  minimumTrackTintColor: '#f8f8f2',
  maximumTrackTintColor: '#a3a6b5',
})`
  width: 100%;
  margin: 20px 0 20px 0;
`;

export const H1 = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: #f8f8f2;
`;

export const H6 = styled.Text`
  font-size: 16px;
  color: #a3a6b5;
`;

export const ModifiersContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
`;
