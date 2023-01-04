import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import style from './style';
import { CustomStatusBar, Header, ShareModal } from '../../components';
import { color } from '../../theme';
import { svgIndex } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import screenName from '../../navigation/screenName';
import gameContext from '../../context/GameContext';
import { get } from '../../service/config/request';
import constant from '../../service/config/constant';

const StatisticsScreen = () => {
  const gameInterface = useContext(gameContext);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [statisticsData, setStatisticsData] = useState([])

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
          backgroundColor: gameInterface.containerStyle?.themeColor
            ? gameInterface.containerStyle?.themeColor
            : color.themeColor,
        },
        gameInterface.containerStyle.contentContainerStyle,
      ]}>
      <CustomStatusBar />
      <ShareModal visible={visible} onClose={() => setVisible(!visible)} />
      <Header
        leftIcon={svgIndex.backArrow}
        rightIcon={svgIndex.share}
        onRightIcon={() => setVisible(true)}
        onPress={() => navigation.goBack()}
      />
      <View style={style.centerContainer}>
        <Text style={style.statisticsText}>Statistics</Text>
        <View style={style.boxMainView}>
          <View style={style.boxContainer}>
            <View style={style.boxView}>
              <Text style={style.numberText}>15</Text>
            </View>
            <Text style={style.labelText}>Words{'\n'}solved</Text>
          </View>

          <View style={style.boxContainer}>
            <View style={style.boxView}>
              <Text style={style.numberText}>2</Text>
            </View>
            <Text style={style.labelText}>Time{'\n'}used</Text>
          </View>

          <View style={style.boxContainer}>
            <View style={style.boxView}>
              <Text style={style.numberText}>6</Text>
            </View>
            <Text style={style.labelText}>Number {'\n'}of hints</Text>
          </View>
          <View style={style.boxContainer}>
            <View style={style.boxView}>
              <Text style={style.numberText}>0</Text>
            </View>
            <Text style={style.labelText}>Wrong {'\n'}words</Text>
          </View>
          <View style={style.boxContainer}>
            <View style={style.boxView}>
              <Text style={style.numberText}>2</Text>
            </View>
            <Text style={style.labelText}>
              Number{'\n'}of{'\n'}attemps
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StatisticsScreen;
