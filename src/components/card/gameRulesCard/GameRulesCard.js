import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {color} from '../../../theme/index';
import InsetShadow from 'react-native-inset-shadow';

interface GameRulesCardProps {
  item: Object;
  index: Number;
  showSpot: Number;
  spotColor: String;
}

const GameRulesCard = (props: GameRulesCardProps) => {
  return (
    <InsetShadow
      shadowColor={color.white}
      shadowOpacity={1}
      shadowOffset={5}
      shadowRadius={5}
      elevation={12}
      containerStyle={[
        style.boxContainer,
        {
          backgroundColor:
            props.item?.id == props.showSpot
              ? props.spotColor
              : color.backgroundTheme,
        },
      ]}>
      <Text
        style={[
          style.itemText,
          {
            backgroundColor:
              props.item?.id == props.showSpot
                ? props.spotColor
                : color.backgroundTheme,
          },
        ]}>
        {props.item.word}
      </Text>
    </InsetShadow>
  );
};

export default GameRulesCard;

const style = StyleSheet.create({
  boxContainer: {
    backgroundColor: '#25595B',
    height: responsiveScreenHeight(6),
    // width: responsiveScreenWidth(12),
    width: 45,
    margin: responsiveScreenWidth(1.2),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#25595B',
    textAlign: 'center',
  },
});
