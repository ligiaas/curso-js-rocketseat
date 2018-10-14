function send(){
	var iptEl = document.getElementById('idd');
	var age = iptEl.value;
	checaIdade(age)
		.then(function(){
			console.log('Maior de 18');
		})
		.catch(function(){
			console.log('Menor de 18');
		});
}

function checaIdade(age){
	var idade = age;
	console.log(idade);
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			return idade >= 18 ? resolve() : reject();
		}, 2000);
	});
}

