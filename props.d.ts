import { ColorValue, ViewStyle } from 'react-native';

export interface WordGameProps {
  userToken: string;
  options?: optionTypes;
  containerStyle?: containerStyle | undefined;
  onStart?: () => void;
  onComplete?: () => void;
}

interface optionTypes {
  isReplayAllowed: () => void;
  gameId: Number;
  gameTime: number,
}

interface containerStyle {
  themeColor: ColorValue,
  contentContainerStyle: ViewStyle | undefined,
  keyboardContainerStyle: ViewStyle | keyboardKeysColor | undefined,
}

interface keyboardKeysColor {
  defaultColor: ColorValue,
  correctPlaceColor: ColorValue
  wrongPlaceColor: ColorValue
  notExistColor: containerStyle
}
