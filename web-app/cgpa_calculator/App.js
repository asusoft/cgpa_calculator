import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Loading from './srs/screens/Loading';
import Landing from './srs/screens/Landing';
import { View } from 'react-native';

export default function App() {

  const [loading, setLoading] = useState(true)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup the timer when the component unmounts or the dependency changes
    return () => clearTimeout(timer);
  })

  if (loading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    )
  } else {
    return (

      <Landing />


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
