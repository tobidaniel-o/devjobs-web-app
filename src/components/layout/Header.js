import React from "react";
import headerBackground from "../../assets/desktop/bg-pattern-header.svg";
import logo from "../../assets/desktop/logo.svg";
import classes from "./Header.module.css";
import Switch from "../Switch";

import "../../base.css";

const Header = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${headerBackground})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "162px",
				overflowX: "hidden",
			}}
		>
			<div className="wrapper">
				<div>
					{/* for the logo in the header */}
					<div className="">
						<img src={logo} alt="" />
					</div>
					{/* for dark mode toggle */}
					<div>
						{/* sunlight */}
						<Switch />
						{/* toggle button */}
						{/* moonlight */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
