import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './src/pages/Index';
import Feed from './src/pages/Feed';
import Contato from "./src/pages/Contato";

const Stack = createStackNavigator();

function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Index"
                screenOptions={{ gestureEnabled: false }}
            >
                <Stack.Screen
                    name="Index"
                    component={Index}
                    options={{ title: 'Index' }}
                />
                <Stack.Screen
                    name="Feed"
                    component={Feed}
                    initialParams={{ user: 'me' }}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Contato"
                    component={Contato}
                    initialParams={{ user: 'me' }}
                    options={{ title: 'Contato' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;