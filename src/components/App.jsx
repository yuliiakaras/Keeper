import React, {useState} from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

import CreateArea from "./CreateArea.jsx"
function App () {
	
	const [itemArr, setItemArr] = useState([]);

	function addItem(item) {
		setItemArr((prevItems) => {
			return [...prevItems, item]
		})
	}
	
	function deleteItem(id) {
		setItemArr((prevItems) => {
			return prevItems.filter((item, index) => {
				return index !== id;
			})
		})
	}

	return <div>
		<Header />
		<CreateArea 
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