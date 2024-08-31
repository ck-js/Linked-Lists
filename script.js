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
    console.log(count);
return count;
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
list1.append(1);
list1.append(2);
list1.prepend(3);
list1.size()


console.log(list1.HEAD); 
console.log(list1); 