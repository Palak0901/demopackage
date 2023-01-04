import {View, Text, Modal, Image} from 'react-native';
import React, {memo, useState} from 'react';
import style from './style';
import {color} from '../../theme';
import {imageindex, svgIndex} from '../../assets';

import Share from 'react-native-share';
import {ModalContainer, Button} from '../';

const ShareModal = ({visible, onRequestClose, onClose}) => {
  const url = 'https://awesome.contents.com/';
  const title = 'Awesome Contents';
  const message = 'Please check this out.';
  const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
  const options = Platform.select({
    ios: {
      activityItemSources: [
        {
          // For sharing url with custom title.
          placeholderItem: {type: 'url', content: url},
          item: {
            default: {type: 'url', content: url},
          },
          subject: {
            default: title,
          },
          linkMetadata: {originalUrl: url, url, title},
        },
        {
          // For sharing text.
          placeholderItem: {type: 'text', content: message},
          item: {
            default: {type: 'text', content: message},
            message: null, // Specify no text to share via Messages app.
          },
          linkMetadata: {
            // For showing app icon on share preview.
            title: message,
          },
        },
        {
          // For using custom icon instead of default text icon at share preview when sharing with message.
          placeholderItem: {
            type: 'url',
            content: icon,
          },
          item: {
            default: {
              type: 'text',
              content: `${message} ${url}`,
            },
          },
          linkMetadata: {
            title: message,
            icon: icon,
          },
        },
      ],
    },
    default: {
      title,
      subject: title,
      message: `${message} ${url}`,
    },
  });
  const onShare = () => {
    Share.open(options)
      .then(res => {
        onClose();
      })
      .catch(err => {
        onClose();
        err && console.log(err);
      });
  };
  return (
    <ModalContainer visible={visible} onRequestClose={onRequestClose}>
      <Text
        style={{
          fontSize: 18,
          color: color.gray,
          fontWeight: 'bold',
          fontFamily: 'arial',
          textAlign: 'center',
          lineHeight: 22,
        }}>
        Invite your friends{'\n'}and earn 5 TerCoins
      </Text>
      <Image source={imageindex.welcomeImage} />
      <Text
        style={{
          fontSize: 16,
          color: color.gray,
          textAlign: 'center',
          lineHeight: 20,
          fontFamily: 'arial',
        }}>
        When a new user installs the{'\n'} application using your unique link
        {'\n'} both of you will receive 5 TerCoins
      </Text>
      <Button
        leftIcon={svgIndex.send}
        name={'Send link'}
        buttonContainer={{width: '95%', marginTop: 16}}
        onPress={onShare}
      />
    </ModalContainer>
  );
};

export default memo(ShareModal);
