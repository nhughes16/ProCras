import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'

import ToDos from './ToDos'

import { tempData } from '../shared/tempData'
import colors from '../shared/colors'
import { DrawerContentScrollView } from '@react-navigation/drawer'

function Projects() {
	return (
		<View style={{ height: '80%', paddingLeft: 32, color: 'black' }}>
			<ScrollView>
				<RenderProject project={tempData} />
			</ScrollView>
		</View>
	)
}

function RenderProjectToDo({ project }) {}

function RenderProject({ project }) {
	return project.map((item, key) => (
		<View key={key} style={{ marginBottom: 10 }}>
			<Text>{item.name}</Text>
			<FlatList
				data={tempData}
				keyExtractor={(item) => item.name}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => <RenderProjectItem todos={item.todos} />}
			/>
		</View>
	))
}

function RenderProjectItem({ todos }) {
	console.log('item toods: ', todos)
	return (
		<View>
			{todos.map((item, key) => (
				<View key={key} style={[styles.projectContainer, { backgroundColor: colors.green }]}>
					<Text>{item.title}</Text>
				</View>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	projectContainer: {
		paddingVertical: 32,
		paddingHorizontal: 16,
		borderRadius: 6,
		marginHorizontal: 12,
		alignItems: 'center',
		width: 200,
		height: 275,
	},
	projectTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.white,
		marginBottom: 16,
	},
	count: {
		fontSize: 40,
		fontWeight: 'bold',
		color: colors.white,
	},
	subtitle: {
		fontSize: 12,
		fontWeight: 'bold',
		color: colors.white,
	},
})

export default Projects
