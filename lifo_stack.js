class MyStack {
  constructor(itemNames) {
    this.itemNames = [];
  }
  push(newItem) {
    this.itemNames.push(newItem);
  }

  check() {
    console.log(this.itemNames);
  }

  pop() {
    // this.itemNames.shift();
    this.itemNames.pop();
  }
}

// MyQueue.push('something')
const Groceries = new MyStack();
Groceries.push("milk");
Groceries.push("eggs");
Groceries.push('bread');
Groceries.check();
Groceries.pop();
// console.log('popped');
Groceries.check();
// console.log('checked');
Groceries.pop();
// console.log('popped again');
Groceries.check();
// Groceries.pop();