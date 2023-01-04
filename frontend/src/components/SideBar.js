import { Link } from "react-router-dom";
function Sidebar() {
	return (
		<div className="colomn	is-2 mt-5" style={{"height": "100%"}}>
			<div className="colomn 	has-bakground-light	" style={{ "border": "solid grey 1px" }}>
				<article class="pane is-success">
					<p class="panel-heading is-info">
						Sistem Informasi
					</p>
					<Link class="panel-block is-active">
						<span class="panel-icon">
							<i class="fas fa-book" aria-hidden="true"></i>
						</span>
						bulma
					</Link>
					<Link class="panel-block is-active">
						<span class="panel-icon">
							<i class="fas fa-book" aria-hidden="true"></i>
						</span>
						bulma
					</Link>
					<Link class="panel-block is-active">
						<span class="panel-icon">
							<i class="fas fa-book" aria-hidden="true"></i>
						</span>
						bulma
					</Link>
					<Link class="panel-block is-active">
						<span class="panel-icon">
							<i class="fas fa-book" aria-hidden="true"></i>
						</span>
						bulma
					</Link>
					<Link class="panel-block is-active">
						<span class="panel-icon">
							<i class="fas fa-book" aria-hidden="true"></i>
						</span>
						bulma
					</Link>
					<Link class="panel-block is-active">
						<span class="panel-icon">
							<i class="fas fa-book" aria-hidden="true"></i>
						</span>
						bulma
					</Link>
				</article >
			</div>
		</div>
	);
}

export default Sidebar;
