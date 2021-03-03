import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  background-color: #282a36;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  color: #f8f8f2;
  font-size: 18px;
`;
