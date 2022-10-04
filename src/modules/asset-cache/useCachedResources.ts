import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import { Asset } from 'expo-asset';
import { Image } from 'react-native';

const cacheImages = (images: any[]) => {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
function cacheFonts(fonts: { [x: string]: any }[]) {
  return fonts.map((font: any) => Font.loadAsync(font));
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  async function loadResourcesAndDataAsync() {
    try {
      SplashScreen.preventAutoHideAsync();

      // TODO: change splash screen image
      const imageAssets = cacheImages([require('../../assets/splash.png')]);

      // Load fonts
      const fontAssets = cacheFonts([
        {
          RubikSemibold:
            'https://res.cloudinary.com/dfit3qd2z/raw/upload/v1664886440/Rubik-SemiBold_tkgggi.ttf',
          RubikMedium:
            'https://res.cloudinary.com/dfit3qd2z/raw/upload/v1664886440/Rubik-Medium_gc3umq.ttf',
          RubikRegular:
            'https://res.cloudinary.com/dfit3qd2z/raw/upload/v1664886440/Rubik-Regular_srzqoy.ttf',
          PoppinsMedium:
            'https://res.cloudinary.com/dfit3qd2z/raw/upload/v1664886513/Poppins-Medium_alngij.ttf',
        },
      ]);

      await Promise.all([...imageAssets, ...fontAssets]);
    } catch (e) {
      console.warn('ww: ', e);
    } finally {
      setLoadingComplete(true);
    }
  }

  return { isLoadingComplete, loadResourcesAndDataAsync };
}
