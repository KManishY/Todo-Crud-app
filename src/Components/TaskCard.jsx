import React, { useState } from "react";
import {
	Badge,
	Box,
	Checkbox,
	CheckboxGroup,
	Flex,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";

const TaskCard = ({ id, title, description, tags, subTasks, colorScheme }) => {
	console.log("colorScheme: ", colorScheme);
	console.log("tags: ", tags);
	const [checkbox, setCheckBox] = useState(() => {
		let data = subTasks
			.filter((item) => {
				return item.status && item.subTaskTitle;
			})
			.map((item) => item.subTaskTitle);
		return data;
	});
	const updateSubTaskStatus = () => {};
	return (
		<Box
			width="90%"
			// margin="auto"
			boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
			// padding="5px"
			lineHeight="30px"
			backgroundColor="#262b2f"
			marginTop="10px"
			margin="0.5rem auto 1rem"
			padding="10px"
			marginBottom="10px">
			<Flex justify="center">
				<Text>{title}</Text>
			</Flex>
			<Box>
				<VStack>
					{tags.length &&
						tags.map((item, index) => {
							return (
								<Badge key={index} colorScheme={colorScheme}>
									{item}
								</Badge>
							);
						})}
				</VStack>
			</Box>
			<Text>{description}</Text>
			<Box>
				<CheckboxGroup
					value={checkbox}
					onChange={(value) => {
						setCheckBox(value);
						updateSubTaskStatus(value);
					}}>
					{subTasks.length > 0 &&
						subTasks.map((item, index) => (
							<VStack key={index}>
								<Checkbox value={item.subTaskTitle}>
									{item.subTaskTitle}
								</Checkbox>
							</VStack>
						))}
				</CheckboxGroup>
			</Box>
		</Box>
	);
};

export default TaskCard;
