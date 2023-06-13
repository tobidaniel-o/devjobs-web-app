import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import iconSun from "../assets/desktop/icon-sun.svg";
import iconMoon from "../assets/desktop/icon-moon.svg";


const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 28,
	height: 16,
	padding: 0,
	display: "flex",
	"&:active": {
		"& .MuiSwitch-thumb": {
			width: 15,
		},
		"& .MuiSwitch-switchBase.Mui-checked": {
			transform: "translateX(9px)",
		},
	},
	"& .MuiSwitch-switchBase": {
		padding: 2,
		"&.Mui-checked": {
			transform: "translateX(12px)",
			color: "#5964E0",
			"& + .MuiSwitch-track": {
				opacity: 1,
				backgroundColor: "#fff",
				// theme.palette.mode === "dark" ? "#177ddc" : "#fff",
			},
		},
	},
	"& .MuiSwitch-thumb": {
		// boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
		width: 12,
		height: 12,
		borderRadius: 6,
		transition: theme.transitions.create(["width"], {
			duration: 200,
		}),
		color: "#5964E0",
	},
	"& .MuiSwitch-track": {
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: "#fff",
		// color: "#5964E0",
		// theme.palette.mode === "#fff"
		// 	? "rgba(255,255,255,.35)"
		// 	: "rgba(0,0,0,.25)",
		// boxSizing: "border-box",
	},
}));

export default function CustomizedSwitches() {
	return (
		<FormGroup>
			<Stack direction="row" spacing={1} alignItems="center">
				<img src={iconSun} alt="" />
				<AntSwitch inputProps={{ "aria-label": "ant design" }} />
				<img src={iconMoon} alt="" />
			</Stack>
		</FormGroup>
	);
}
