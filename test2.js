let prLog = prompt ("Кто там?" , "");

if (prLog === "Админ"){
		let pass = prompt ("Пароль?" , "");
		if (pass === "Я главный"){
			alert(" Здравствуйте!");
		}

		else if(pass === "" || pass === null ){
			alert("Отменено");
		}

		else{
			alert("Неверный пароль")
		}
}
else if(prLog === "" || prLog === null){
	alert("Отменено");
}
else{
	alert("Я Вас не знаю")
}


