/* Ajax
Ajax é uma requisão assíncrona que realiza a algum backend. É uma forma de requisitar informações do servidor sem precisar atualizar a página

var xhr = new XMLHttpRequest(); // a classe XMLHttpRequest() é que da acesso as funcionalidades do ajax pra recuperar infos de algum servidor.
xhr.open('GET', 'https://api.github.com/users/ligiaas');
xhr.send(null);

// como é uma chamada assíncrona nós nã sabemos quando ela retorna e o js não pode fica esperando essa requisição terminar pra continuar executando. Pra gente conseguir recuperar esses dados após a finalização da chamada utilizamos a seguinte classe:
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){ // 4 é quando chegou a resposta do servidor
		console.log(JSON.parse(xhr.responseText));
	}
} 
*/
/* Conceito Promise 
não influência na linha do tempo do código js.
São funções que vão devolver o valor de resultado da requisão p/ serv, seja de sucesso ou erro, só depois de um tempo.
E não precisamos nos preocupar quando esse valor vai ser retornado pq o nosso js vai continuar executando normalmente.

var minhaPromise = function() {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.github.com/users/ligiaas');
		xhr.send(null);

		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4) {
				if(xhr.status === 200) { // código de retorno com sucesso da requisição
					resolve(JSON.parse(xhr.responseText)); //se o a requisição foi resolvida, positiva, 200 ok, ele devolve os valores da requisição.
				} else {
					reject('Erro na requisão'); //se a requisição não foi resolvida, ele devolve uma mensagem de erro
				}
			}
		}
	});
}

minhaPromise()
	.then(function(response){ //then => só vai ser executado se o resolve na promise chamar o then. Ou seja, após a requisição do BD, o retorno for na condição de sucesso, cair no resolve, o resolve invoca o .then que exibe os valores vindos do BD.
		console.log(response);
	})
	.catch(function(error){ //catch => só vai ser executado se o reject na promise chamar o then. Ou seja, após a requisição do BD, o retorno for na condição de erro, cair no reject, o reject invoca o .catch que informa o erro da requisição
		console.warn(error);
	})
;
*/

/* Axios
Axios é um encapsulamento do XMLHttpeRequest. Ele ajuda a retornar os valores de forma mais fácil
*/
axios.get('https://api.github.com/users/ligiaas') //precisa informar qual chamada(POST, PUT, GET, DELETE) queremos, informar a url logo depois e tbm pode passar mais um parâmetro após a url.
	.then(function(response){ //then => só vai ser executado se o resolve na promise chamar o then. Ou seja, após a requisição do BD, o retorno for na condição de sucesso, cair no resolve, o resolve invoca o .then que exibe os valores vindos do BD.
		console.log(response);
		console.log(response.data.avatar_url); //o axios entende que a resposta é um JSON e já a retorna em um obj. Então nesse exemplo ele já retorna a url do avatar do GitHub.
	})
	.catch(function(error){ //catch => só vai ser executado se o reject na promise chamar o then. Ou seja, após a requisição do BD, o retorno for na condição de erro, cair no reject, o reject invoca o .catch que informa o erro da requisição
		console.warn(error);
	})
;
