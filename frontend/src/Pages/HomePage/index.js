import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/SideBar";
import MhsList from "./MhsList.js";
import { Link } from "react-router-dom";

function HomePage() {
	const [query, setQuery] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`http://localhost:5000/s/?q=${query}`);
			setData(res.data);
		};
		if (query.length === 0 || query.length > 2) fetchData();
	}, [query]);
	return (
		<div className="columns is-fullheight">
			<Sidebar />
			<div className="column is-10 pr-5 pl-0">
				<div className="column pl-0" style={{ "border-left": "solid hsl(0, 0%, 71%) 1px" }}>
					<div className="columns pl-3 pt-5">
						<div className="column is-4">
							<Link to={`mhs`} className="button is-success is-small">
								Add New
							</Link>
						</div>
						<input
							type="text"
							className="input column is-3 mt-2"
							onChange={(e) => setQuery(e.target.value.toLowerCase())}
							placeholder="Search..."
						/>
						<div className="column is-">
							Filter
						</div>
					</div>
					{<MhsList data={data} />}
				</div>
			</div>
		</div>
	)
}

export default HomePage;
