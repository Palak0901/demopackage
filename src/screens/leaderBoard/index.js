import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import style from './style';
import LeaderBoardCard from '../../components/card/leaderBoardCard/LeaderBoardCard';
import { color } from '../../theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomStatusBar, Header } from '../../components';
import imageIndex from '../../assets/imageIndex';
import SvgIndex from '../../assets/svgIndex';
import screenName from '../../navigation/screenName';
import gameContext from '../../context/GameContext';

const LeaderBoard = props => {
  const gameInterface = useContext(gameContext);
  const [leaderBoard, setLeaderBoard] = useState([
    {
      id: 1,
      name: 'Ajay',
      number: 15,
      rank: '1',
      image: imageIndex.userOne,
      achievements: {
        completeWords: 15,
        totalUseTime: '8.53',
        totalUseHints: 0,
        totalWrongWords: 0,
        totalAttempts: 12,
      },
    },
    {
      id: 2,
      name: 'Darshna',
      number: 14,
      rank: '2',
      image: imageIndex.userTwo,
      achievements: {
        completeWords: 14,
        totalUseTime: '10.53',
        totalUseHints: 0,
        totalWrongWords: 0,
        totalAttempts: 14,
      },
    },
    {
      id: 3,
      name: 'Monika',
      number: 14,
      rank: '3',
      image: imageIndex.userOne,
      achievements: {
        completeWords: 14,
        totalUseTime: '10.55',
        totalUseHints: 0,
        totalWrongWords: 0,
        totalAttempts: 14,
      },
    },
    {
      id: 4,
      name: 'Steffen',
      number: 13,
      rank: '4',
      image: imageIndex.userTwo,
      achievements: {
        completeWords: 13,
        totalUseTime: '11.11',
        totalUseHints: 0,
        totalWrongWords: 0,
        totalAttempts: 11,
      },
    },
  ]);

  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: gameInterface.containerStyle?.themeColor
            ? gameInterface.containerStyle?.themeColor
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
            leftIcon={SvgIndex.backArrow}
            onPress={() => props.navigation.goBack()}
            title="Leader Board"
          />
          <Text style={style.allTimeText}>All Time</Text>
          {/* Top One Game Solver user Details */}
          <View style={style.topOneContainer}>
            <Image source={leaderBoard[0].image} style={style.topOneImage} />
            <View style={style.userNameContainer}>
              <Text style={style.topOneuserNameText}>
                {leaderBoard[0].name}
              </Text>
              <Text style={style.topOnewordText}>
                {`Words Solved : ${leaderBoard[0].number}`}
              </Text>
            </View>
          </View>
          {/* Top Two and Three Game Solver user Details */}
          <View style={style.topContainer}>
            <View style={style.topTwoContainer}>
              <Image
                source={leaderBoard[1].image}
                style={style.secondTopImage}
              />
              <View style={style.userNameContainer}>
                <Text style={style.topUserNameText}>{leaderBoard[1].name}</Text>
                <Text style={style.topwordText}>
                  {`Words Solved : ${leaderBoard[1].number}`}
                </Text>
              </View>
            </View>

            <View style={style.topThreeContainer}>
              <Image
                source={leaderBoard[2].image}
                style={style.thirdTopImage}
              />
              <View style={style.userNameContainer}>
                <Text style={style.topUserNameText}>{leaderBoard[2].name}</Text>
                <Text style={style.topwordText}>
                  {`Words Solved : ${leaderBoard[2].number}`}
                </Text>
              </View>
            </View>
          </View>

          <FlatList
            horizontal={false}
            style={style.flatListContainer}
            data={leaderBoard}
            renderItem={({ item, index }) => (
              <LeaderBoardCard
                onPress={() =>
                  props.navigation.navigate(screenName.userProfile, {
                    data: item,
                  })
                }
                item={item}
                index={index}
              />
            )}
          />
        </ScrollView>
      </SafeAreaProvider>
    </View>
  );
};

export default LeaderBoard;

{
  /* <View>
            <Text style={style.allTimeText}>All Time</Text>
            <View style={style.mainImageView}>
              <View style={style.userTextOne}>
                <Text style={style.userNameText}>{leaderBoard[0].name}</Text>
                <Text style={style.wordText}>
                  {'Word Solve : ' + leaderBoard[0].number}
                </Text>
              </View>
              <View style={style.imageContainer}>
                <Image source={leaderBoard[1].image} style={style.userOne} />
                <View style={style.imageView}>
                  <Image source={leaderBoard[0].image} style={style.userTwo} />
                </View>
                <View style={style.nameView}>
                  <Text style={style.secondUserName}>
                    {leaderBoard[1].name}
                  </Text>
                  <Text style={style.secondWordText}>
                    {'Word Solve : ' + leaderBoard[1].number}
                  </Text>
                </View>
              </View>
            </View>
          </View> */
}
