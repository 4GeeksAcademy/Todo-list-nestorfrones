import React from "react";



const ListItem = (props) => {
	return (
		props.list.map((item) => {
			return (
				<div className="d-flex justify-content-between">
					<li key={item.id} className="list-group-item w-100 border-end-0 border-start py-3">{item}</li>
					<button onClick={() => props.remove(item)} className="btn border border border-start-0 rounded-0">X</button>
				</div>
			)
		})
	)
}


export default ListItem;