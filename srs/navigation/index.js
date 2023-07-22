import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loading from '../screens/Loading';
import Landing from '../screens/Landing';
import CalculateScreen from "../screens/CalculateScreen";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    const [loading, setLoading] = useState(true)

    // return (
    //     <RootStack.Navigator screenOptions={{ headerShown: false }}>
    //         <RootStack.Screen name="Landing" component={Landing} />
    //     </RootStack.Navigator>
    // )

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Cleanup the timer when the component unmounts or the dependency changes
        return () => clearTimeout(timer);
    })

    if (loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Landing" component={Landing} />
                <RootStack.Screen name="Calculate" component={CalculateScreen} />
            </RootStack.Navigator>
        )
    }
}

export default RootNavigator