function accumulatingCharacters(input){
	
let output = "";
let i=0;
while(i<input.length){
let j=0;	
	while(j<i+1){
	output += input.charAt(i);
	j++;
}
i++;
}
return output;
}
console.log(accumulatingCharacters("abcde"));