class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    console.log(newNode);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    console.log(this);
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // index 1
    if (index === 0) {
      const followerNode = this.head.next;
      this.head.next = followerNode.next;
      followerNode.prev = null;
      this.head = followerNode;
      console.log(this.printList());
      return this;
    }

    index = index >= this.length ? this.length - 1 : index;

    const leaderNode = this.traverseToIndex(index - 1);
    // 3  x 5x -> 15/null
    //   \
    //     15
    const deleteNode = leaderNode.next;
    if (deleteNode.next === null) {
      leaderNode.next = null;
      this.tail = leaderNode;
    } else {
      leaderNode.next = deleteNode.next;
      deleteNode.next.prev = leaderNode;
    }
    // leaderNode.next = deleteNode.next;
    // deleteNode.next.prev = leaderNode;
    // console.log(leaderNode.next);
    console.log(this.printList());
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88)
// myLinkedList.printList()
console.log(myLinkedList.printList());
myLinkedList.remove(4);
console.log(myLinkedList);

// myLinkedList.reverse()
