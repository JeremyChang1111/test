import { createAction } from 'redux-actions'

export const actionTypes = {
    GET_LIST: 'GET_LIST',
    GET_LIST_SUCCESS: 'GET_LIST_SUCCESS',
    GET_LIST_FAIL: 'GET_LIST_FAIL',
}

export const getList = createAction(actionTypes.GET_LIST)