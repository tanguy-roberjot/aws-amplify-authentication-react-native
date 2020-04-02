import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.textColor
    ? props.textColor
    : 'rgba(255, 255, 255, 0.8)',
}))`
  flex: 1;
  font-size: ${props => (props.fontSize ? props.fontSize : 15)};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 10)};
  color: ${props =>
    props.textColor ? props.textColor : 'rgba(255,255,255,1)'};
`;
