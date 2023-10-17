import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from '/components/home.js';
import maps from '/components/maps.js';
import orders from '/components/orders.js';
import account from '/components/account.js';
import search from '/components/search.js';
import profile from '/components/profile.js';
// import payment from '/components/payment.js';
// import receipt from '/components/receipt.js';
// import review from '/components/review.js';
// import menu from '/components/menu.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Maps"
          component={maps}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Orders"
          component={orders}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Account"
          component={account}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

