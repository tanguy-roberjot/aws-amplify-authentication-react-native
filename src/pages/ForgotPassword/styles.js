import styled from 'styled-components/native';
import { Platform, Image } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Logo = styled(Image)`
  width: 100%;
  height: 200px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Strong = styled.Text`
  font-weight: normal;
`;

export const Separator = styled.View`
  border: solid rgba(255, 255, 255, 0.2) 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
