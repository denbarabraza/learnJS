let fruit = prompt("Какой фрукт купить?", "");

let bag = {
	[fruit]: 5, // имя свойства будет взято из переменной fruit
};

alert(bag.orange);