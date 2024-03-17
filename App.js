import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from './Views/IntroScreen';
import MainScreen from './Views/MainScreen';
import LeadershipPage from './Views/LeadershipPage';
import WhatWeDo from './Views/WhatWeDo';

const Stack = createStackNavigator();

const Intro = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  return (
    <View style={styles.container}>
      {isLoaded ? <LeadershipPage /> : <IntroScreen />}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LeadershipPage" component={LeadershipPage} />
        <Stack.Screen name="WhatWeDo" component={WhatWeDo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
