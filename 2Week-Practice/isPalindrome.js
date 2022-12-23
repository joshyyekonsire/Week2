
let myWord = 'DANIEL'
let wordArray;
let reverseArray;

function splitConst(word) {
	constArray = word.split('');
	return constArray
}
console.log(splitConst(myWord))

function palindrome(word) {
	wordArray = word.split('');
	console.log(`wordArray: ${wordArray}`)
	reverseArray = wordArray.reverse('')
	console.log(`reverseArray: ${reverseArray}`)
}
let trueFalse;
let palindromeMyWord = palindrome(myWord);


arrayLength = constArray.length + 1
for(let i = 0; i < constArray.length; i++) {
	for(let j = reverseArray.length-1; j > 0; j--) {
		if(reverseArray[j] === constArray[i]) {
			trueFalse = true
		} else {
			trueFalse = false
		}
}

} console.log (trueFalse)

