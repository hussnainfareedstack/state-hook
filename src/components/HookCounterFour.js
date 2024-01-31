import React, { useState } from "react";

function HookCounterFour() {

	const [items, setItems] = useState([])

	const AddNumber =()=>{
		setItems([...items, { id: items.length, value: Math.floor((Math.random() * 10) + 1)}])
	}

  return (
		<div>
			<button onClick={AddNumber}>Add a Number</button>
			<ul>
				{
					items.map(x => <li key={x.id}> {x.value}</li>)
				}
			</ul>
		</div>
	);
}

export default HookCounterFour;
