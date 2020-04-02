import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { signUpConfirmRequest } from '~/store/modules/auth/actions';
import Background from '~/components/Background';
import logo from '~/assets/logo.png';
import img from '~/assets/backgr.jpg';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Strong,
  Logo,
} from './styles';

export default function SignUpConfirm({ navigation }) {
  const dispatch = useDispatch();

  const [code, setCode] = useState('');
  const username = navigation.getParam('username', '');
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpConfirmRequest(username, code));
  }

  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={0}
      style={{ flex: 1, height: '100%' }}
      source={img}
    >
      <Background>
        <Container>
          <Logo resizeMode="contain" source={logo} />
          <Form>
            <FormInput
              icon="lock-outline"
              placeholder="Confirmation code"
              keyboardType="numeric" 
              maxLength={6}
              value={code}
              onChangeText={setCode}
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />
            <TouchableOpacity onPress={() => handleSubmit()}>
              <SubmitButton loading={loading} onPress={handleSubmit}>
                Confirmar
              </SubmitButton>
            </TouchableOpacity>
          </Form>
          <SignLink
            onPress={() => {
              Auth.resendSignUp(username).then(() =>
                Alert.alert('Confirmation code sent successfully')
              );
            }}
          >
            <SignLinkText>
              <Strong>Resend confirmation code</Strong>
            </SignLinkText>
          </SignLink>
          <SignLink onPress={() => navigation.navigate('SignIn', { username })}>
            <SignLinkText>
              <Strong>Cancel</Strong>
            </SignLinkText>
          </SignLink>
        </Container>
      </Background>
    </ImageBackground>
  );
}

SignUpConfirm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
