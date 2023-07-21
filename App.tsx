import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Loading from './srs/screens/Loading';
import RootNavigator from './srs/navigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>

  );
}

export default App;
