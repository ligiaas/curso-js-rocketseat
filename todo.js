listEl = document.querySelector('#app ul');
inputEl = document.querySelector('#ipt');
btnEl = document.querySelector('#btn');

var todos = [
	'Fazer café',
	'Estudar JS',
	'Acessar Rocketseat'
]

function renderTodos() {
	listEl.innerHTML = '';
	for(todo of todos){
		var todoEl = document.createElement('li');
		var todoTxt = document.createTextNode(todo);
		linkEl = document.createElement('a');
		linkEl.setAttribute('href', '#');
		linkTxt = document.createTextNode('Excluir');
		var pos = todos.indexOf(todo);
		linkEl.setAttribute('onclick', 'deleteTodo('+ pos +')');

		linkEl.appendChild(linkTxt);
		todoEl.appendChild(todoTxt);
		todoEl.appendChild(linkEl);
		listEl.appendChild(todoEl);
	}
}

renderTodos();

function addTodo(){
	var todoTxt = inputEl.value;

	todos.push(todoTxt);
	inputEl.value = '';

	renderTodos();
}

btnEl.onclick = addTodo;

function deleteTodo(pos){
	todos.splice(pos, 1) //remove uma qtd de items de um array baseado na posição foi passada
	renderTodos();
}