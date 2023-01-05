import { height, width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import {
    View,
    Modal,
    StyleSheet,
    Text,
} from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { color, font } from '../../../theme';
import Button from '../button/Button';
import { imageindex, svgIndex } from '../../../assets'


interface ConfirmationProps {
    visible?: Boolean;
    onPressYes?: () => void;
    onPressDiscard?: () => void;
    confirmButtonLabel: String;
    cancelButtonLabel: String;
    description: String;
    title: String

}

const Confirmation = (props: ConfirmationProps) => {
    return (
        <Modal visible={props.visible}
            transparent statusBarTranslucent={true}>

            <View style={[styles.container]}>
                <View style={styles.contentContainer}>
                    <View style={styles.detailsContainer}>
                        <Text
                            style={styles.unSaveLabel}>{props.title}</Text>
                        <Text style={styles.description}>{props.description}</Text>
                        <View style={styles.buttonContainer}></View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.noButton}>
                                <Button
                                    buttonContainer={styles.discardButtonStyle}
                                    name={props.cancelButtonLabel}
                                    onPress={props.onPressDiscard}
                                />
                            </View>
                            <View style={styles.yesButton}>
                                <Button
                                    name={props.confirmButtonLabel}
                                    onPress={props.onPressYes}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

Confirmation.defaultProps = {
    cancelButtonLabel: 'Discard',
    confirmButtonLabel: 'Yes',
    title: 'Unsaved Changes',
    description: 'Do you want to save your game, before navigating away?'
}

export default Confirmation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000a1',
    },

    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsContainer: {
        backgroundColor: '#fff',
        width: '85%',
        // height: '25%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    unSaveLabel: {
        color: '#000',
        fontSize: 20,
        margin: 20,
        fontWeight: '600',
        textAlign: 'center',
    }, description: {
        marginHorizontal: 20,
        color: color.gray,
        fontSize: 16,
        marginBottom: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },
    yesButton: {
        flex: 1,
        marginRight: 20,
        marginLeft: 5
    },
    noButton: {
        flex: 1,
        marginLeft: 20,
        marginRight: 5,
    },
    discardButtonStyle: {
        backgroundColor: color.gray
    },
});
