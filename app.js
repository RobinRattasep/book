ui = new UI();
ls = new LS();

// event elements
// form submit events
const form = document.querySelector('form');

const bookTitleInput = document.querySelector('#title');
const bookAuthorInput = document.querySelector('#author');
const bookIsbnInput = document.querySelector('#isbn')
const bookList = document.querySelector('tbody.table-list');

document.addEventListener('DOMContentLoaded', getBooks);

//events
// form submit event
form.addEventListener("submit", addBook);

bookList.addEventListener('click', deleteBook);

function addBook(e){
	const bookTitle = bookTitleInput.value;
	const bookAuthor = bookAuthorInput.value;
	const bookIsbn = bookIsbnInput.value;
	let newBook = new book(bookTitle, bookAuthor, bookIsbn)
	ui.addBook(newBook)
	ls.addBook(newBook)
	e.preventDefault();
}

function deleteBook(e){
	if(e.target.tagName === 'A'){
		let book = e.target.parentElement.firstChild;
	ui.deleteBook(book);
	book = book.parentElement.previousElementSibling.textContent;
	// delete tasks from LS
	ls.deleteBook(book);	
	}
	
}



function getBooks(){
	books = ls.getData();
	books.forEach(ui.getBooks.bind(books));
}