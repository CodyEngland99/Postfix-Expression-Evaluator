class Stack {
	constructor() {
		this._items = [];
	}

	push(value) {
		this._items.push(value);
	}

	pop(operator) {
		console.log(this._items)
		const value1 = this._items.pop();
		const value2 = this._items.pop();

		switch (operator) {
			case "+": {
				this._items.push(value2 + value1);
				break;
			}
			case "-": {
				this._items.push(value2 - value1);
				break;
			}
			case "/": {
				this._items.push(value2 / value1);
				break;
			}
			case "*": {
				this._items.push(value2 * value1);
				break;
			}
		}
	}

	peek() {
		const result = this._items.length - 1;

		if (isNaN(this._items[0]) || this._items === undefined) {
			return false;
		}
		if (result === 0) {
			return this._items;
		}
	}

	isEmpty() {
		if (this._items.length === 0) {
			return;
		} else {
			this._items = [];
			return;
		}
	}

	clear() {
		this._items = [];
	}
}

export default Stack;
