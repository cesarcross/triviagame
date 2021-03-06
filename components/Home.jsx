import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { Container, Title, Description, StartButton } from './Home.styles';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Title>Welcome to Trivia Challenge</Title>
      <Description>
        You will be presented with 10 random True or False questions. Can you
        score 100%?
      </Description>
      <StartButton
        title='Start'
        onPress={() => navigation.navigate('Questions')}
      />
    </Container>
  );
};

export default Home;
