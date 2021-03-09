import styled from 'styled-components/native';

import { colors } from '@styles/';

import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const SectionHorizontalStyles = `\
flex-direction: row;
justify-content: space-between
`;

export const Wrapper = styled(SafeAreaView)`
  background-color: ${colors.primaryDark};
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
    color: focus ? colors.active : colors.inactive,
  })
)`
  margin-bottom: 20px;
`;

export const GenderFemaleIcon = styled(MaterialCommunityIcons).attrs(
  ({ focus }) => ({
    name: 'gender-female',
    size: 80,
    color: focus ? colors.active : colors.inactive,
  })
)`
  margin-bottom: 20px;
`;

export const CalculateButton = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 68px;
`;

export const CalculateButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: ${colors.white};
`;

export const Label = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  color: ${({ focus }) => (focus ? colors.active : colors.inactive)};
`;

export const Range = styled(Slider).attrs({
  thumbTintColor: colors.secondary,
  minimumTrackTintColor: colors.white,
  maximumTrackTintColor: colors.gray,
})`
  width: 100%;
  margin: 20px 0 20px 0;
`;

export const H1 = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: ${colors.white};
`;

export const H6 = styled.Text`
  font-size: 16px;
  color: ${colors.gray};
`;

export const ModifiersContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
`;
