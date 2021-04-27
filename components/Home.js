import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import colors from '../shared/colors'

import Header from './Header'
import AddToDo from './AddProject'
import Projects from './Projects'

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header />

				<Projects />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	divider: {
		backgroundColor: colors.green,
		flex: 1,
		height: 1,
		alignSelf: 'center',
	},
	title: {
		color: colors.pink,
		fontSize: 36,
		margin: 36,
	},
	title2: {
		fontWeight: 'bold',
		color: colors.gray,
	},
})
