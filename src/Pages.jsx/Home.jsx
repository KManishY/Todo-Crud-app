import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SideMenu from "../Components/SideMenu.jsx";
import TaskCard from "../Components/TaskCard.jsx";
import {
	addCompleted,
	addProgress,
	addTodo,
	getTask,
} from "../Redux/AppReducer/action.js";
const Home = () => {
	const dispatch = useDispatch();
	const store = useSelector((store) => store);
	// console.log("store: ", store);
	const { tasks } = store.reducer;
	const { complete, inprogress, todo } = store.arrReducer;

	const filterData = () => {
		tasks?.map((task) => {
			let filterTasks = task.subTasks.filter(
				(item) => item.status === true
			);
			if (filterTasks.length === task.subTasks.length) {
				// console.log("completd", task);
				dispatch(addCompleted(task));
			} else if (
				filterTasks.length > 0 &&
				filterTasks.length < task.subTasks.length
			) {
				dispatch(addProgress(task));
				// console.log("Progress", task);
			} else {
				// console.log("all status false todo", task);
				dispatch(addTodo(task));
			}
		});
	};

	useEffect(() => {
		filterData();
	}, [tasks]);

	useEffect(() => {
		dispatch(getTask());
	}, []);

	return (
		<GridContainer>
			<GridItem style={{ height: "600px" }}>
				<SideMenu />
			</GridItem>
			<GridItem>
				Todo
				{todo.map((e) => {
					return <TaskCard key={e.id} e={e} />;
				})}
			</GridItem>
			<GridItem>
				Progress
				{inprogress.map((e) => {
					return <TaskCard key={e.id} e={e} />;
				})}
			</GridItem>
			<GridItem>
				Completed
				{complete.map((e) => {
					return <TaskCard key={e.id} e={e} />;
				})}
			</GridItem>
		</GridContainer>
	);
};

export default Home;

const GridContainer = styled.div`
	display: grid;
	margin: 5px;
	border: 2px solid black;
	gap: 5px;
	grid-template-columns: 0.2fr 0.3fr 0.3fr 0.3fr;
`;
const GridItem = styled.div`
	border: 2px solid red;
`;
