function store(name, list, earnings){
  this.name = name,
  this.list = list,
  this.earnings = earnings
}

//create instance of store
let sampleStore = new store("Avion Store", [], 0)

console.log(sampleStore)