import React from "react";



const ListItem = (props) => {
	return (
		props.list.map((item, index) => {
			return (
				<li key={item + index} className="d-flex justify-content-between">
					<span className="list-group-item w-100 border-end-0 border-start py-3">{item}</span>
					<button onClick={() => props.remove(item)} className="btn border border border-start-0 rounded-0">X</button>
				</li>
			)
		})
	)
}


export default ListItem;