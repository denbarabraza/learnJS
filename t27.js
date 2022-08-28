const filterString = (str, char) => {
	let i = 0;
	let result = '';
	while (i < str.length) {
	  if (str[i] !== char) {
		 result = `${result}${str[i]}`;
	  }
	  i = i + 1;
	}
 
	return result;
 };