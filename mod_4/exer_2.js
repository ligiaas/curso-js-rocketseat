var divEl = document.querySelector('#repos');
var ulEl = document.createElement('ul');
function send(){
	var iptEl = document.getElementById('idd');
	var val = iptEl.value;
	var user = val.toLowerCase();

	axios.get('https://api.github.com/users/' +  user  + '/repos', )
		.then(function(response){
			var i = 0;
			while(i < response.data.length){
				var liEl = document.createElement('li');
				var text = document.createTextNode(response.data[i].name);
				liEl.appendChild(text);
				ulEl.appendChild(liEl);
				i++;
			}
		divEl.appendChild(ulEl);
		})
		.catch(function(error){
			if(status === 404){
				var el = document.createElement('h3');
				var text = document.createTextNode('Usuário não encontrado!');
				el.appendChild(text);
				divEl.appendChild(el);
			}
			console.warn(error);
		});
	iptEl.value = '';
	divEl.innerHTML = '';
}
	
