import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { tempData } from '../shared/tempData'

function ToDos({ list }) {
	return (
		<View>
			<Text>{list.name}</Text>
		</View>
	)
}

export default ToDos
