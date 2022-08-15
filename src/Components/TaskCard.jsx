import React from "react";
import styled from "styled-components";

const TaskCard = ({ e }) => {
	// console.log("e: ", e);
	const { id, title, description, tags, subTasks } = e;

	// console.log("subTasks: ", subTasks);
	return (
		<Container key={e.id}>
			<FlexDiv>
				<h4>{e.title}</h4>
				<p>edit</p>
			</FlexDiv>
			<p>{tags}</p>
			<p>{description}</p>
			<div>
				{subTasks?.map((e, i) => (
					<div key={e.subTaskTitle}>
						<FlexDiv>
							<input
								type="checkbox"
								value={e.status}
							/>
							<p>{e.subTaskTitle}</p>
						</FlexDiv>
					</div>
				))}
			</div>
		</Container>
	);
};

export default TaskCard;
const Container = styled.div`
	// width: 50%;
	// height: 400px;
	margin: auto;
	background-color: blue;
	border: 2px solid black;
`;
const FlexDiv = styled.div`
	display: flex;
	justify-content: space-around;
`;
