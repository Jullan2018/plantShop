import * as React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from './components/Home/home';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

function HomeScreen({ navigation }) {
  return (
    <View style={home.container}>
      <ImageBackground style={home.image} source ={require('./assets/image/bg-image.jpg')}/>
      <View style={home.textContainer}>
      <Text style={home.welcome}>WELCOME</Text>
      <Text style={home.logo}>PlantShop</Text>
      <Text style={home.subheading}>Come and check out our stuff...</Text>
      </View>

        <TouchableOpacity  onPress={() => navigation.navigate('Shop')}> 
          <Text style = {home.button}>
              SHOP NOW
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Contact')}> 
          <Text style = {home.button}>
              Contact Us
          </Text>
        </TouchableOpacity>


    </View>
  );
}

function ShopScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Shop Screen</Text>
      <Button
        title="Back to Home..."
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact</Text>
      <Button
        title="Back to Home..."
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
    {
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
