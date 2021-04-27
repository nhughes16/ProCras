import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import colors from '../shared/colors'

class AddProjectContents extends Component {
	render() {
		return (
			<View style={StyleSheet.container}>
				<TouchableOpacity style={styles.close} onPress={this.props.closeModal}>
					<AntDesign name="close" size={24} color={colors.black} />
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	close: {
		alignSelf: 'flex-end',
	},
})

export default AddProjectContents
