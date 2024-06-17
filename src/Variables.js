class Variables {
	constructor() {
		this._variables = {
			A: 1,
			B: 2,
			C: 3,
			D: 4,
			E: 5,
			F: 6,
			G: 7,
			H: 8,
			I: 9,
			J: 10,
			K: 11,
			L: 12,
			M: 13,
			N: 14,
			O: 15,
			P: 16,
			Q: 17,
			R: 18,
			S: 19,
			T: 20,
			U: 21,
			V: 22,
			W: 23,
			X: 24,
			Y: 25,
			Z: 26,
		};

		// getting html ele for letters
		this._letterContainer = document.querySelectorAll(".letter");
		//getting clear btn and adding listener to it
		document
			.getElementById("clear-variables")
			.addEventListener("click", this._clearVariables.bind(this));
		//setting default values
		this._defaultVariables();
		//event listener for change of value to letter
		this._letterContainer.forEach((event) => {
			event.addEventListener("input", (event) => {
				const newValue = event.target.value;
				const letterTarget = event.target.name;

				this._newValue(newValue, letterTarget);
			});
		});
	}

	returnLetterValue(value) {
		return this._variables[value];
	}

	_defaultVariables() {
		//setting default values to variables
		let i = 1;

		this._letterContainer.forEach((letter) => {
			letter.value = i;
			i++;
		});
	}

	_clearVariables() {
		//setting default values to variables
		let i = "";

		this._letterContainer.forEach((letter) => {
			letter.value = i;
		});

		this._variables = {};
	}

	_newValue(value, letter) {
		this._variables[letter] = parseFloat(value);
		console.log(this._variables);
	}
}
export default Variables;
