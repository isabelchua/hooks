import React, { useState } from "react";

import "./App.css";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
	{
		title: "What is React?",
		content: "React is a front end framework"
	},
	{
		title: "What is React? 2",
		content: "React is a front end framework"
	},
	{
		title: "What is React? 3",
		content: "React is a front end framework"
	}
];

const options = [
	{
		label: "The Color Red",
		value: "red"
	},
	{
		label: "The Color Blue",
		value: "blue"
	},
	{
		label: "The Color Green",
		value: "green"
	}
];

function App() {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div className="App">
			<Dropdown
				selected={selected}
				onSelectedChange={setSelected}
				options={options}
			/>
			{/* <Search /> */}
			{/* <Accordion items={items} /> */}
		</div>
	);
}

export default App;
