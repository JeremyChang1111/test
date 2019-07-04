const reducer = (state = {}, {type, payload}) => {
    switch(type) {
        case 'GET_LIST':
            return {...state, loading: true}
        case 'GET_LIST_SUCCESS':
            return {...state, list: payload, loading: false}
        case 'GET_LIST_FAIL':
            return {...state, list: {}, loading: false}
        default:
            return state
    }
}

export default reducer