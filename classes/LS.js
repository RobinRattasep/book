class LS {
	// help functions to get and set data at LS
	getData() {
		let data;
		if(localStorage.getItem('books') === null){
			data = [];
		} else {
			data = JSON.parse(localStorage.getItem('books'));
		}
		return data;
	}

	setData(name, data){
		localStorage.setItem(name, JSON.stringify(data));
	}

	// add task to LS
	addBook(book) {
		// set data t oLS
		let books = this.getData();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}

	// delete task from LS
	deleteBook(book) {
		let books = this.getData();
		books.forEach(function(booksElement, booksIndex){
			if(booksElement.isbn == book){
				books.splice(booksIndex, 1);
			}
		});
		this.setData('books', books)
	}
}