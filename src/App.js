import "./App.css";
import Header from "./components/layout/Header/Header";
import LogoToggle from "./components/layout/LogoToggle/LogoToggle";
import SearchBar from "./components/SearchBar/SearchBar";
import CardList from "./components/CardList/CardList";
import { useEffect, useState } from "react";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchByLocation, setSearchByLocation] = useState("");
	const [checkboxChecked, setCheckboxChecked] = useState(false);
	const [jsonData, setJsonData] = useState([]);

	const fetchData = () => {
		fetch("http://localhost:3000/jobs")
			.then((response) => response.json())
			.then((data) => setJsonData(data))
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		fetchData();
	}, [searchTerm, searchByLocation, checkboxChecked]);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleJobLocationChange = (e) => {
		setSearchByLocation(e.target.value);
	};

	const handleCheckbox = (e) => {
		setCheckboxChecked(e.target.checked);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (searchTerm.length) {
			const searchedJobDetails = jsonData.filter(
				(searchedJob) =>
					searchedJob.company
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					searchedJob.position
						.toLowerCase()
						.includes(searchTerm.toLowerCase())
			);
			setJsonData(searchedJobDetails);
		}
		if (searchByLocation.length) {
			const searchedJobByLocation = jsonData.filter((jobByLocation) =>
				jobByLocation.location
					.toLowerCase()
					.includes(searchByLocation.toLowerCase())
			);
			setJsonData(searchedJobByLocation);
		}

		if (checkboxChecked) {
			const fullTimeChecked = jsonData.filter(
				(jobByContract) => jobByContract.contract === "Full Time"
			);
			setJsonData(fullTimeChecked);
			console.log(fullTimeChecked);
		}
	};
	return (
		<>
			<Header />
			<div className="wrapper">
				<div style={{ position: "relative", top: "-120px" }}>
					<LogoToggle />
					<SearchBar
						onSearch={handleChange}
						onSearchLocation={handleJobLocationChange}
						handleSubmit={handleFormSubmit}
						handleCheckbox={handleCheckbox}
						allSearch={searchTerm}
						location={searchByLocation}
					/>
				</div>
				<CardList list={jsonData} />
			</div>
		</>
	);
}

export default App;
