import React, { useEffect, useState } from "react";
import "../App.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getTagsList } from "../Redux/AppReducer/action.js";
import { useSearchParams } from "react-router-dom";

const SideMenu = () => {
	const dispatch = useDispatch();
	const tagList = useSelector((state) => state.AppReducer.tags);
	const task = useSelector((state) => state.AppReducer.tasks);
	const [searchParams, setSearchParams] = useSearchParams();
	const [selectTag, setSelectTag] = useState(
		searchParams.getAll("tags") || []
	);

	const handleTagChange = (value) => {
		// if the tag is selected remove  else add it
		let newTags = [...selectTag];
		if (selectTag.includes(value)) {
			newTags.splice(newTags.indexOf(value), 1);
		} else {
			newTags.push(value);
		}
		setSelectTag(newTags);
		setSearchParams({ tags: newTags });
	};

	useEffect(() => {
		if (tagList.length === 0) {
			dispatch(getTagsList());
		}
	}, [dispatch, tagList.length]);

	return (
		<Box
			border="1px solid rgba(0,0,0,0.1)"
			width="250px"
			height="95vh"
			marginTop="1rem"
			padding="1rem">
			Sidebar
			<Flex direction="column" height="inherit">
				<Box height="15%" border="1px solid rgba(0,0,0,0.1)">
					UserProfile
				</Box>
				<Box
					minHeight="70%"
					border="1px solid rgba(0,0,0,0.1)"
					padding="5px 0px"
					cursor="pointer"
					backgroundColor="#030608">
					<Flex direction="column">
						<Box>
							<Text fontSize="25px" fontWeight="bold">
								Filter Tasks
							</Text>
							<Flex
								padding="10px"
								onClick={() => {
									handleTagChange("All");
								}}
								backgroundColor={
									selectTag.includes("All")
										? "#6e99c4"
										: "#142332"
								}
								color={
									selectTag.includes("All")
										? "#400000"
										: "rgb(189, 212, 231)"
								}
								// rgb(189, 212, 231)
								direction="row"
								fontSize="22px"
								justify="space-between">
								<Text>All</Text>
								<Text>{task.length}</Text>
							</Flex>
						</Box>
						{tagList.length > 0 &&
							tagList.map((e) => {
								return (
									<Box
										key={e.id}
										pedding="5px 0px"
										cursor="pointer"
										onClick={() => {
											handleTagChange(e.tag);
										}}
										marginTop="10px"
										backgroundColor={
											selectTag.includes(e.tag)
												? "#6e99c4"
												: "#142332"
										}>
										<Flex
											direction="row"
											padding="10px"
											fontSize="20px"
											justify="space-between">
											<Text>{e.tag}</Text>
											<Text>
												{
													task.filter((item) =>
														item.tags.includes(
															e.tag
														)
													).length
												}
											</Text>
										</Flex>
									</Box>
								);
							})}
					</Flex>
				</Box>
			</Flex>
			<Flex></Flex>
			<Flex></Flex>
		</Box>
	);
};

export default SideMenu;
