function primeNumber(input){
let count = 0;
if(input < 2){
	return "false";
}
else if (input == 2){
	return "true";
}
else{
	let i = 2;
	while(i<input+1){
		if(input%i ==0){
		count++;
		}
		i++;
}
if(count<3){
return "true";
}
else{
return "false";
}
}
}

console.log(primeNumber(57));
console.log(primeNumber(113));
console.log(primeNumber(7));
console.log(primeNumber(25));
console.log(primeNumber(-20));
console.log(primeNumber(1));
console.log(primeNumber(191));
console.log(primeNumber(192));
console.log(primeNumber(317));
console.log(primeNumber(319));
console.log(primeNumber(821));
console.log(primeNumber(989));