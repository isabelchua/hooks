import React, { useState } from "react";

import "./App.css";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

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
	const [showDropdown, setShowDropdown] = useState(true);

	// const showAccordion = () => {
	// 	if (window.location.pathname === "/") {
	// 		return <Accordion items={items} />;
	// 	}
	// };

	// //const
	// const showList = () => {
	// 	if (window.location.pathname === "/list") {
	// 		return (
	// 			<Dropdown
	// 				selected={selected}
	// 				onSelectedChange={setSelected}
	// 				options={options}
	// 			/>
	// 		);
	// 	}
	// };

	// const showTranslate = () => {
	// 	if (window.location.pathname === "/translate") {
	// 		return <Translate />;
	// 	}
	// };

	return (
		<div className="App">
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="select a color"
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
			{/* {showAccordion()}
			{showList()}
			{showTranslate()} */}
			{/* <button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>
			{showDropdown && (
				<Dropdown
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/>
			)} */}
			{/* <Translate /> */}
			{/* <Search /> */}
			{/* <Accordion items={items} /> */}
		</div>
	);
}

export default App;
