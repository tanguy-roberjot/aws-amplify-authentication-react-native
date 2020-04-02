import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

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
  TouchableKeyboardDismiss,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const [username, setUsername] = useState(navigation.getParam('username', ''));
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);
  const needConfirm = useSelector(state => state.auth.needConfirm);

  useEffect(() => {
    if (needConfirm) {
      navigation.navigate('SignUpConfirm', {
        username,
      });
    }
  }, [needConfirm]);

  async function handleSubmit() {
    if (!username || !password || username === '' || password === '') {
      Alert.alert(
        'Fields are missing',
        'Please fill all the required fields'
      );
    } else {
      dispatch(signInRequest(username, password));
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
        <TouchableKeyboardDismiss onPress={() => Keyboard.dismiss()}>
          <Container>
            <Logo source={logo} resizeMode="contain" />
            <Form>
              <FormInput
                icon="mail-outline"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={username}
                onChangeText={setUsername}
              />
              <FormInput
                icon="lock-outline"
                placeholder="Password"
                secureTextEntry
                ref={passwordRef}
                returnKeyType="send"
                onSubmitEditing={() => handleSubmit()}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => handleSubmit()}>
                <SubmitButton loading={loading} onPress={() => handleSubmit()}>
                  Sign In
                </SubmitButton>
              </TouchableOpacity>
            </Form>
            <SignLink onPress={() => navigation.navigate('SignUp')}>
              <SignLinkText>
                <Strong>Sign up</Strong>
              </SignLinkText>
            </SignLink>
            <SignLink
              onPress={() =>
                navigation.navigate('ForgotPassword', { username })
              }
            >
              <SignLinkText>
                <Strong>Forgot my password</Strong>
              </SignLinkText>
            </SignLink>
          </Container>
        </TouchableKeyboardDismiss>
      </Background>
    </ImageBackground>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
