import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { Container } from './Home.styles';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Text>Welcome to Trivia Challenge</Text>
      <Text style={{ color: '#fff' }}>
        You will be presented with 10 random True or False questions. Can you
        score 100%?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Questions')}>
        <Text>Start</Text>
        {/* <Button>Get Started</Button> */}
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
