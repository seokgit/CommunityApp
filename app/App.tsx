import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import { AuthProvider } from './context/AuthContext.tsx';
import AppNavigator from './AppNavigator.tsx';

function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;

