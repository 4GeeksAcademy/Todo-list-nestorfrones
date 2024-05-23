import React, { useState } from "react";
import ListItem from "./ListItem";


const Home = () => {

	const [listItem, setListItem] = useState("");
	const [list, setList] = useState([]);
	const [menssagge, setMenssagge] = useState(true);


	function addItemList(e) {
		if (e.key == "Enter") {
			setList([...list, listItem])
			setMenssagge(false)
		}
	}

	function removeItemList(listItemToRemove) {
		const newList = list.filter((item) => item !== listItemToRemove);
		setList(newList);
		if (newList.length === 0) {
			setMenssagge(true)
		}
		if (newList.length !== 0) {
			setMenssagge(false)
		}
	}
	console.log(menssagge);



	return (
		<div className="container my-5">
			<h1 className="text-center">todo</h1>
			<input className="w-100" type="text" placeholder="ingrese tarea" onChange={(event) => setListItem(event.target.value)} onKeyDown={(e) => addItemList(e)} />
			<ul className="list-group w-100 d-flex justify-content-between">
				<h5 className={menssagge ? "" : "d-none"}>No hay tareas pendientes</h5>
				<ListItem list={list} remove={removeItemList} />
			</ul>
		</div>
	)
};

export default Home;






