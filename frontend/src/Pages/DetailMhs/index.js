// import Sidebar from "../../components/SideBar";
// import HomePage from "../components/Navbar";
// import ListProduct from "../components/ListProduct";
// import Footer from "../components/Footer";
import Sidebar from "../../components/SideBar";
import MhsList from "./MhsList.js";

function DetailMhs() {
	return (
		<div className="columns is-fullheight">
			<Sidebar />
			<MhsList />
		</div>

	)
}

export default DetailMhs;
