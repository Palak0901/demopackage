import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { memo, useContext } from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { svgIndex } from '../../assets';
import { color } from '../../theme';
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
          gameProps?.containerStyle?.keyboardContainerStyle,
        ]}>
        <View style={styles.keyLineContainer}>
          <TouchableOpacity
            onPress={() => props.onKeyPress('Q')}
            activeOpacity={0.7}
            style={[
              styles.keyStyle,
              {
                backgroundColor: props.existWord?.match(/Q/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/Q/)
                    ? color.notInSpot
                    : props.correctWord.includes('Q')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/W/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/W/)
                    ? color.notInSpot
                    : props.correctWord.includes('W')
                      ? color.correctPlace
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
              {
                backgroundColor: props.existWord?.match(/E/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/E/)
                    ? color.notInSpot
                    : props.correctWord.includes('E')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/R/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/R/)
                    ? color.notInSpot
                    : props.correctWord.includes('R')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/T/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/T/)
                    ? color.notInSpot
                    : props.correctWord.includes('T')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/Y/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/Y/)
                    ? color.notInSpot
                    : props.correctWord.includes('Y')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/U/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/U/)
                    ? color.notInSpot
                    : props.correctWord.includes('U')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/I/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/I/)
                    ? color.notInSpot
                    : props.correctWord.includes('I')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/O/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/O/)
                    ? color.notInSpot
                    : props.correctWord.includes('O')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/P/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/P/)
                    ? color.notInSpot
                    : props.correctWord.includes('P')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/A/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/A/)
                    ? color.notInSpot
                    : props.correctWord.includes('A')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/S/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/S/)
                    ? color.notInSpot
                    : props.correctWord.includes('S')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/D/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/D/)
                    ? color.notInSpot
                    : props.correctWord.includes('D')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/F/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/F/)
                    ? color.notInSpot
                    : props.correctWord.includes('F')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/G/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/G/)
                    ? color.notInSpot
                    : props.correctWord.includes('G')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/H/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/H/)
                    ? color.notInSpot
                    : props.correctWord.includes('H')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/J/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/J/)
                    ? color.notInSpot
                    : props.correctWord.includes('J')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/K/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/K/)
                    ? color.notInSpot
                    : props.correctWord.includes('K')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/L/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/L/)
                    ? color.notInSpot
                    : props.correctWord.includes('L')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/Z/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/Z/)
                    ? color.notInSpot
                    : props.correctWord.includes('Z')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/X/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/X/)
                    ? color.notInSpot
                    : props.correctWord.includes('X')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/C/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/C/)
                    ? color.notInSpot
                    : props.correctWord.includes('C')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/V/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/V/)
                    ? color.notInSpot
                    : props.correctWord.includes('V')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/B/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/B/)
                    ? color.notInSpot
                    : props.correctWord.includes('B')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/N/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/N/)
                    ? color.notInSpot
                    : props.correctWord.includes('N')
                      ? color.correctPlace
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
                backgroundColor: props.existWord?.match(/M/)
                  ? color.wrongSpot
                  : props.wrongWord?.match(/M/)
                    ? color.notInSpot
                    : props.correctWord.includes('M')
                      ? color.correctPlace
                      : color.keyGreen,
              },
            ]}>
            <Text style={styles.textStyle}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.onKeyPress('CLEAR')}
            activeOpacity={0.7}
            style={styles.backSpaceButton}>
            <svgIndex.delete fill={color.white} />
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
