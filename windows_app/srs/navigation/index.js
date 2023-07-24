import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from '../screens/Loading';
import Landing from '../screens/Landing';
import Calculate from "../screens/Calculate";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    const [loading, setLoading] = useState(true)
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Cleanup the timer when the component unmounts or the dependency changes
        return () => clearTimeout(timer);
    })
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {
                loading ?
                    <RootStack.Screen name="App" component={Loading} />
                    :
                    <RootStack.Screen name="App" component={AppNavigator} />
            }
        </RootStack.Navigator>
    )
}

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Landing" component={Landing} />
            <AppStack.Screen name="Calculate" component={Calculate} />
        </AppStack.Navigator>
    )
}

export default RootNavigator