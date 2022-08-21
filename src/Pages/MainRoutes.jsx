import React from "react";
import Homepage from "./Homepage.jsx";
import EditPage from "./EditPage.jsx";
import Login from "./Login.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import { HStack } from "@chakra-ui/react";
const MainRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<HStack>
						<Sidebar />
						<Homepage />
					</HStack>
				}
			/>
			<Route
				path="/tasks/:id"
				element={
					<HStack>
						<Sidebar />
						<EditPage />
					</HStack>
				}
			/>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default MainRoutes;
