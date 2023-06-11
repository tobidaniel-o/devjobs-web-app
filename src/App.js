import "./App.css";
import Header from "./components/layout/Header/Header";
import LogoToggle from "./components/layout/LogoToggle/LogoToggle";
import SearchBar from "./components/SearchBar/SearchBar";
import CardList from "./components/CardList/CardList";
import { jobsData } from "./data";
import { useState } from "react";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchByLocation, setSearchByLocation] = useState("");

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const searchedJobDetails = jobsData.filter(
		(searchedJob) =>
			searchedJob.company
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			searchedJob.position
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
	);

	const handleJobLocationChange = (e) => {
		setSearchByLocation(e.target.value);
	};

	// const searchedJobByLocation = jobsData.filter((searchedJob) =>
	// 	searchedJob.location
	// 		.toLowerCase()
	// 		.includes(searchByLocation.toLowerCase())
	// );

	return (
		<>
			<Header />
			<div className="wrapper">
				<div style={{ position: "relative", top: "-120px" }}>
					<LogoToggle />
					<SearchBar
						onSearch={handleChange}
						// onSearchLocation={handleJobLocationChange}
					/>
				</div>
				<CardList list={searchedJobDetails} />
			</div>
		</>
	);
}

export default App;
