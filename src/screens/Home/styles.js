import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  background-color: #0a0f32;
  flex: 1;
`;

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px 20px 0 20px;
  margin-bottom: 20px;
`;

export const Section = styled.View`
  ${({ horizontal }) => horizontal && 'flex-direction: row;'}
`;

export const CalculateButton = styled.TouchableOpacity`
  background-color: #e6005c;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 75px;
`;

export const CalculateButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: #f8f8f2;
`;
