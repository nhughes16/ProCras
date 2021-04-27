import * as ActionTypes from './ActionTypes'

import firebase from 'firebase'

export const fetchUser = () => (dispatch) => {
	return firebase
		.firestore()
		.collection('users')
		.doc(firebase.auth().currentUser.uid)
		.get()
		.then((snapshot) => {
			if (snapshot.exists) {
				dispatch(userData(snapshot.data()))
			} else {
				console.log('does not exist')
			}
		})
}

export const userData = (currentUser) => ({
	type: ActionTypes.USER_DATA,
	payload: currentUser,
})

export const userLoading = () => ({
	type: ActionTypes.USER_LOADING,
})
