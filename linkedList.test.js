const LinkedList = require('./linkedList');

describe('#insertAtHead', () => {
	test('should add the element to the beginning of the list', () => {
		const ll = new LinkedList();
		ll.insertAtHead(10);
		const oldHead = ll.head;
		ll.insertAtHead(20);

		expect(ll.head.value).toBe(20);
		expect(ll.head.next).toBe(oldHead);
		expect(ll.length).toBe(2);
	});
});

describe('#getByIndex', () => {
	describe('with index less than zero', () => {
		test('it returns null', () => {
			const ll = LinkedList.fromValue(10, 20);
			expect(ll.getByIndex(-1)).toBeNull();
		});
	});

	describe('with index greater than list length', () => {
		test('it returns null', () => {
			const ll = LinkedList.fromValue(10, 20);
			expect(ll.getByIndex(5)).toBeNull();
		});
	});

	describe('with index 0', () => {
		test('it returns the head', () => {
			const ll = LinkedList.fromValue(10, 20);
			expect(ll.getByIndex(0).value).toBe(10);
		});
	});

	describe('with index in the middle', () => {
		test('it returns the element of the index', () => {
			const ll = LinkedList.fromValue(10, 20, 30, 40);
			expect(ll.getByIndex(2).value).toBe(30);
		});
	});
});

describe('#insertedAtIndex', () => {
	describe('with index less than zero', () => {
		test('it does not insert anything', () => {
			const ll = LinkedList.fromValue(10, 20);
			ll.insertAtIndex(-1, 30);

			expect(ll.length).toBe(2);
		});
	});

	describe('with index greater than list length', () => {
		test('it does not insert anything', () => {
			const ll = LinkedList.fromValue(10, 20);
			ll.insertAtIndex(5, 30);

			expect(ll.length).toBe(2);
		});
	});

	describe('with index 0', () => {
		test('it should inserted at head', () => {
			const ll = LinkedList.fromValue(10, 20);
			ll.insertAtIndex(0, 30);

			expect(ll.head.value).toBe(30);
			expect(ll.head.next.value).toBe(10);
			expect(ll.length).toBe(3);
		});
	});

	describe('with index in the middle', () => {
		test('it should inserted in the middle', () => {
			const ll = LinkedList.fromValue(10, 20, 30, 40);
			ll.insertAtIndex(2, 50);
			const node = ll.getByIndex(2);

			expect(node.value).toBe(50);
			expect(node.next.value).toBe(30);
			expect(ll.length).toBe(5);
		});
	});
});

describe('#removeHead', () => {
	test('should remove the head node', () => {
		const ll = LinkedList.fromValue(10, 20, 30);
		ll.removeHead();

		expect(ll.head.value).toBe(20);
		expect(ll.length).toBe(2);
	});
});

describe('#removeAtIndex', () => {
	describe('with index less than zero', () => {
		test('it does not insert anything', () => {
			const ll = LinkedList.fromValue(10, 20);
			ll.removeAtIndex(-1);

			expect(ll.length).toBe(2);
		});
	});

	describe('with index greater than list length', () => {
		test('it does not remove anything', () => {
			const ll = LinkedList.fromValue(10, 20);
			ll.removeAtIndex(5);

			expect(ll.length).toBe(2);
		});
	});

	describe('with index 0', () => {
		test('it should remove at head', () => {
			const ll = LinkedList.fromValue(10, 20, 30);
			ll.removeAtIndex(0);

			expect(ll.head.value).toBe(20);
			expect(ll.head.next.value).toBe(30);
			expect(ll.length).toBe(2);
		});
	});

	describe('with index in the middle', () => {
		test('it should remove in the middle', () => {
			const ll = LinkedList.fromValue(10, 20, 30, 40);
			ll.removeAtIndex(2);
			const node = ll.getByIndex(1);

			expect(node.value).toBe(20);
			expect(node.next.value).toBe(40);
			expect(ll.length).toBe(3);
		});
	});
});
