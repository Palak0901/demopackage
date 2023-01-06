import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import style from './style';
import { CustomStatusBar, Header, ShareModal } from '../../components';
import { color } from '../../theme';
import { svgIndex } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import screenName from '../../navigation/screenName';
import gameContext from '../../context/GameContext';
import { get } from '../../services/config/request';
import constant from '../../services/config/constant';
import StatisticsCard from '../../components/card/statisticsCard/statisticsCard';

const StatisticsScreen = () => {
  const gameInterface = useContext(gameContext);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [statisticsData, setStatisticsData] = useState([
    { name: 'Words\nSolved', number: '15' },
    { name: 'Time\nused', number: '2' },
    { name: 'Number\nof\nhints', number: '6' },
    { name: 'Wrong\nwords', number: '0' },
    { name: 'Number\nof\nattempts', number: '2' },
  ]);

  const getStatisticsData = () => {
    get(constant.stats).then(res => {
      setStatisticsData(res.data)
      console.log('Get user stats success');
    }).catch(e => {
      console.log('Get user stats failed');
    })
  }

  useEffect(() => {
    getStatisticsData()
  }, [])

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
      <CustomStatusBar backgroundColor={color.themeColor} />
      <ShareModal visible={visible} onClose={() => setVisible(!visible)} />
      <Header
        leftIcon={svgIndex.backArrow}
        rightIcon={svgIndex.share}
        onRightIcon={() => setVisible(true)}
        onPress={() => navigation.navigate(screenName.gameRules)}
      />
      <View style={style.centerContainer}>
        <Text style={style.statisticsText}>Statistics</Text>
        <FlatList
          data={statisticsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <StatisticsCard
              item={item}
              index={index}
            />
          )}
        />
      </View>
    </View>
  );
};

export default StatisticsScreen;
