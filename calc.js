const input = document.getElementById('input-calc')
const output = document.getElementById('output-calc')

input.focus()

const allowedKeys = ['(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0']

//Adiciona funcionalidade para os botões de input
document.querySelectorAll('.keys').forEach(function(buttonsKeys){
    buttonsKeys.addEventListener('click', function(){
        input.value += buttonsKeys.dataset.value
    }) 
})

//Adiciona função clrscr para o botão C
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    output.value = ''
    input.focus()
})

//Adiciona função backspace ao botão <-
document.getElementById('backspace').addEventListener('click', function(){
    input.value = input.value.slice(0, -1)
    input.focus()
})

//Adiciona função enter ao botão =
document.getElementById('enter').addEventListener('click', calculator)

//Filtra apenas as teclas necessarias para a calculadora
input.addEventListener('keydown', function(ev){
    ev.preventDefault()

    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }

    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }

    if(ev.key === 'Enter'){
        return calculator()
    }

    if(ev.key === 'c' || ev.key === 'C'){
        input.value = ''
        output.value = ''
    }
})

//Não permite Ctrl + V, para impedir a inserção de caracteres que não seja pelo teclado
input.addEventListener('paste', function (ev){
    ev.preventDefault()
})

//Função que calcula os valores no imput
function calculator(){
    const result = eval(input.value)
    input.focus()
    output.value = result
}

//Função para copiar o resultado
document.getElementById('copy').addEventListener('click', function(){
    navigator.clipboard.writeText(output.value)
})