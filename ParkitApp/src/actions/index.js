import * as types from "./actionTypes";
import { Actions} from 'react-native-router-flux';

const loginUserSucces = (dispatch, user) => {
    dispatch({
        type: types.LOGIN_USER_SUCCES,
        payload:user
    });

    Actions.main()

};