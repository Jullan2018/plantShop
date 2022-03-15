import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,TextInput,Image, FlatList } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from './components/Home/home';
import shop from './components/Shop/shop';
import contact from './components/contact/contact';
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
const PRODUCTS = [
  {
    id: 1,
    name: 'Monster Deliciosa',
    image:require("./assets/image/product-1.jpg"),
    price:65.00,
  },
  {
    id: 2,
    name: 'Golden Pothos',
    image:require("./assets/image/product-2.jpg"),
    price:35.00,
  },
  {
    id: 3,
    name: 'Wide range of Fittonia',
    image:require("./assets/image/product-3.jpg"),
    price:15.00,
  },
  {
    id: 4,
    name: 'Watermelon Peperomia',
    image:require("./assets/image/product-4.jpg"),
    price:15.00,
  },
  {
    id: 5,
    name: 'Bunch of Roses',
    image:require("./assets/image/product-5.jpg"),
    price:25.00,
  },
]
export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find((product) => (product.id == id));
}
export function Product({name, price, image}) {
  return (
  <TouchableOpacity style={shop.card}>
  <Image
    style={shop.thumb}
    source={image} />
  <View style={shop.infoContainer}>
    <Text style={shop.name}>{name}</Text>
    <Text style={shop.price}>$ {price} NZD</Text>
  </View>
  </TouchableOpacity>
  )
}
export function ProductsList ({navigation}) {
  function renderProduct({item: product}) {
      return (
        <Product {...product} 
        onPress={() => {
          navigation.navigate('ProductDetails', {
            productId: product.id,
          });
        }}
        />
      );
    }
  
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      setProducts(getProducts());
    });
  
    return (
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
    );
  }

function ShopScreen({ navigation, item: product}) {
  return (
    <View style={shop.container}>
    <ProductsList/>
    <Button
        title="Back to Home..."
        onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View style={contact.container}>
    <ImageBackground style={contact.image} source ={require('./assets/image/contact-bg.jpg')}/>
    <View style={contact.content}>
      <Text style={contact.heading}>CONTACT US</Text>
      <View style={contact.form}>
        <TextInput style={contact.email}
          placeholder="Enter your e-mail"/>
        <TextInput style={contact.message}
          placeholder="Enter your message..."/>
           <TouchableOpacity  onPress={() => console.log("Thanks")}> 
          <Text style = {contact.button}>
              SUBMIT
          </Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
       <Text style = {contact.button}>
              Return to Home
          </Text>
        </TouchableOpacity>
      </View>
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
