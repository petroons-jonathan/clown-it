
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('inputLength');
const uppercaseEl = document.getElementById('inputCaps');
const lowercaseEl = document.getElementById('inputMinus');
const numbersEl = document.getElementById('inputDigit');
const symbolsEl = document.getElementById('inputSymbol');
const generateEl = document.getElementById('inputButton');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}


generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// copy to clipboard

clipboard.addEventListener("click", () => {
const textarea = document.createElement("textarea");
const password = resultEl.innerText;

if(!password){
 return;
};

textarea.value = password;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
textarea.remove();
alert("Copied !");

});


// function generatePassword(lower, upper, number, symbol, length) {
// 	let generatedPassword = '';
// 	const typesCount = lower + upper + number + symbol;
//   console.log("typesCount", typesCount);
// 	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
// 	// Doesn't have a selected type
// 	if(typesCount === 0) {
// 		return '';
// 	}
	
// 	// create a loop
// 	for(let i=0; i<length; i+=typesCount) {
// 		typesArr.forEach(type => {
// 			const funcName = Object.keys(type)[0];
//       console.log(funcName);
// 			generatedPassword += randomFunc[funcName]();

// 		});
// 	}
// 	const finalPassword = generatedPassword.slice(0, length)
	
	
	
// 	return finalPassword;
// }

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// Generate array of random characters for each selected type
	const charArr = [];
	typesArr.forEach(type => {
		const funcName = Object.keys(type)[0];
		for(let i = 0; i < Math.ceil(length / typesCount); i++){
			charArr.push(randomFunc[funcName]());
		}
	});

	// Shuffle the array randomly
	const finalPassword = charArr.sort(() => Math.random() - 0.5).join('').slice(0, length);
	
	return finalPassword;
}


function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
