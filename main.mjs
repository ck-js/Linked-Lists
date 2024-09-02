import LinkedList from "./script.mjs";


// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");


console.log(list.size());
console.log(list.toString());
console.log(list.head());
console.log(list.tail());
