let BOOK = [];
let h1;
const addChilContainer = document.querySelector('.container1')
const addContainer = document.querySelector('.container2').children
const inputFirst = addContainer[0]
const inputSec = addContainer[1]


const handleAddBook = () => {
	console.log("bbdhbvh");
	
	try {
		BOOK.push({
			button : "Remove",
			title: inputFirst.value,
			author : inputSec.value
		})
		window.sessionStorage.setItem('book', JSON.stringify(BOOK))
	} catch (error) {
		console.log(error)
	}
}

const handleDeleteBook = () => {
	
}

const Book = window.sessionStorage.getItem('book')
if (Book) {
	BOOK = JSON.parse(Book)
	console.log(BOOK);
	BOOK.forEach((item) => {
		const div = document.createElement('div')
		addChilContainer.appendChild(div)
		 h1 = document.createElement('h4')
		div.appendChild(h1)
		h1.innerHTML = `<h3>Titre du livre : ${item.title}</h3> \n  
		<p>Nom de l'auteur : ${item.author} 
		 </p>\n  <button>${item.button}</button>`
		h1.children[2].addEventListener('click', () => {
			window.sessionStorage.removeItem('book')
		const malo =	BOOK.filter((element) => {
				return element != item
		})
			BOOK = malo
			
			window.sessionStorage.setItem('book',JSON.stringify(BOOK))
			
		})
		
		
	})
	
	
	
}



addContainer[2].addEventListener("click", () => {
	handleAddBook()
})


