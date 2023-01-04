import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {memo, useContext} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {svgIndex} from '../../assets';
import {color} from '../../theme';
import gameContext from '../../context/GameContext';

const defaultProps = {
  existWord: String,
  wrongWord: Array,
  onKeyPress: Function,
  correctWord: Array,
};
const CustomKeyboard = (props = defaultProps) => {
  const gameProps = useContext(gameContext);
  return (
    <>
      <View
        style={[
          styles.container,
          gameProps.containerStyle.keyboardContainerStyle,
        ]}>
        <View style={styles.keyLineContainer}>
          <TouchableOpacity
            onPress={() => props.onKeyPress('Q')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'Q'
                    ? color.pink
                    : props.wrongWord?.match(/Q/)
                    ? color.darkGray
                    : props.correctWord.includes('Q')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>Q</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('W')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'W'
                    ? color.pink
                    : props.wrongWord?.match(/W/)
                    ? color.darkGray
                    : props.correctWord.includes('W')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>W</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('E')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              gameProps.containerStyle.keyboardContentStyle,
              {
                backgroundColor:
                  props.existWord == 'E'
                    ? color.pink
                    : props.wrongWord?.match(/E/)
                    ? color.darkGray
                    : props.correctWord.includes('e')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>E</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('R')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'R'
                    ? color.pink
                    : props.wrongWord?.match(/R/)
                    ? color.darkGray
                    : props.correctWord.includes('R')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>R</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('T')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'T'
                    ? color.pink
                    : props.wrongWord?.match(/T/)
                    ? color.darkGray
                    : props.correctWord.includes('T')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>T</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('Y')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'Y'
                    ? color.pink
                    : props.wrongWord?.match(/Y/)
                    ? color.darkGray
                    : props.correctWord.includes('Y')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>Y</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('U')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'U'
                    ? color.pink
                    : props.wrongWord?.match(/U/)
                    ? color.darkGray
                    : props.correctWord.includes('U')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>U</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('I')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'I'
                    ? color.pink
                    : props.wrongWord?.match(/I/)
                    ? color.darkGray
                    : props.correctWord.includes('I')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>I</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('O')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'O'
                    ? color.pink
                    : props.wrongWord?.match(/O/)
                    ? color.darkGray
                    : props.correctWord.includes('O')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>O</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('P')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'P'
                    ? color.pink
                    : props.wrongWord?.match(/P/)
                    ? color.darkGray
                    : props.correctWord.includes('P')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>P</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keySecondLineContainer}>
          <TouchableOpacity
            onPress={() => props.onKeyPress('A')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'A'
                    ? color.pink
                    : props.wrongWord?.match(/A/)
                    ? color.darkGray
                    : props.correctWord.includes('A')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>A</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('S')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'S'
                    ? color.pink
                    : props.wrongWord?.match(/S/)
                    ? color.darkGray
                    : props.correctWord.includes('S')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('D')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'D'
                    ? color.pink
                    : props.wrongWord?.match(/D/)
                    ? color.darkGray
                    : props.correctWord.includes('D')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>D</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('F')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'F'
                    ? color.pink
                    : props.wrongWord?.match(/F/)
                    ? color.darkGray
                    : props.correctWord.includes('F')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('G')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'G'
                    ? color.pink
                    : props.wrongWord?.match(/G/)
                    ? color.darkGray
                    : props.correctWord.includes('G')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('H')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'H'
                    ? color.pink
                    : props.wrongWord?.match(/H/)
                    ? color.darkGray
                    : props.correctWord.includes('H')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>H</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('J')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'J'
                    ? color.pink
                    : props.wrongWord?.match(/J/)
                    ? color.darkGray
                    : props.correctWord.includes('J')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>J</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('K')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'K'
                    ? color.pink
                    : props.wrongWord?.match(/K/)
                    ? color.darkGray
                    : props.correctWord.includes('K')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>K</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('L')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'L'
                    ? color.pink
                    : props.wrongWord?.match(/L/)
                    ? color.darkGray
                    : props.correctWord.includes('L')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>L</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keySecondLineContainer}>
          <TouchableOpacity
            onPress={() => props.onKeyPress('ENTER')}
            activeOpacity={0.7}
            style={styles.enterButton}>
            <Text style={styles.textStyle}>ENTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('Z')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'Z'
                    ? color.pink
                    : props.wrongWord?.match(/Z/)
                    ? color.darkGray
                    : props.correctWord.includes('Z')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>Z</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('X')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'X'
                    ? color.pink
                    : props.wrongWord?.match(/X/)
                    ? color.darkGray
                    : props.correctWord.includes('X')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('C')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'C'
                    ? color.pink
                    : props.wrongWord?.match(/C/)
                    ? color.darkGray
                    : props.correctWord.includes('C')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('V')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'V'
                    ? color.pink
                    : props.wrongWord?.match(/V/)
                    ? color.darkGray
                    : props.correctWord.includes('V')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>V</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('B')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'B'
                    ? color.pink
                    : props.wrongWord?.match(/B/)
                    ? color.darkGray
                    : props.correctWord.includes('B')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>B</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('N')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'N'
                    ? color.pink
                    : props.wrongWord?.match(/N/)
                    ? color.darkGray
                    : props.correctWord.includes('N')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>N</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('M')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor:
                  props.existWord == 'M'
                    ? color.pink
                    : props.wrongWord?.match(/M/)
                    ? color.darkGray
                    : props.correctWord.includes('M')
                    ? color.lightGreen
                    : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('CLEAR')}
            activeOpacity={0.7}
            style={styles.backSpaceButton}>
            <svgIndex.delete />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default memo(CustomKeyboard);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
  },
  keyLineContainer: {
    flexDirection: 'row',
  },
  keySecondLineContainer: {
    flexDirection: 'row',
    marginTop: 7,
  },
  keyStyle: {
    backgroundColor: color.keyGreen,
    width: responsiveScreenWidth(8),
    height: responsiveScreenHeight(6),
    marginHorizontal: responsiveScreenWidth(0.8),
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 14,
    color: '#fff',
  },
  enterButton: {
    backgroundColor: color.keyGreen,
    width: responsiveScreenWidth(15),
    height: responsiveScreenHeight(6),
    marginHorizontal: responsiveScreenWidth(0.8),
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backSpaceButton: {
    backgroundColor: color.keyGreen,
    width: responsiveScreenWidth(12),
    height: responsiveScreenHeight(6),
    marginHorizontal: responsiveScreenWidth(0.8),
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
