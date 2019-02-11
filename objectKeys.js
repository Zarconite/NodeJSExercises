function objectKeys(input){
	let array = [];
	for(object in input){
		if (input.hasOwnProperty(object)) {
        array.push(object);
		array.push(input[object]);
    }
	}
	let fixedArray = array.toString().split(',');
	let keysArray = [];
	let valuesArray = [];
	for(i in fixedArray){
		if(i%2 == 0){
		keysArray.push(array[i]);
		}
		else{
		valuesArray.push(array[i]);
		}
	}
	
return [keysArray,valuesArray];
}

console.log(objectKeys({a: 1, b: 2, c: 3}));
console.log(objectKeys({a: "Apple", b: "Microsoft", c: "Google"}));
console.log(objectKeys({key1: true, key2: false, key3: undefined}));