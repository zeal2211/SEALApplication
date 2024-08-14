import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home/.';

const App: React.FC = () => {
  const cameraRef = useRef<CameraComponent>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cameraRef.current) {
        cameraRef.current.takePicture();
      }
    }, 10 * 1000); // Change 10 to the number of seconds for the interval

    return () => clearInterval(interval);
  }, []);

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    </NavigationContainer>
  );
};

export default App;
