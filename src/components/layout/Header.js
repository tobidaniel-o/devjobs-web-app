import React from "react";
import desktopHeaderBg from "../../assets/desktop/bg-pattern-header.svg";
import tabletHeaderBg from "../../assets/tablet/bg-pattern-header.svg";
import mobileHeaderBg from "../../assets/mobile/bg-pattern-header.svg";
import logo from "../../assets/desktop/logo.svg";
import classes from "./Header.module.css";
import Switch from "../Switch";

import "../../base.css";
import styled from "@emotion/styled";

const Header = () => {
	return (
		<HeaderUI
			style={{
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "162px",
				overflowX: "hidden",
			}}
		>
			<div className="wrapper">
				<div className={classes.header}>
					{/* for the logo in the header */}
					<div className="">
						<img src={logo} alt="" />
					</div>
					{/* for dark mode toggle */}
					<div>
						<Switch />
					</div>
				</div>
			</div>
		</HeaderUI>
	);
};

const HeaderUI = styled.div`
	/* Laptop */
	@media (max-width: 1440px) {
		background-image: url(${desktopHeaderBg});
	}
	/* Landscape phone to portrait tablet */
	@media (min-width: 768px) {
		background-image: url(${tabletHeaderBg});
	}

	/* Landscape phones and down */
	@media (max-width: 480px) {
		background-image: url(${mobileHeaderBg});
	}
`;

export default Header;
