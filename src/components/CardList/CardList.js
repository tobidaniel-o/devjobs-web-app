import { jobsData } from "../../data";
import classes from "./CardList.module.css";

const CardList = () => {
	return (
		<div className={classes.cardContainer}>
			<ul>
				{jobsData.map((job) => {
					return (
						<li key={job.id}>
							<a
								href={job.website}
								target="_blank"
								rel="noreferrer"
							>
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
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CardList;
