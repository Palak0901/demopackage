import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { svgIndex } from '../../assets';
import {
  Button,
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
import { useDispatch, useSelector } from 'react-redux';
import Confirmation from '../../components/common/confirmation/Confirmation';
import { saveGameSuccess } from '../../services/redux/userGame/action';
import constant from './constant';
import InsetShadow from 'react-native-inset-shadow';
import moment from 'moment';

const GameScreen = props => {
  const gameInterface = useContext(gameContext);
  const navigation = useNavigation();
  const [exist, setExist] = useState('');
  const [wrongWord, setWrongWord] = useState('');
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
  const data = useSelector(item => item.userGame);
  const dispatch = useDispatch();
  const [currentWord, setCurrentWord] = useState(
    constant.gameWord[data?.gameId - 1],
  );
  const [lastIndex, setLastIndex] = useState(4);
  const [gameTime, setGameTime] = useState(120);
  const [gameFinishedByTimeOut, setGameFinishedByTimeOut] = useState(true);
  const [limitModal, setLimitModal] = useState(false);
  const [saveGameModal, setSaveGameModal] = useState(false);
  const [continueGameModal, setContinueGameModal] = useState(false);

  useEffect(() => {
    inputRef?.current[0]?.focus();
    if (data?.resumeGame) {
      setContinueGameModal(true);
    }
    if (data?.todaysPlay > 10) {
      setLimitModal(true);
    }
    if (!moment(data?.lastPlayOn).isSame(new Date(), 'day')) {
      dispatch(
        saveGameSuccess({
          gameId: data?.gameId,
          todaysPlay: 1,
          data: data.data,
          resumeGame: data.resumeGame,
          gameTime: data.gameTime,
          lastPlayOn: moment().toString(),
        }),
      );
    }

    if (props?.route?.params?.continue == true) {
      playNewGame();
    }
  }, [props?.route?.params?.continue]);
  // Function for replay game
  const playNewGame = () => {
    let temp = [
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
    ];
    setWrongWord('');
    setCorrectWord([]);
    setCurrentWord(constant.gameWord[data?.gameId - 1]);
    setSelectedIndex(0);
    setLastIndex(4);
    setCompleteGameModal(false);
    setGameFinishedByTimeOut(true);
    setGameTime(120);
    setWord([...temp]);
    setExist('');
    setWrongWord('');
    setCorrectWord([]);
    inputRef?.current[0]?.focus();
  };

  const onEnterKey = keyIndex => {
    let myFillArray = words
      .slice(selectedIndex - 4, selectedIndex + 1, selectedIndex)
      .map(res => res.word);

    let gameComplete = words
      .slice(selectedIndex - 4, selectedIndex + 1, selectedIndex)
      .filter(item => item.color == color.correctPlace);

    if (!myFillArray.includes('')) {
      if (gameComplete.length != 5) {
        setLastIndex(lastIndex + 5);
        setTimeout(() => {
          inputRef.current[selectedIndex + 1]?.focus();
          setSelectedIndex(selectedIndex + 1);
        }, 500);
      }
      words.map((item, index) => {
        if (index >= selectedIndex + 1 && index <= selectedIndex + 5) {
          words[index].disable = false;
        } else {
          words[index].disable = true;
        }
      });
    }

    if (gameComplete.length == 5) {
      setCompleteGameModal(true);
      setGameFinishedByTimeOut(false);
      dispatch(
        saveGameSuccess({
          gameId: data?.gameId + 1,
          todaysPlay: data?.todaysPlay + 1,
          data: [],
          resumeGame: false,
          gameTime: 120,
          lastPlayOn: moment().toString(),
        }),
      );
      data.todaysPlay % 2 == 0 &&
        setTimeout(() => {
          navigation.navigate(screenName.successScreen);
        }, 4000);
    }
    /**
     * Game Loss conditions
     */
    if (lastIndex == words.length - 1) {
      setCompleteGameModal(true);
      // navigation.navigate(screenName.lossScreen);
      setGameFinishedByTimeOut(false);
      dispatch(
        saveGameSuccess({
          gameId: data?.gameId + 1,
          todaysPlay: data?.todaysPlay + 1,
          data: [],
          resumeGame: false,
          gameTime: 120,
          lastPlayOn: moment().toString(),
        }),
      );
      navigation.navigate(screenName.correctWord, {
        rightWord: currentWord?.word,
      });
    }
  };

  const checkWordEnterWord = (key, index) => {
    // Function for show correct , incorrect and wrong position color while typing
    const rightWordArray = currentWord?.word?.split('');
    let data = words.slice(index, index + 1);
    if (data[0].word === rightWordArray[index % 5]) {
      words.splice(index, 1, {
        color: color.correctPlace,
        word: key,
        disable: true,
      });
      setWord([...words]);
      correctWord.push(key);
      setCorrectWord([...correctWord]);
    } else if (rightWordArray.includes(key)) {
      words.splice(index, 1, {
        color: color.wrongSpot,
        word: key,
        disable: true,
      });
      setWord([...words]);
      setExist(exist.concat(key));
    } else {
      words.splice(index, 1, {
        color: color.notInSpot,
        word: key,
        disable: true,
      });
      setWord([...words]);
      setWrongWord(wrongWord.concat(key));
    }
  };

  const onKeyPress = key => {
    if (key == 'CLEAR') {
      if (selectedIndex != 0) {
        if (!words[selectedIndex]?.disable && selectedIndex > -1) {
          inputRef.current[selectedIndex - 1]?.focus();
          setSelectedIndex(selectedIndex - 1);
          // Remove Word from current
          words[selectedIndex].word
            ? (words[selectedIndex].word = '')
            : (words[selectedIndex - 1].word = '');
          setWord([...words]);
        } else if (selectedIndex < 0) {
          inputRef?.current[0]?.focus();
          setSelectedIndex(0);
        }
      } else {
        if (!words[selectedIndex]?.disable && selectedIndex > -1) {
          words[selectedIndex].word = '';
          setWord([...words]);
          inputRef.current[selectedIndex - 1]?.focus();
        }
      }
    }

    // Enter key Logi
    else if (key == 'ENTER') {
      onEnterKey(selectedIndex);
      // if (selectedIndex == lastIndex) {
      //   setLastIndex(lastIndex + 5);
      //   onEnterKey();
      // }
    }

    // When QWERTY Keys press
    else {
      if (!words[selectedIndex]?.disable) {
        words[selectedIndex].word = key;
        setWord([...words]);
        checkWordEnterWord(key, selectedIndex);
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
      if (!saveGameModal && !continueGameModal) {
        if (gameFinishedByTimeOut || data?.todaysPlay > 10) {
          if (gameTime.valueOf(0)) {
            setGameTime(gameTime - 1);
          } else {
            navigation.navigate(screenName.correctWord, {
              rightWord: currentWord?.word,
            });
            dispatch(
              saveGameSuccess({
                gameId: data?.gameId + 1,
                todaysPlay: data?.todaysPlay + 1,
                data: [],
                resumeGame: false,
                gameTime: 120,
                lastPlayOn: moment().toString(),
              }),
            );
          }
        } else {
          // console.log('Game Finished in ::', gameTime);
        }
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
  // function for save game details

  const saveGame = () => {
    setSaveGameModal(false);
    dispatch(
      saveGameSuccess({
        data: words,
        resumeGame: true,
        gameTime: gameTime,
        gameId: currentWord?.id,
        todaysPlay: data?.todaysPlay,
        lastPlayOn: moment().toString(),
      }),
    );
    navigation.goBack();
  };
  // function for discard save game details
  const discardSaveGame = () => {
    setSaveGameModal(false);
    dispatch(
      saveGameSuccess({
        data: [],
        resumeGame: false,
        gameId: currentWord?.id,
        todaysPlay: data?.todaysPlay,
        gameTime: 120,
        lastPlayOn: moment().toString(),
      }),
    );
    navigation.goBack();
  };
  // function for continue save game
  const continueFromSave = () => {
    setWord(data?.data);
    setGameTime(data?.gameTime);
    setContinueGameModal(false);
  };

  // function for continue game
  const continueFromNew = () => {
    setContinueGameModal(false);
  };

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
      <CustomStatusBar backgroundColor={color.themeColor} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Confirmation
          visible={saveGameModal}
          onPressYes={() => saveGame()}
          onPressDiscard={() => discardSaveGame()}
        />
        {/* Continue Game Confirmation */}
        <Confirmation
          visible={continueGameModal}
          onPressYes={() => continueFromSave()}
          cancelButtonLabel="No"
          confirmButtonLabel="Yes"
          title="Continue Game"
          description="Do you want to continue game , from your saved games ?"
          onPressDiscard={() => continueFromNew()}
        />
        <Header
          onPress={() => {
            gameTime.valueOf(0) ? setSaveGameModal(true) : navigation.goBack();
          }}
          leftIcon={svgIndex.backArrow}
        />
        <UnlockGame
          visible={limitModal ^ (data?.todaysPlay > 10)}
          onCancel={() => {
            navigation.navigate(screenName.gameRules);
            setLimitModal(false);
          }}
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
                <Text style={styles.descriptionText}>{currentWord?.hint}</Text>
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
              renderItem={({ item, index }) => {
                return (
                  <InsetShadow
                    shadowColor={color.shadowColor}
                    shadowOpacity={1}
                    shadowOffset={5}
                    shadowRadius={5}
                    elevation={8}
                    containerStyle={styles.boxContainer}>
                    <TextInput
                      editable={!item.disable}
                      showSoftInputOnFocus={false}
                      ref={ref => (inputRef.current[index] = ref)}
                      selectionColor={'#fff'}
                      value={item.word}
                      onTouchStart={() => {
                        if (!item.disable) {
                          setSelectedIndex(index);
                        }
                      }}
                      style={[
                        styles.inputStyle,
                        {
                          backgroundColor: item.color
                            ? item.color
                            : color.gameColor,
                        },
                      ]}
                    />
                  </InsetShadow>
                );
              }}
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
                What is {currentWord?.word}?
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: color.white,
                  marginTop: 10,
                }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna.
              </Text>
              {data.todaysPlay % 2 == 0 && (
                <View style={styles.playButtonContainer}>
                  <Button name={'Continue'} onPress={() => playNewGame()} />
                </View>
              )}
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
