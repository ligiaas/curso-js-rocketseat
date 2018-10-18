listEl = document.querySelector('#app ul');
inputEl = document.querySelector('#ipt');
btnEl = document.querySelector('#btn');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
	listEl.innerHTML = '';
	for(todo of todos){
		var todoEl = document.createElement('li');
		var todoTxt = document.createTextNode(todo);
		linkEl = document.createElement('a');
		linkEl.setAttribute('href', '#');
		linkTxt = document.createTextNode(' X');
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
	saveToStorage();
}

btnEl.onclick = addTodo;

function deleteTodo(pos){
	todos.splice(pos, 1) //remove uma qtd de items de um array baseado na posição que foi passada
	renderTodos();
	saveToStorage();
}

function saveToStorage(){
	// JSON = JavaScriptObjectNotation possui uma estrutura que parece um obj mas é uma string
	//localStorage é uma var global do js
	localStorage.setItem('list_todos', JSON.stringify(todos)); // stringfy transforma o vetor em uma string 
}


/* Adicionando um novo todo log
1. ouvir o click do botão adicionar
2. recuperar o valor do input
3. adicionar como novo item no array do todo p/ renderizar na tela */

