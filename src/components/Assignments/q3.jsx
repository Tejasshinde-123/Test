import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [counter, setCounter] = useState(0);
	const btn = () => {

		setCounter(counter + 1);
	};
	

	return (
		<div>
		<h1>Counter</h1>
				{counter} <br></br>
			<button onClick={btn} >Increment</button>
			</div>		
	);			
};		
export default App;      
				
					
				
				
			
	



