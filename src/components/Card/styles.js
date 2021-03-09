import styled from 'styled-components/native';

import { colors } from '@styles/';

export const Wrapper = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  width: ${({ full }) => (full ? '100%' : '49%')};
  align-items: center;
  background-color: ${colors.primary};
  padding: 14px;
  border-radius: 3px;
`;
