import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, font} from '../../../theme';

interface statisticsProps {
  item: {
    number: String,
    name: String,
  };
  index: number;
}

const StatisticsCard = (props: statisticsProps) => {
  return (
    <View style={style.boxContainer}>
      <View style={style.boxView}>
        <Text style={style.numberText}>{props.item.number}</Text>
      </View>
      <Text style={style.labelText}>{props.item.name}</Text>
    </View>
  );
};

export default StatisticsCard;

const style = StyleSheet.create({
  boxContainer: {
    marginHorizontal: 5,
  },
  boxView: {
    backgroundColor: 'rgba(255,255, 255,0.1)',
    borderWidth: 0.5,
    borderColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    height: '18%',
  },
  numberText: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    fontSize: 20,
    color: color.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  labelText: {
    marginTop: 10,
    fontSize: 14,
    color: color.white,
    textAlign: 'center',
    fontFamily: font.poppinsMedium,
  },
});
