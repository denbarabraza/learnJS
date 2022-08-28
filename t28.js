const makeItFunny = ( str, char) =>{
	let i = 0;
	let result = '';
 
	while(i < str.length){
	  if ((i + 1) % char === 0 ){
		 result = `${result}${str[i].toUpperCase()}`
	  } else{
		 result = `${result}${str[i]}`;
	  }
	i = i + 1; 
	}