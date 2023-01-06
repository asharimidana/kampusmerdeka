import { Link } from "react-router-dom";
function Sidebar() {
	return (
		<div className="colomn	is-2 mt-0" >
			<div className="colomn 	has-bakground-success" style={{  }}>
				<article class="pane is-success mt-6">
					<div className="columns is-2 is-centered mt-6 mb-4 px-6">
						<>
							<img alt="logo" style={{ "width": "160px" }} src="https://hasnurcentre.org/wp-content/uploads/2019/08/YHC-2019.png" />
						</>
					</div>
					<p class=" px-4 pl-5 has-text-left has-text-white has-background-success">
						Sistem Informasi Mahasiswa
					</p>
					<Link to={"/"} class="panel-block is-active">
						<span class="panel-icon mb-3 ml-3 mr-4">
							<i class="material-icons has-text-grey" >home</i>
						</span>
						Home
					</Link>
					<Link class="panel-block is-active">
						<span class="panel-icon mb-3 ml-3 mr-4">
							<i class="material-icons has-text-grey" >school</i>
						</span>
					 Data KRS 
					</Link>
					<Link class="panel-block is-active">
						<span class="panel-icon mb-3 ml-3 mr-4">
							<i class="material-icons has-text-grey" >note</i>
						</span>
					 Data KHS	
					</Link>
					<Link class="panel-block is-active">
						<span class="panel-icon mb-3 ml-3 mr-4">
							<i class="material-icons has-text-grey" >settings_applications</i>
						</span>
						Setting
					</Link>
					<Link class="panel-block is-active has-text-danger">
						<span class="panel-icon mb-3 ml-3 mr-4">
							<i class="material-icons has-text-danger">power_settings_new</i>
						</span>
						logout
					</Link>
				</article >
			</div>
		</div>
	);
}

export default Sidebar;
