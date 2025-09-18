import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importação das sessões

import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Cards from './screens/cards';
import Detalhes from './screens/detalhes';

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Cards" component={Cards} />
                <Stack.Screen name="Detalhes" component={Detalhes} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}