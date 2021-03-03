import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  background-color: #0a0f32;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const CalculateButton = styled.TouchableOpacity`
  background-color: #e6005c;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 75px;
`;

export const CalculateButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: #f8f8f2;
`;
