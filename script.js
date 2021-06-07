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

console.log(mybook)


let addBook = (title, quantity, value) => { 
    let newBook = new book(title, quantity, value)
    sampleStore.list.push(newBook)
}

addBook('Cinder', 10, 300)
console.log(sampleStore.list);