import styled from 'styled-components/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;

  align-items: center;
  justify-content: center;
  background-color: #222747;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  size: 50,
  color: '#A3A6B5',
})``;
