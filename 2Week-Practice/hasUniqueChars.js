
console.log ('This word has unique characters')

let chars = [];
function hasUniqueChars (word) {
word
}

function findRepeat(str) {
  chars.push(str.split(''))
  
  for (let i = 0; i < chars.length; i++){
    for (let j = 0; j < chars.length; j++) {
    if (chars[i] === chars[j-1]){
        console.log (false)
        console.log (chars)
    } else if (chars[i] !== chars[j-1]) {
        console.log (true)
        console.log (chars)
    }}
  }
}
findRepeat ('Ready');