import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';
import Background from '~/components/Background';
import img from '~/assets/backgr.jpg';
import { signOut } from '~/store/modules/auth/actions';
import { Container, LogoutButton } from './styles';

function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={0}
      style={{ flex: 1, height: '100%' }}
      source={img}
    >
      <Background>
        <Container>
          <Text style={{ fontSize: 28, color: '#fff', fontWeight: 'bold' }}>Logged in !</Text>
          <LogoutButton onPress={() => dispatch(signOut())}>
            Logout
          </LogoutButton>
        </Container>
      </Background>
    </ImageBackground>
  );
}

export default Dashboard;
