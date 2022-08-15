import React from "react";
import "../App.css";

const SideMenu = () => {
	return (
		<div>
			<h1>SideMenu</h1>
			<div className="sideMenu_container">
				<div>
					<h4>UserDetails</h4>
				</div>
				<div>
					<h4>Filter</h4>
				</div>
				<div>
					<button>Logout</button>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
