// Write a word here and see if it has more vowels or consonants!


let myWord = 'DANIEL BROWN'
        console.log('---------------------------')
        console.log(`Word: ${myWord}`)
        console.log('---------------------------')
let vowels = ['A', 'E', 'I', 'O', 'U'];

newArray = [];

let consonant = [
	'B', 'C', 'D', 'F', 'G', 
	'H', 'J', 'K', 'L', 'M', 
	'N', 'P', 'Q', 'R', 'S', 
	'T', 'V', 'W', 'X', 'Y', 'Z'];
	consArray = [];

function hasMoreVowels(word) {
	arr = word.split('')
	for(let j = 0; j < vowels.length; j++) {
		for(i = 0; i < arr.length; i++) {
			if(vowels[j] === word[i]) {
				newArray.push(word[i])
			}
		}
	}
	return newArray.length
}

function hasMoreConsonant(word) {
	arr = word.split('')
	for(let w = 0; w < consonant.length; w++) {
		for(q = 0; q < arr.length; q++) {
			if(consonant[w] === word[q]) {
				consArray.push(word[q])
			}
		}
	}
	return consArray.length
}

let numberOfCons = hasMoreConsonant(myWord)
let numberOfVow = hasMoreVowels(myWord)
if(numberOfCons > numberOfVow) {
	console.log('Has more vowels? ' + false)
    console.log('Vowels < Consonants')
} else if(numberOfCons < numberOfVow) {
	console.log('Has more vowels? ' + true)
    console.log('Vowels > Consonants')
} else if(numberOfCons === numberOfVow) {
	console.log('Has more vowels? ' + false)
    console.log('Vowels = Consonants')
}

console.log(`Consonants: ${numberOfCons}`)
console.log(`Vowels: ${numberOfVow}`)
console.log(`Total letters: ${numberOfCons+numberOfVow}`)


