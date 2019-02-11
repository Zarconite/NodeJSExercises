function filterRemoveDuplicates(input){
let txt = "";
let outArray = [];
for(i in input){
	if(txt.includes(input[i])){
	}
	else{
		txt += input[i];
		outArray.push(input[i]);
	}
}
	return outArray;
}
let harryPotterNames = require('harry-potter-names');

console.log(filterRemoveDuplicates(harryPotterNames.all));
console.log(filterRemoveDuplicates(["John", "Taylor", "John", "Steve", "Steve", "Stuart", "Steve", "Steve"]));
