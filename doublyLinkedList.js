const { inherits } = require('util');

class Node {
	constructor(val, next, prev) {
		this.next = next;
		this.prev = prev;
		this.val = val;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	pushNode(val) {
		let node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			let tail = this.tail;
			this.tail = node;
			node.prev = tail;
			tail.next = node;
		}
		this.length++;
	}

	popNode() {
		if (!this.head) return undefined;
		let temp = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = temp.prev;
			this.tail.next = null;
			temp.prev = null;
		}
		this.length--;
	}

	unshiftNode(val) {
		let node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			node.prev = null;
			this.head = node;
		}
		this.length++;
	}

	shiftNode() {
		if (!this.head) return undefined;
		let temp = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			temp.next = null;
		}
		this.length--;
	}

	getIndex(num) {
		if (num < 0 && num >= this.length) return null;
		let curr = this.head;
		for (let i = 0; i < num; i++) {
			curr = curr.next;
		}
		return curr;
	}

	addAtIndex(index, val) {
		if (index === 0) return this.unshiftNode(val);

		let node = new Node(val);
		let curr = this.getIndex(index - 1);
		if (curr === null) return null;

		if (curr.next == null) {
			return this.pushNode(val);
		}
		node.next = curr.next;
		node.prev = curr;
		curr.next.prev = node;
		curr.next = node;

		this.length++;
	}

	print() {
		let curr = this.head;
		let list = '';
		while (curr) {
			list = `${list}${curr.val} ->`;
			curr = curr.next;
		}
		return `${list}null`;
	}
}

const list = new LinkedList();

list.pushNode(2);
list.pushNode(3);
list.pushNode(4);
list.addAtIndex(3, 12);

console.log(list.print());
