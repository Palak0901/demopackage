import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import SvgIndex from '../../../assets/svgIndex';
import {color} from '../../../theme';

const LeaderBoardCard = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
      key={props.index}>
      <View style={styles.mainView}>
        <Image source={props.item.image} style={styles.image}></Image>
        <Text style={styles.name}>{props.item.name}</Text>
        <Text style={styles.number}>{props.item.number}</Text>
        <Text style={styles.rank}>#{props.item.rank}</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <SvgIndex.upArrow />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default LeaderBoardCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  mainView: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: color.gray,
    marginRight: 10,
  },
  name: {
    fontSize: 17,
    color: color.white,
    fontWeight: 'bold',
    flex: 4,
  },
  number: {
    fontSize: 17,
    color: color.white,
    fontWeight: 'bold',
    flex: 1,
  },
  rank: {
    fontSize: 17,
    color: color.white,
    fontWeight: 'bold',
    flex: 1,
  },
  userSvg: {
    marginRight: 10,
  },
});
