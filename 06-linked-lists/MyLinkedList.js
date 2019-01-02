class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(value, n) {
    // if n is greater than or equal to the length of the list, just append the value as a newNode.
    if (n >= this.length) {
      return this.append(value);
    }
    // if n is less than or equal to zero, just prepend the value as a newNode.
    if (n <= 0) {
      return this.prepend(value);
    }
    // traverse the list incrementing n by one each time.
    let currentNode = this.head;
    for (let j = 0; j < (n - 1); j++) {
      currentNode = currentNode.next;
    }
    // when we reach n - 1, create a new node with the input value.
    let newNode = new Node(value)
    // make the new node's next point to (n - 1)' next.
    let nextNode = currentNode.next;
    newNode.next = nextNode;
    // make (n - 1)'s next point to the new node.
    currentNode.next = newNode;
    this.length++
    return this
  }
}