import React from "react";
import Switch from "../../Switch";
import classes from "./LogoToggle.module.css";
import logo from "../../../assets/desktop/logo.svg";

const LogoToggle = ({handleDarkMode}) => {
	return (
		<div className="">
			<div className={classes.header}>
				{/* for the logo in the header */}
				<div className="">
					<img src={logo} alt="" />
				</div>
				{/* for dark mode toggle */}
				<div>
					<Switch handleDarkMode={handleDarkMode}/>
				</div>
			</div>
		</div>
	);
};

export default LogoToggle;
