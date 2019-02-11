function sortNumberNonNegative(inputNumbers){
	if(inputNumbers > 0){
	return inputNumbers.toString().split('').sort().join('');
	}
	else{
	return "Enter a positive number."
	}
}

console.log(sortNumberNonNegative(198253674));
