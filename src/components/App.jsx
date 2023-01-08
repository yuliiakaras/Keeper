import React, {useState} from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
// import notes from "../notes.js"
import CreateArea from "./CreateArea.jsx"
function App () {
	const [item, setItem] = useState({
		title: "",
		content: ""
	});
	const [itemArr, setItemArr] = useState([]);

	function addItem(event) {
		setItemArr((prevItems) => {
			return [...prevItems, item]
		})

		console.log(itemArr);
		setItem("");
		event.preventDefault();
	}

	function handleChange(event) {
		const {name, value} = event.target;
		setItem((prevValue) => {
			return {...prevValue,
						[name]: value}
		});
	}

	function deleteItem(id) {
		console.log(id)
		setItemArr((prevItems) => {
			return prevItems.filter((item, index) => {
				return index !== id;
			})
		})
	}

	return <div>
		<Header />
		<CreateArea 
		 handleChange={handleChange}
		 addItem={addItem}
		 />
		{itemArr.map((item, index) => 
			<Note 
				key={index}
				id={index}
				title={item.title}
				text={item.content}
				deleteItem={deleteItem}
			/>
		)}

		 
		<Footer />
	</div>
}

export default App;