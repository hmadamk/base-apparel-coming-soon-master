
let input = document.querySelector('input');

input.onfocus = function(){
	if(input.value == 'Email Address'){
		input.value = ''
	}
}
input.onblur = function(){
	if(input.value == ''){
		input.value = 'Email Address'
	}
}