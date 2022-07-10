let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons'));
// Array.from irá transformar o comando a seguir em uma array.
// Como foi criado um array a partir dos elementos dentro da div com a classe buttons, todo o 
// .map irá criar um novo array populado com os resultados de chamar a função de cada elemento que carrega um array. 
buttons.map( button => {
    // addeventlistener irá criar um evento novo no documento especificado.
    button.addEventListener('click', (e) => {
        // Switch é basicamente um controle de IFs, de maneira mais prática e objetiva. Não deve ser usado para todos os casos, mas para casos específicos. 
        switch(e.target.innerText){
            case 'C': 
                display.innerText= '';
                break
                // Caso C seja clicado, irá limpar a calculadora. O break é para que não continue executando o restante do Switch. 
            case '←':
                // Dessa maneira, essa função só é chamada de fato caso o display possua algo.
                if (display.innerText) {
                    // Slice irá "cortar" um trecho de um array, criando um novo sem modificar o anterior. O primeiro valor (start) irá iniciar o novo array a partir dali e o end irá "ignorar" todos os elementos posteriores aquele valor. 
                    display.innerText = display.innerText.slice(0, -1);
                }
                break
            case '=': 
                // o Script irá tentar executar a declaração. Caso dê errado, ele irá dar o resultado no catch.
                try {
                    // Eval irá "validar" o código, e caso seja uma expressão matemática válida, ele irá retornar o resultado correto. 
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Erro!'
                }
                break
            default: 
                display.innerText += e.target.innerText;
        }
    })
})