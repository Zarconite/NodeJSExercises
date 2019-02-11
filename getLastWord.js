function getLastWord(string){

let array = string.split(" ");

return array[array.length-1];
}

console.log(getLastWord("hey there how's things?"));