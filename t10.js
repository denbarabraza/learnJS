function minMax(a, b) {
	if ( a < b ) {
		return a
	 } else {
		return b
	 }
}
 
let a = prompt ("a?", "");
let b = prompt ("b?", "");

let result = minMax(a, b);
alert( result ); // 3


