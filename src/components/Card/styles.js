import styled from 'styled-components/native';

export const Wrapper = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  width: ${({ full }) => (full ? '100%' : '49%')};
  align-items: center;
  background-color: #13183a;
  padding: 14px;
  border-radius: 3px;
`;
