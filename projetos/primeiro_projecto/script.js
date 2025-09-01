const input = document.getElementById('input');
const content = document.getElementById('containerContent');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    content.innerHTML = ``; 
    const value = input.value;
    if(!value) {
        alert('Por favor, insira seu nome');
        return;
    }
    content.innerHTML = `<p id='content'>${value}, Seja bem vindo ao Versionamento de codigo !</p> `; 
});
