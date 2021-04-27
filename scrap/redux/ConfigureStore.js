import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { user } from './reducers/user'

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			user,
		}),
		applyMiddleware(thunk, logger),
	)

	return store
}
