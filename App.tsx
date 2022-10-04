import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import useCachedResources from './src/modules/asset-cache/useCachedResources';
import { RootNavigator } from './src/modules/navigation/RootNavigator';

export default function App() {
  const { isLoadingComplete, loadResourcesAndDataAsync } = useCachedResources();

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAndDataAsync}
        onFinish={() => {}}
        onError={console.warn}
      />
    );
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <RootNavigator />
      </>
    );
  }
}
