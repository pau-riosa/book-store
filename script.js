function store(name, list, earnings){
  this.name = name,
  this.list = list,
  this.earnings = earnings
}

//create instance of store
let sampleStore = new store("Avion Store", [], 0)

// console.log(sampleStore)

function book(title, quantity, value){
  this.title = title,
  this.quantity = quantity,
  this.value = value
}

let mybook = new book('Harry Potter', 5, 500)




let addBook = (title, quantity, value) => { 
    let newBook = new book(title, quantity, value)
    sampleStore.list.push(newBook)
}

addBook('Cinder', 10, 300)
addBook('The Little Prince', 10, 300)
addBook("Lord of the RIngs", 2, 500)

store.prototype.restockBook = function (title, quantity) {
    this.list.some((book) => {
        if (book.title === title) {
            book.quantity += quantity;
        } 
    })
    console.log(this.list)
}

sampleStore.restockBook('Cinder', 5);
sampleStore.restockBook('Harry Potter', 4);