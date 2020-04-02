import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { Alert, ImageBackground, TouchableOpacity } from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import img from '~/assets/backgr.jpg';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Logo,
  Strong,
} from './styles';

export default function ForgotPassword({ navigation }) {
  const [username, setUsername] = useState(navigation.getParam('username', ''));
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!username) {
      Alert.alert('Validation failed', 'Please fill you email.');
    } else {
      setLoading(true);
      Auth.forgotPassword(username)
        .then(() => {
          setLoading(false);
          Alert.alert(
            'Success',
            'If there is an account with this email, we will send you an email with a confirmation code to change your password.'
          );
          navigation.navigate('ConfirmForgotPassword', { username });
        })
        .catch(err => {
          setLoading(false);
          Alert.alert('Erro', err.message);
        });
    }
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
              icon="mail-outline"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              value={username}
              onChangeText={setUsername}
            />
            <TouchableOpacity onPress={() => handleSubmit()}>
              <SubmitButton loading={loading} onPress={() => handleSubmit()}>
                Send
              </SubmitButton>
            </TouchableOpacity>
          </Form>
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

ForgotPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
