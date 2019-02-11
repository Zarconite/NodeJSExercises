function emailVerify(input){

if(input.includes("@") && input.includes(".")){
	if(input.indexOf("@")<input.indexOf(".") && input.indexOf("@") != 0 && input.indexOf(".") < input.length-1 && input.indexOf(".")-input.indexOf("@")>1){
	return input+" is a valid email."
	}
	else{
	return input+" is not a valid email."
	}
}
else{
	return input+" is not a valid email."
}

}

console.log(emailVerify("test@gmail"));
console.log(emailVerify("test@gmail."));
console.log(emailVerify("test@gmail.com"));
console.log(emailVerify("@gmail"));
console.log(emailVerify("a@.s"));
console.log(emailVerify("test@gmail.co.uk"));
console.log(emailVerify("@gmail.co.uk"));
console.log(emailVerify("test@gmail.co.uk"));