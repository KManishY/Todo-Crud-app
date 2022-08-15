import React from "react";
import styled from "styled-components";

const TaskCard = ({ e }) => {
	const { id, title, description, tags, subTasks } = e;
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
					<div key={e.id}>
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
	padding-left: 20px;
	padding-right: 20px;
	justify-content: space-between;
`;
