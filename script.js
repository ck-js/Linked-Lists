// linkedList class which will represent full list
class LinkedList {
constructor() {
    this.HEAD = null
}
    
    append(value) {
      const newNode = new Node(value);
  
      if (this.HEAD === null) {
        this.HEAD = newNode;
        return;
      }

      // traverse the list 
        let current = this.HEAD;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;

    }
prepend(value) {
const newNode = new Node(value);
const currentHead = this.HEAD;
this.HEAD = newNode;
newNode.next = currentHead;
}
size() {
    let current = this.HEAD;
    let count = 0;
    while (current !== null) {
        count++;
        current = current.next;
    }
    
return count;
}
head() {
if (!this.HEAD) return null;
    return this.HEAD;
}
tail() {
    if (!this.HEAD) return null;

    let current = this.HEAD;
    while (current.next !== null) {
        current = current.next;
    }
    return current;
    
}
at(index) {
    if (!this.HEAD) return null;

    let array = [];
    let current = this.HEAD;
    while (current) {
        array.push(current.value);
        current = current.next;
    }
    
    return array[index];
}
// pop removes the last node from the list
pop() {
    if (!this.HEAD) return null;
    if (!this.HEAD.next) {
        const removedValue = this.HEAD.value;
        this.HEAD = null;
        return removedValue
    }
    let current = this.HEAD;
    let previous = null;
    // traverse to second last node
    while (current.next) {
        previous = current;
        current = current.next;
    }
    const removedValue = current.value;
    previous.next = null;

    return removedValue;

}
// contains method checks if the list contains a value
contains(value) {
    let current = this.HEAD;
    while (current) {
        if (current.value === value) return true;
        current = current.next;
    }
    return false;
}
find(value) {
    let current = this.HEAD;
    let array = [];
    while (current) {
        array.push(current.value);
        if (current.value === value) 
            return array.length - 1;
        current = current.next;
    }
    return null;
}
toString(){
    let current = this.HEAD;
    let string = '';
    while (current) {
        // string += current.value + ' ';
        string += `( ${current.value} ) ->`;
        current = current.next;
    }
    return `${string} null`
}
insertAt(value, index) {
const newNode = new Node(value);
let current = this.HEAD;

if (index === 0) {
    newNode.next = this.HEAD;
this.HEAD = newNode;
return;

}
let previous = null;
let count = 0;
while (count < index) {
    count++;
    previous = current;
    current = current.next;
}
previous.next = newNode;
newNode.next = current;


}


  };

    // node class containing a value property and link to next node
    class Node {
        constructor(value) {
          this.value = value;
          this.next = null;
        }
      }
    
const list1 = new LinkedList();
// list1.append(1);
// list1.append(2);
// list1.prepend(3);
// list1.append(4);
list1.insertAt(5, 0);

// list1.pop()
// list1.pop()
const firstNode = list1.head();
const lastNode = list1.tail();
const getByIndex = list1.at(3)


console.log(list1.toString());
// console.log(list1.find(4));
// console.log(list1.contains(0));
// console.log(list1.size())
// console.log(getByIndex);
console.log(lastNode);
// console.log(firstNode);
console.log(list1.head()); 
