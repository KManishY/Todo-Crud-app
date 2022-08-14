import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SideMenu from "../Components/SideMenu.jsx";
import { getTask } from "../Redux/AppReducer/action.js";
const Home = () => {
	const dispatch = useDispatch();
	const store = useSelector((store) => store.appReducer);
	console.log("store: ", store);

	useEffect(() => {
		dispatch(getTask());
	}, []);
	return (
		<GridContainer>
			<GridItem>
				<SideMenu />
			</GridItem>
			<GridItem>Todo</GridItem>
			<GridItem>Progress</GridItem>
			<GridItem>Completed</GridItem>
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
	height: 500px;
	border: 2px solid red;
`;
