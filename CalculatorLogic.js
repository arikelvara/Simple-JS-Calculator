var box= document.getElementById("display");

function toScreen(x){
	box.value += x;
	if(x==='c'){
		box.value= "0";
	}
}

function equals(){
	x= box.value;
	x= eval(x);
	box.value= x;
}

function squared(){
	x= box.value;
	x= eval("x*x");
	box.value= x;
}

function backspace(){
	var num = box.value;
	var len = num.length - 1;
	var newNumber = num.substring(0,len);
	box.value = newNumber;
}