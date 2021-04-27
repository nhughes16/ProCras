import * as ActionTypes from '../ActionTypes'

export const user = (state = { isLoading: true, currentUser: [] }, action) => {
	switch (action.type) {
		case ActionTypes.USER_LOADING:
			return { ...state, isLoading: true, currentUser: [] }
		case ActionTypes.USER_DATA:
			//console.log('user.js currentUser payload: ', action.payload)
			return { ...state, isLoading: false, currentUser: action.payload }
		default:
			return state
	}
}
