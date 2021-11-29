import React from "react";
import "../../styles/Nav.scss";
const Top = props => {
	return (
		<table className="table table-dark table-striped ">
			<table className="table">
				<thead>
					<tr className="text-light">
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-light">
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
				</tbody>
			</table>
		</table>
	);
};
export default Top;
