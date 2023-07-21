import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import Loading from './srs/screens/Loading';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Loading />
  );
}

export default App;
