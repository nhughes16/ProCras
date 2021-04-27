import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../shared/colors'

export default function Header() {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={styles.divider}></View>
			<Text style={styles.title}>
				Pro<Text style={styles.title2}>Cras</Text>
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
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
