import "./App.css";
import Header from "./components/layout/Header/Header";
import LogoToggle from "./components/layout/LogoToggle/LogoToggle";
import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/CardList/CardList";
import { jobsData } from "./data";

function App() {
	console.log(jobsData);
	return (
		<>
			<Header />
			<div className="wrapper">
				<div style={{ position: "relative", top: "-120px" }}>
					<LogoToggle />
					<SearchBar />
				</div>
				<Card list={jobsData} />
			</div>
		</>
	);
}

export default App;
