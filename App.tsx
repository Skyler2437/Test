import './global.css';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View className="flex-1 items-center justify-center bg-background p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Hello World!</CardTitle>
          <CardDescription className="text-center">
            Welcome to your Expo app with NativeWind and React Native Reusables
          </CardDescription>
        </CardHeader>
        <CardContent className="items-center gap-4">
          <Text variant="muted">You pressed the button {count} times</Text>
          <Button onPress={() => setCount((c) => c + 1)}>
            <Text>Press me</Text>
          </Button>
          <Button variant="outline" onPress={() => setCount(0)}>
            <Text>Reset</Text>
          </Button>
        </CardContent>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}
