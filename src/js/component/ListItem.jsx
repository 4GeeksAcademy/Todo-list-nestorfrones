import React from "react";



const ListItem = (props) => {
	return (
		props.list.map((item) => {
			return (
				<div className="d-flex justify-content-between">
					<li key={item.id} className="list-group-item w-100">{item}</li>
					<button onClick={() => props.remove(item)} className="btn">X</button>
				</div>
			)
		})
	)
}


export default ListItem;