import React, {useContext, useEffect} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import style from './style';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button, CustomStatusBar, Header} from '../../components';
import {color} from '../../theme';
import svgIndex from '../../assets/svgIndex';
import screenName from '../../navigation/screenName';
import GameContext from '../../context/GameContext';
import {get, doPostWithAuth} from '../../services/config/request';
import constant from '../../services/config/constant';
import {useDispatch, useSelector} from 'react-redux';
import {startGameSuccess} from '../../services/redux/userGame/action';
import Confirmation from '../../components/common/confirmation/Confirmation';
import GameRulesCard from '../../components/card/gameRulesCard/GameRulesCard';
import gameRulesConstant from './gameRules.constant';
import params from '../../services/config/params';

const GameRules = props => {
  const gameInterface = useContext(GameContext);
  const getUserDetails = () => {
    get(`${constant.participation}?id=${16}`)
      .then(res => {
        console.log('Get Data success', res);
      })
      .catch(e => {
        console.log('error', e);
      });
  };

  useEffect(() => {
    // getUserDetails();
    readInstruction();
  }, []);

  const readInstruction = () => {
    get(constant.readInstruction, params.Token)
      .then(res => {
        console.log('User get instruction', res);
      })
      .catch(e => {
        console.log('Get Game details error', e);
      });
  };

  const updateInstruction = () => {
    get(constant.updateInstruction, params.Token)
      .then(res => {
        console.log('Game instruction read successfull', res);
        props.navigation.navigate(screenName.gameScreen);
      })
      .catch(e => {
        console.log('Get Game details error', e);
      });
  };

  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: gameInterface?.containerStyle?.themeColor
            ? gameInterface?.containerStyle?.themeColor
            : color.themeColor,
        },
        gameInterface?.containerStyle?.contentContainerStyle,
      ]}>
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor={color.themeColor} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.scrollViewContainer}>
          <Header
            leftIcon={svgIndex.backArrow}
            onRightIcon={() =>
              props.navigation.navigate(screenName.leaderBoard)
            }
            rightText="Leader Board"
          />
          <View style={style.mainView}>
            <Text style={style.howToPlayText}>How To Play</Text>
            <Text style={style.triesText}>Guess the word in 6 tries.</Text>
            <View style={style.viewContainer}>
              <svgIndex.nextArrow />
              <Text style={style.letterText}>
                Each guess must be a valid 5-letter word.
              </Text>
            </View>
            <View style={style.viewContainer}>
              <svgIndex.nextArrow />
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
                    ? gameInterface?.containerStyle?.themeColor
                    : color.themeColor,
                },
              ]}>
              <View style={style.listView}>
                <FlatList
                  data={gameRulesConstant.wordOne}
                  numColumns={5}
                  scrollEnabled={false}
                  contentContainerStyle={style.contentContainerStyle}
                  renderItem={({item, index}) => (
                    <GameRulesCard
                      item={item}
                      index={index}
                      showSpot={'1'}
                      spotColor={color.correctPlace}
                    />
                  )}
                />
              </View>
              <Text style={style.textOne}>
                <Text style={style.wText}>W</Text> is the word and in the
                correct spot.
              </Text>
              <View>
                <FlatList
                  data={gameRulesConstant.wordTwo}
                  numColumns={5}
                  scrollEnabled={false}
                  contentContainerStyle={style.contentContainerStyle}
                  renderItem={({item, index}) => (
                    <GameRulesCard
                      item={item}
                      index={index}
                      showSpot={'2'}
                      spotColor={color.wrongSpot}
                    />
                  )}
                />
              </View>
              <Text style={style.textOne}>
                <Text style={style.wText}>I</Text> is in the word and in the
                Wrong spot.
              </Text>
              <View>
                <FlatList
                  data={gameRulesConstant.wordThree}
                  numColumns={5}
                  scrollEnabled={false}
                  contentContainerStyle={style.contentContainerStyle}
                  renderItem={({item, index}) => (
                    <GameRulesCard
                      item={item}
                      index={index}
                      showSpot={'4'}
                      spotColor={color.notInSpot}
                    />
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
              onPress={() => {
                updateInstruction();
              }}
              buttonContainer={style.nextButton}
            />
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </View>
  );
};

export default GameRules;
