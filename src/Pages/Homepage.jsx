import React, { useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../Redux/AppReducer/action.js";
import TaskCard from "../Components/TaskCard.jsx";

const Homepage = () => {
	const task = useSelector((state) => state.AppReducer.tasks);
	console.log("task: ", task);
	const dispatch = useDispatch();

	useEffect(() => {
		if (task.length == 0) {
			dispatch(getTasks());
		}
	}, [dispatch, task.length]);

	return (
		<Box
			border="1px solid rgba(0,0,0,0.1)"
			width="100%"
			height="95vh"
			marginTop="1rem"
			padding="0.25rem">
			<Flex>
				{/* Todo   */}
				<Box
					border="1px solid rgba(0,0,0,0.1)"
					width="30%"
					height="95vh">
					<Box
						backgroundColor="blue.100"
						color="#044141"
						fontSize="30px">
						<Text fontWeight="bold">Todo</Text>
					</Box>
					<Box>
						{task.length > 0 &&
							task
								.filter((item) => item.task_status == "todo")
								.map((item) => {
									return (
										<TaskCard
											key={item.id}
											{...item}
											colorScheme="facebook"
										/>
									);
								})}
					</Box>
				</Box>
				{/* In-progress */}
				<Box
					border="1px solid rgba(0,0,0,0.1)"
					width="30%"
					height="95vh">
					<Box
						backgroundColor="yellow.100"
						color="#ffd700"
						fontSize="30px">
						<Text fontWeight="bold">In-Progress</Text>
					</Box>
					<Box>
						{task.length > 0 &&
							task
								.filter(
									(item) => item.task_status == "in-progress"
								)
								.map((item) => {
									return (
										<TaskCard
											key={item.id}
											{...item}
											colorScheme="whatsapp"
										/>
									);
								})}
					</Box>
				</Box>
				{/* done  */}
				<Box
					border="1px solid rgba(0,0,0,0.1)"
					width="30%"
					height="95vh">
					<Box
						backgroundColor="green.200"
						color="#005A92"
						fontSize="30px">
						<Text fontWeight="bold">Done</Text>
					</Box>
					<Box>
						{task.length > 0 &&
							task
								.filter((item) => item.task_status == "done")
								.map((item) => {
									return (
										<TaskCard
											key={item.id}
											{...item}
											colorScheme="purple"
										/>
									);
								})}
					</Box>
				</Box>

				<Box></Box>
				<Box></Box>
			</Flex>
		</Box>
	);
};

export default Homepage;
