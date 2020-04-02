import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { Alert, ImageBackground, TouchableOpacity } from 'react-native';
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

export default function ConfirmForgotPassword({ navigation }) {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const username = navigation.getParam('username', '');
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    if (!code || !newPassword || !newPasswordConfirm) {
      Alert.alert(
        'Validation failed',
        'All the fields are required'
      );
    } else if (newPassword !== newPasswordConfirm) {
      Alert.alert('Validation failed', 'Passwords are different');
    } else {
      setLoading(true);
      Auth.forgotPasswordSubmit(username, code, newPassword)
        .then(() => {
          Alert.alert('Success', 'Password changed successfully. You can now sign in with your new password.');
          setLoading(false);
          navigation.navigate('SignIn', { username });
        })
        .catch(() => {
          setLoading(false);
          Alert.alert('Error', `Error changing your password`);
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
              icon="lock-outline"
              placeholder="Confirmation code"
              maxLength={6}
              keyboardType="numeric" 
              value={code}
              onChangeText={setCode}
              secureTextEntry
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <FormInput
              icon="lock-outline"
              placeholder="New Password"
              secureTextEntry
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordConfirmRef.current.focus()}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <FormInput
              icon="lock-outline"
              placeholder="Confirm you new Password"
              secureTextEntry
              ref={passwordConfirmRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={newPasswordConfirm}
              onChangeText={setNewPasswordConfirm}
            />
            <TouchableOpacity onPress={() => handleSubmit()}>
              <SubmitButton loading={loading} onPress={handleSubmit}>
                Change my password
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

ConfirmForgotPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
