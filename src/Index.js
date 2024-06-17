import Stack from "./Stack";
import Variables from "./Variables";
import "./css/style.css";

class ExpressionHandling {
	constructor() {
		this._stack = new Stack();
		this._variables = new Variables();
		this._expression = document.getElementById("expression");
		this._subBtn = document
			.getElementById("submit-btn")
			.addEventListener("click", this._validateInput.bind(this));
		this._separation = document
			.getElementById("toggleSwitch")
			.addEventListener("change", this._separationInfo.bind(this));
		this._resultsContainer = document.getElementById("result");
		this._stack.isEmpty();
		this._letterRegex = /[a-zA-Z]/;
		this._operators = ["+", "-", "/", "*"];
	}

	_separationInfo() {
		const slider = document.getElementById("slider-info");

		if (toggleSwitch.checked) {
			slider.innerHTML = `Disable Space Separation e.g 54 considered as 5 and 4`;
			return false;
		} else {
			slider.innerHTML = `Enable space-separated digits e.g. treat "65" as one number in "65
        +"`;
			return true;
		}
	}

	_validateInput() {
		if (this._expression.value === "" || this._expression.value === undefined) {
			alert("Please fill out input field");
			return;
		}

		if (this._separationInfo()) {
			const value = this._expression.value.replace(/\s+/g, "").split("");
			this._sortExpression(value);
		} else {
			const value = this._expression.value.split(" ");
			this._sortExpression(value);
		}
	}

	_sortExpression(values) {
		values.forEach((value) => {
			if (this._letterRegex.test(value)) {
				const returnedValue = this._variables.returnLetterValue(
					value.toUpperCase()
				);

				this._stack.push(returnedValue);
			}

			if (!isNaN(value)) {
				this._stack.push(parseFloat(value));
			}

			if (this._operators.includes(value)) {
				this._stack.pop(value);
			}
		});

		this._displayExpression();
	}

	_displayExpression() {
		const result = this._stack.peek();

		if (result) {
			this._resultsContainer.innerHTML = `
			<p class="solution"> ${this._expression.value} = ${result} </p>
		`;
		} else {
			this._resultsContainer.innerHTML = `
			<p class="solution">Invalid Expression</p>
		`;
		}

		this._expression.value = "";
		this._stack.clear();
	}
}

function init() {
	new ExpressionHandling();
}

init();
