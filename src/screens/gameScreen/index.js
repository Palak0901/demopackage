import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { svgIndex } from '../../assets';
import {
  CustomKeyboard,
  CustomStatusBar,
  Header,
  UnlockGame,
} from '../../components';
import { color } from '../../theme';
import styles from './style';
import screenName from '../../navigation/screenName';
import BackgroundTimer from 'react-native-background-timer';
import gameContext from '../../context/GameContext';
import { ScrollView } from 'react-native-gesture-handler';
import { doPostWithAuth } from '../../service/config/request';
import constant from '../../service/config/constant';
import params from '../../service/config/params';
const GameScreen = () => {
  const gameInterface = useContext(gameContext);
  const navigation = useNavigation();
  const [exist, setExist] = useState('E');
  const [wrongWord, setWrongWord] = useState('FRM');
  const [correctWord, setCorrectWord] = useState([]);
  const inputRef = useRef([]);
  const [completeGameModal, setCompleteGameModal] = useState(false);
  const [rightWord, setRightWord] = useState('WATER');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [words, setWord] = useState([
    { word: '', color: '', disable: false },
    { word: '', color: '', disable: false },
    { word: '', color: '', disable: false },
    { word: '', color: '', disable: false },
    { word: '', color: '', disable: false },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
    { word: '', color: '', disable: true },
  ]);
  const [lastIndex, setLastIndex] = useState(4);
  const [gameTime, setGameTime] = useState(120);
  const [gameFinishedByTimeOut, setGameFinishedByTimeOut] = useState(true);
  const [totalPlayGames, setTotalPlayGames] = useState(10);
  const [limitModal, setLimitModal] = useState(false);
  const [gameLevel, setGameLevel] = useState(1)

  useEffect(() => {
    inputRef?.current[0]?.focus();
    if (totalPlayGames % 10 == 0) {
      setLimitModal(true);
    }
  }, []);
  const onEnterKey = () => {
    const rightWordArray = rightWord.split('');
    words
      .slice(selectedIndex - 4, selectedIndex + 1, selectedIndex)
      .map((w, index) => {
        if (!w.disable) {
          const addIndex = selectedIndex + index - 4;
          if (rightWordArray[index] === w.word) {
            let temp = correctWord;
            temp.push(w.word);
            setCorrectWord(temp);

            const addIndex = selectedIndex + index - 4;
            words[addIndex].color = color.lightGreen;
          } else if (rightWord.includes(w.word)) {
            words[addIndex].color = color.pink;
          } else {
            words[addIndex].color = color.darkGray;
          }
        }
      });
    let gameComplete = words
      .slice(selectedIndex - 4, selectedIndex + 1, selectedIndex)
      .filter(item => item.color == color.lightGreen);
    if (gameComplete.length != 5) {
      words.map((item, index) => {
        if (index >= selectedIndex + 1 && index <= selectedIndex + 5) {
          words[index].disable = false;
        } else {
          words[index].disable = true;
        }
      });
    }
    setWord([...words]);
    setTimeout(() => {
      inputRef.current[selectedIndex + 1]?.focus();
      setSelectedIndex(selectedIndex + 1);
    }, 500);

    if (gameComplete.length == 5) {
      setCompleteGameModal(true);
      navigation.navigate(screenName.successScreen);
      setGameFinishedByTimeOut(false);
    }
    if (lastIndex == words.length - 1) {
      setCompleteGameModal(true);
      navigation.navigate(screenName.lossScreen);
      setGameFinishedByTimeOut(false);
    }
  };
  const onKeyPress = key => {
    if (key == 'CLEAR') {
      if (!words[selectedIndex]?.disable && selectedIndex > -1) {
        setSelectedIndex(selectedIndex - 1);
        words[selectedIndex].word = '';
        setWord([...words]);
        inputRef.current[selectedIndex - 1]?.focus();
      } else if (selectedIndex < 0) {
        inputRef?.current[0]?.focus();
        setSelectedIndex(0);
      }
    } else if (key == 'ENTER') {
      if (selectedIndex == lastIndex) {
        setLastIndex(lastIndex + 5);
        onEnterKey();
      }
    } else {
      if (!words[selectedIndex]?.disable) {
        words[selectedIndex].word = key;
        setWord([...words]);
      }
      if (selectedIndex !== words.length - 1) {
        if (!words[selectedIndex + 1]?.disable) {
          inputRef.current[selectedIndex + 1]?.focus();
          setSelectedIndex(selectedIndex + 1);
        }
      }
    }
  };

  useEffect(() => {
    let Timer = BackgroundTimer.setTimeout(() => {
      if (gameFinishedByTimeOut && totalPlayGames % 10 != 0) {
        if (gameTime.valueOf(0)) {
          setGameTime(gameTime - 1);
        } else {
          setTotalPlayGames(totalPlayGames + 1);
          alert('Game Over');
        }
      } else {
        console.log('Game Finished in ::', gameTime);
      }
    }, 1000);

    return () => {
      BackgroundTimer.clearTimeout(Timer);
    };
  }, [gameTime]);

  function TimerCountdown(e) {
    const m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, '0'),
      s = Math.floor(e % 60)
        .toString()
        .padStart(2, '0');

    return m + ':' + s;
  }

  useEffect(() => {
    playGame()
  }, [])


  const playGame = () => {
    doPostWithAuth(`${constant.game}?id=${2}`, '', 'token').then(res => {
      console.log('Get Game Details success');
      findGame(res.data.level)
    }).catch(e => {
      console.log('Get Game details error');
    })
  }

  const findGame = (gameLevel) => {
    let formData = new FormData()
    formData.append(params.GameType, 'WordGame')
    formData.append(params.Level, gameLevel)
    doPostWithAuth(constant.find, formData, 'token').then(res => {
      console.log('Get Game Details success');
    }).catch(e => {
      console.log('Get Game details error');
    })
  }

  const playNextGame = () => {
    let formData = new FormData()
    formData.append(params.GameType, 'WordGame')
    formData.append(params.Level, gameLevel)
    doPostWithAuth(constant.find, formData, 'token').then(res => {
      console.log('Get Game Details success');
    }).catch(e => {
      console.log('Get Game details error');
    })
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: gameInterface.containerStyle?.themeColor
            ? gameInterface.containerStyle?.themeColor
            : color.themeColor,
        },
        gameInterface.containerStyle.contentContainerStyle,
      ]}>
      <CustomStatusBar />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header
          onPress={() => navigation.goBack()}
          leftIcon={svgIndex.backArrow}
        />
        <UnlockGame
          visible={limitModal}
          onCancel={() => setLimitModal(false)}
          onOkPress={() => {
            setLimitModal(false);
            navigation.navigate(screenName.unlockScreen);
          }}
        />
        <View style={[styles.innerContainer]}>
          {!completeGameModal && gameTime.toString() != 0 && (
            <View>
              <View style={styles.hintView}>
                <TouchableOpacity
                  style={styles.hintButton}
                  onPress={() => setShowHint(!showHint)}>
                  <Text style={styles.hintText}>Hint</Text>
                </TouchableOpacity>
              </View>
              {showHint && (
                <Text style={styles.descriptionText}>
                  Lorem ipsum dolor sit amet,consertur{'\n'}sadipscing elitr sed
                  diam nonumy eirmod tempor
                </Text>
              )}
              <View style={styles.timerContainer}>
                <Text style={styles.timeText}>{`${TimerCountdown(
                  gameTime,
                )}`}</Text>
              </View>
            </View>
          )}
          <View style={completeGameModal && styles.listContainer}>
            <FlatList
              data={words}
              numColumns={5}
              scrollEnabled={false}
              contentContainerStyle={
                completeGameModal && styles.contentContainer
              }
              style={styles.listStyle}
              renderItem={({ item, index }) => (
                <View style={styles.boxContainer}>
                  <TextInput
                    editable={!item.disable}
                    showSoftInputOnFocus={false}
                    ref={ref => (inputRef.current[index] = ref)}
                    selectionColor={'#fff'}
                    value={item.word}
                    onTouchStart={() => setSelectedIndex(index)}
                    style={[styles.inputStyle, { backgroundColor: item.color }]}
                  />
                </View>
              )}
            />
          </View>
          {completeGameModal && selectedIndex < 29 ? (
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: color.lightGreen,
                  fontWeight: 'bold',
                }}>
                What is {rightWord}?
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: color.white,
                  marginTop: 10,
                }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
              </Text>
            </View>
          ) : null}
        </View>
        {!completeGameModal && (
          <View>
            <CustomKeyboard
              existWord={exist}
              wrongWord={wrongWord}
              onKeyPress={key => onKeyPress(key)}
              correctWord={correctWord}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default GameScreen;
