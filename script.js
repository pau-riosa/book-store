function store(name, list, earnings) {
  (this.name = name), (this.list = list), (this.earnings = earnings);
}

//create instance of store
let sampleStore = new store("Avion Store", [], 0);

function book(title, quantity, value) {
  (this.title = title), (this.quantity = quantity), (this.value = value);
}

let mybook = new book("Harry Potter", 5, 500);

store.prototype.addBook = function(title, quantity, value){
  let newBook= new book(title, quantity, value)
  this.list.push(newBook);
}

sampleStore.addBook("Cinder", 10, 300);
sampleStore.addBook("The Little Prince", 10, 300);
sampleStore.addBook("Lord of the RIngs", 2, 500);

store.prototype.restockBook = function (title, quantity) {
  this.list.some((book) => {
    if (book.title === title) {
      book.quantity += quantity;
    }
  });
  //console.log(this.list);
};

sampleStore.restockBook("Cinder", 5);
sampleStore.restockBook("Harry Potter", 4);

// ASSIGNMENT !!!!!
//sell book
store.prototype.sellBook = function (title, quantity) {
  //find the book in the list
  //const bookIndex = this.list.findIndex((book) => book.title === title);
  let bookToBeSold = this.list.find(book => book.title === title);

  //console.log(bookToBeSold)
  if(bookToBeSold !== undefined){
    // update quantity
    if(bookToBeSold.quantity >= quantity){
      bookToBeSold.quantity -=  quantity;
    // update earnings
      this.earnings += bookToBeSold.value * quantity;
      console.log(`Transaction Successful!`)  
    }else{
      console.log(`Sorry! We only have ${bookToBeSold.quantity} copies of ${bookToBeSold.title} left`)
    }
  }else {
    console.log(`We don't sell that book here`);
  }  
};

sampleStore.sellBook("Cinder", 16);
sampleStore.sellBook("The Little Prince", 100);


store.prototype.totalEarnings = function () {
  console.log(`Store name is ${this.name} with earnings of ${this.earnings}`);
};

sampleStore.totalEarnings();

store.prototype.listInventory = function () {
  this.list.map((book) => {
  console.log(`${book.title}, ${book.quantity}, ${book.value}`);
  });
};

sampleStore.listInventory();
