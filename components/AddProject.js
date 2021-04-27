import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import colors from '../shared/colors'

import AddProjectContents from './AddProjectContents'

class AddToDo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showModal: false,
		}
	}

	toggleModal() {
		this.setState({ showModal: !this.state.showModal })
	}
	render() {
		return (
			<View style={{ marginTop: 30 }}>
				<TouchableOpacity style={styles.addProject} onPress={() => this.toggleModal()}>
					<AntDesign name="plus" size={20} color={colors.pink} />
				</TouchableOpacity>

				<Text style={styles.add}>Add Project</Text>

				<Modal animationTyle="slide" visible={this.state.showModal} onRequestClose={() => this.toggleModal()}>
					<AddProjectContents closeModal={() => this.toggleModal()} />
				</Modal>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	addProject: {
		borderWidth: 2,
		borderColor: colors.green,
		borderRadius: 5,
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	add: {
		color: colors.green,
		marginBottom: 50,
	},
})

export default AddToDo
