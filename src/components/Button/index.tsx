import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import React, { memo } from 'react';
import styles from './styles';

type Props = {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  onTap?: () => void;
  text: string;
}

const Button: React.FC<Props> = ({
  onTap, text, containerStyle, textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={onTap}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
