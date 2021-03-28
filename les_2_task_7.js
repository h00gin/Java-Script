//*Сравнить null и 0. Попробуйте объяснить результат.

var a = null;
var b = 0;

alert(typeof (a)); //тип данных - object
alert(typeof (b)); //тип данных - number
alert(a === b); //false - из-за разного типа данных