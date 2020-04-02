import styled from 'styled-components/native';
import { Platform, Image } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: 'padding',
  keyboardVerticalOffset: 0,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 5%;
`;

export const Logo = styled(Image)`
  width: 100%;
  height: 200px;
`;

export const Form = styled.View`
  align-self: stretch;
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

export const TouchableKeyboardDismiss = styled.TouchableWithoutFeedback``;
