import types from './types'


export function saveGameSuccess(responseJson) {
    return dispatch => {
        dispatch({
            type: types.saveGame,
            payload: { responseJson }
        });
    };
}


export function startGameSuccess(responseJson) {
    return dispatch => {
        dispatch({
            type: types.startGame,
            payload: { responseJson }
        });
    };
}