class Node {
  constructor(value = null, nextNode = null) {
   this.value = value;
   this.nextNode = nextNode; //Este es el puntero.
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode; //Aqui estamos recorriendo la lista
      }
      currentNode.nextNode = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  getSize() {
    console.log(this.size);
  }

  getHead() {
    let currentNode = this.head;
    console.log(currentNode)
  }

  getTail() {
    let currentNode = this.head;
    if (!currentNode) return null;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode; //Esto es para iterar la lista, porque para encontrar el último nodo tenemos que iterar.
    }
    console.log(currentNode);
  }

  findByIndex(index) {
    if (index < 0) return null;

    let currentNode = this.head;
    let currentIndex = 0;

    while(currentNode) {
      if (currentIndex === index) {
        console.log(currentNode);
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return null;
  }

  pop() {
    let currentNode = this.head;
    //Por si la lista esta vacia
    if (!currentNode) return null;

    //Por si la lista tiene solamente un elemento.
    if (!currentNode.nextNode) {
      const removedNode = this.head;
      this.head = null;
      this.size--;
      console.log(removedNode);
    }

    //Para cuando la lista tiene mas de un elemento
    while (currentNode.nextNode && currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    const removedNode = currentNode.nextNode; //Guardando el ultimo nodo
    currentNode.nextNode = null; //Eliminando la referencia al ultimo nodo
    this.size--;

    return removedNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
       return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  findByValue(value) {
    if (!this.head) return null;
    
    let currentNode = this.head;
    let currentIndex = 0;
    while(currentNode) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return null;
  }

  toString() {
    if (!this.head) return null;

    let currentNode = this.head;
    // let currentIndex = 0; 
    let newArray = [];

    while (currentNode) {
      newArray.push(`(${currentNode.value})`);
      newArray.push(currentNode.nextNode ? ' -> ' : ' -> null ');
      currentNode = currentNode.nextNode;
    }
    return newArray.join('');
  }
}

const newList = new LinkedList();
newList.append(2);
newList.append(3);
newList.append(4);
newList.prepend(1);
newList.append(5);
newList.append(6)
// console.log(newList);
// console.log(newList.contains(4))
// console.log(newList.contains(10))
console.log(newList.toString())

