import React from "react";
import "../App.css";

const SideMenu = () => {
	return (
		<div>
			<h1>SideMenu</h1>
			<div className="sideMenu_container">
				<div>
					<h3>UserDetails</h3>
				</div>
				<div>Filter</div>
				<div>
					<button>Logout</button>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
