var divEl = document.getElementById('repos');
var listEl = document.querySelector('ul');
var iptEl = document.getElementById('idd');

function send() {
	var user = iptEl.value;
	user.toLowerCase();
	renderLoading();
	axios.get('https://api.github.com/users/' + user + '/repos')
		.then(function (response){
			renderRepositories(response.data);
		})
		.catch(function(error){
			renderError(error);
		});
}

function renderLoading(){
	listEl.innerHTML = '';
	var txtEl = document.createTextNode('Carregando...');
	var loadingEl = document.createElement('li');
	loadingEl.appendChild(txtEl);
	listEl.appendChild(loadingEl);
}

function renderRepositories(repositories){
	listEl.innerHTML = '';
	for(repo of repositories){
		const txtEl = document.createTextNode(repo.name);
		const liEl = document.createElement('li');
		liEl.appendChild(txtEl);
		listEl.appendChild(liEl);
		iptEl.value = '';
	}
}

function renderError(error){
	listEl.innerHTML = '';
	if(error.response.status === 404){
		var txtEl = document.createTextNode(' Usuário não encontrado!');
		listEl.appendChild(txtEl);
		divEl.appendChild(listEl);
		iptEl.value = '';
	} else {
		console.warn(error);
	}
	// divEl.innerHTML = '';
}