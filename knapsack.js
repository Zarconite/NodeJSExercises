function knapsack(maxWeight,objects){
	let weight=0;
	let itemCount=0;
	let names="";
	let value=0;
	for(i in objects){
		if(weight+objects[i].weight < maxWeight){
		weight += objects[i].weight;
		itemCount++;
		value += objects[i].value;
		names += objects[i].name+" ";
		}
	}
	return itemCount+weight+value+names;
}

console.log(knapsack(25,{ [name: "clock", weight: 2, value: 10],[name: "axe", weight: 10, value: 25],[name: "shield", weight: 15, value: 30],[name: "potion", weight: 1, value: 50] });