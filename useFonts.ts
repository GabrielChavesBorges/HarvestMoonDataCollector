import * as Font from "expo-font";

export default async function useFonts() {
  await Font.loadAsync({
    'dotGothic': require('./assets/fonts/DotGothic16.ttf')
  });
}