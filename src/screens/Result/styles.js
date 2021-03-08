import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

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

export const CalculateButton = styled.TouchableOpacity`
  background-color: #e6005c;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 68px;
`;

export const Text = styled.Text`
  color: #f8f8f2;
`;

export const CalculateButtonText = styled(Text)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`;

export const Label = styled(Text)`
  font-weight: bold;
  font-size: 30px;

  margin-bottom: 20px;
`;

export const State = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 16px;
  color: #39ff14;
`;

export const Result = styled(Text)`
  font-size: 78px;
  font-weight: bold;
  margin: 0 0 20px 0;
`;

export const StateDescription = styled(Text)`
  font-size: 16px;
`;

export const RangeLabel = styled(Text)`
  color: #a3a6b5;
  font-size: 14px;
`;

export const Range = styled(Text)`
  font-size: 14px;
  margin-bottom: 20px;
`;
