// searchbar will have three main search features for desktop and tablet view
// 1. Search by title
// 2. Search by location
// 3. Search by full time only --> checkbox
// 4. A search button

// searchbar for mobile
// 1. the searchbar will have just one feature - it will only be able to search by title

import "../../base.css";
import classes from "./SearchBar.module.css";
import { jobsData } from "../../data";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchForm = () => {
	const handleChange = (e) => {
		console.log(e.target.value);
	};
	return (
		<>
			<div className={classes.formWrapper}>
				<form>
					<div className={classes.firstinput}>
						<div>
							<FaSearch
								color="#5964E0"
								fontWeight="bold"
								size="20"
								style={{
									marginTop: "6px",
								}}
							/>
						</div>
						<div>
							<label>
								<input
									type="text"
									placeholder="Filter by title, companies, expertise..."
									size="40"
									style={{ paddingLeft: "0.5rem" }}
									onChange={handleChange}
								/>
							</label>
						</div>
					</div>
					<div className={classes.secondinput}>
						<div>
							<FaMapMarkerAlt
								color="#5964E0"
								fontWeight="bold"
								size="20"
								style={{
									marginTop: "6px",
								}}
							/>
						</div>
						<label>
							<input
								type="text"
								placeholder="Filter by location..."
								style={{ paddingLeft: "0.5rem" }}
							/>
						</label>
					</div>
					<div className={classes.thirdinput}>
						<label>
							<input type="checkbox" name="fullTime" />
							&nbsp; Full Time Only
						</label>

						<button type="submit">Search</button>
					</div>
				</form>
			</div>
			<div className={classes.cardContainer}>
				<ul>
					{jobsData.map((job) => {
						return (
							<li key={job.id}>
								<div
									className={classes.logo}
									style={{
										backgroundColor: `${job.logoBackground}`,
									}}
								>
									<img src={job.logo} alt="" />
								</div>
								<div className={classes.postAndContract}>
									<div
										className={classes.postedAt}
									>{`${job.postedAt}`}</div>
									<span
										style={{
											marginTop: "-5px",
											marginBottm: "-5px",
											fontWeight: "strong",
											fontSize: "20px",
										}}
									>
										.
									</span>
									<div
										className={classes.contract}
									>{`${job.contract}`}</div>
								</div>
								<div
									className={classes.position}
								>{`${job.position}`}</div>
								<div className={classes.company}>
									{job.company}
								</div>
								<div className={classes.location}>
									{job.location}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default SearchForm;
