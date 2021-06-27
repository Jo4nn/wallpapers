import { path } from 'ramda';

const actionTypeSuffix = 'images';

export const actionTypes = {
    ADD_SMALL_IMAGE: `ADD_SMALL_IMAGE(${actionTypeSuffix})`,

    GET_SMALL_IMAGE_LIST: `GET_SMALL_IMAGE_LIST(${actionTypeSuffix})`,
    SET_SMALL_IMAGE_LIST: `SET_SMALL_IMAGE_LIST(${actionTypeSuffix})`,
};

export const addSmallImage = ({ animal, base64 }) => {
    return async (dispatch, getState) => {
        // any async code you want!
        const response = await fetch('https://aminalsoundboard-default-rtdb.firebaseio.com/smallImages.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                animal,
                base64,
            })
        });

        const resData = await response.json();

        dispatch({
            type: actionTypes.ADD_SMALL_IMAGE,
            payload: {
                // id: resData.name,
                animal,
                base64,
            }
        });
    };
};
