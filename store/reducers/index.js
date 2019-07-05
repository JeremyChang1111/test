import { handleActions } from 'redux-actions'
import { actionTypes } from '../actions'

const initialState = {
    list: {},
    loading: false,
}

export default handleActions({
    [actionTypes.GET_LIST]: (state, action) => ({
        list: {},
        loading: true,
    }),
    [actionTypes.GET_LIST_SUCCESS]: (state, action) => ({
        list: action.payload,
        loading: false,
    }),
    [actionTypes.GET_LIST_FAIL]: (state, action) => ({
        list: {},
        loading: false,
    }),
}, initialState)