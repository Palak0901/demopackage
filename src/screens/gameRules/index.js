import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import style from './style';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, CustomStatusBar, Header } from '../../components';
import { color } from '../../theme';
import svgindex from '../../assets/svgindex';
import screenName from '../../navigation/screenName';
import GameContext from '../../context/GameContext';
import { get, doPostWithAuth } from '../../service/config/request';
import constant from '../../service/config/constant';

const GameRules = props => {
  const gameInterface = useContext(GameContext);
  const wordOne = ['W', 'E', 'A', 'R', 'Y'];
  const wordTwo = ['P', 'I', 'L', 'L', 'S'];
  const wordThree = ['V', 'A', 'G', 'U', 'E'];

  const getUserDetails = () => {
    get(`${constant.participation}?id=${16}`).then(res => {
      console.log('Get Data success', res);
    }).catch(e => {
      console.log('error', e);
    })
  }

  useEffect(() => {
    getUserDetails()
  }, [])
  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: gameInterface.containerStyle?.themeColor
            ? gameInterface.containerStyle?.themeColor
            : color.themeColor,
        },
        gameInterface.containerStyle.contentContainerStyle,
      ]}>
      <SafeAreaProvider>
        <CustomStatusBar />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.scrollViewContainer}>
          <Header
            leftIcon={svgindex.backArrow}
            onRightIcon={() =>
              props.navigation.navigate(screenName.leaderBoard)
            }
            rightText="Leader Board"
          />
          <View style={style.mainView}>
            <Text style={style.howToPlayText}>How To Play</Text>
            <Text style={style.triesText}>Guess the wordle in 6 tries.</Text>
            <View style={style.viewContainer}>
              <svgindex.nextArrow />
              <Text style={style.letterText}>
                Each guess must be a valid 5-letter word.
              </Text>
            </View>
            <View style={style.viewContainer}>
              <svgindex.nextArrow />
              <Text style={style.letterText}>
                The color of the tiles will change to{'\n'} show how close your
                guess was{'\n'} to the word.
              </Text>
            </View>
            <Text style={style.exampleText}>Example</Text>
            <View
              style={[
                style.gameView,
                {
                  backgroundColor: gameInterface.containerStyle?.themeColor
                    ? gameInterface.containerStyle?.themeColor
                    : color.themeColor,
                },
              ]}>
              <View style={{ marginTop: 20 }}>
                <FlatList
                  data={wordOne}
                  numColumns={5}
                  scrollEnabled={false}
                  contentContainerStyle={style.contentContainerStyle}
                  renderItem={({ item, index }) => (
                    <View
                      style={[
                        style.boxContainer,
                        {
                          backgroundColor:
                            index == 0 ? color.lightGreen : color.bagroundTheme,
                        },
                      ]}>
                      <Text
                        style={[
                          style.itemText,
                          {
                            backgroundColor:
                              index == 0
                                ? color.lightGreen
                                : color.bagroundTheme,
                          },
                        ]}>
                        {item}
                      </Text>
                    </View>
                  )}
                />
              </View>
              <Text style={style.textOne}>
                <Text style={style.wText}>W</Text> is the word and in the
                correct spot.
              </Text>
              <View>
                <FlatList
                  data={wordTwo}
                  numColumns={5}
                  scrollEnabled={false}
                  contentContainerStyle={style.contentContainerStyle}
                  renderItem={({ item, index }) => (
                    <View
                      style={[
                        style.boxContainer,
                        {
                          backgroundColor:
                            index == 1 ? color.tintYellow : color.bagroundTheme,
                        },
                      ]}>
                      <Text
                        style={[
                          style.itemText,
                          {
                            backgroundColor:
                              index == 1
                                ? color.tintYellow
                                : color.bagroundTheme,
                          },
                        ]}>
                        {item}
                      </Text>
                    </View>
                  )}
                />
              </View>
              <Text style={style.textOne}>
                <Text style={style.wText}>I</Text> is the word and in the wrong
                spot.
              </Text>
              <View>
                <FlatList
                  data={wordThree}
                  numColumns={5}
                  scrollEnabled={false}
                  contentContainerStyle={style.contentContainerStyle}
                  renderItem={({ item, index }) => (
                    <View
                      style={[
                        style.boxContainer,
                        {
                          backgroundColor:
                            index == 3 ? color.tintRed : color.bagroundTheme,
                        },
                      ]}>
                      <Text
                        style={[
                          style.itemText,
                          {
                            backgroundColor:
                              index == 3 ? color.tintRed : color.bagroundTheme,
                          },
                        ]}>
                        {item}
                      </Text>
                    </View>
                  )}
                />
                <Text style={style.textOne}>
                  <Text style={style.wText}>U</Text> is not in the word in any
                  spot.
                </Text>
              </View>
            </View>
            <Button
              name={'Next'}
              onPress={() => props.navigation.navigate(screenName.gameScreen)}
              buttonContainer={style.nextButton}
            />
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </View>
  );
};

export default GameRules;
