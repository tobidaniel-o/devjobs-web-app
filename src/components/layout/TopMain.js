import SearchForm from "../SearchForm";
import LogoToggle from "./LogoToggle";

const TopMain = () => {
	return (
		<div style={{ position: "relative", top: "-120px" }}>
			<LogoToggle />
			<SearchForm />
		</div>
	);
};

export default TopMain;
