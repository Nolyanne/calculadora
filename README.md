# calculadora

## Visão geral

### O desafio

Esta calculadora deverá realizar operações matemáticas simples, com exposição do número em um display, e os botões deverão mudar de cor ao serem clicados.


### Captura de tela

![](./calculadora.jpg)


### Links

- URL da solução: [Calculadora](https://jade-entremet-997fcb.netlify.app)

## Meu processo

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas CSS
- Grade CSS
- Javascript

### O que eu aprendi

Ainda estou em processo de aprendizado. A dinâmica do funcionamento da página  não está concluída. Falta delimitar tamanho das strings e acertar a função limpar quando as opções de botões forem utilizadas erroneamente.


Para ver como você pode adicionar trechos de código, veja abaixo:


```CSS

.num:hover{
    background-color: rgba(128, 128, 128, 0.603);
    color: white;
    font-family: "Fredoka One";
}


```

```Javascript

function calc(){
    const numm1 = parseInt(num1);
    const numm2 = parseInt(num2);
    if (sinal=='mais'){
        result = numm1 + numm2;
    } else if (sinal=='menos'){
        result = numm1 - numm2;
    } else if (sinal=='mult'){
        result = numm1 * numm2;        
    } else if (sinal=='div'){
        result = numm1 / numm2;    
    } 
    document.write('resultado') = result;
    limpar();
    } 
     

```




### Desenvolvimento contínuo

Ainda espero concluir este projeto, porém terei de estudar mais sobre o Javascript.

### Recursos úteis

- [Netlify](https://www.netlify.com) - Isso me ajudou para executar meu projeto. 



## Autor

- Nolyanne



## Agradecimentos

Agradeço à Claudia Antunes por me inspirar a implementar esse projeto, através de um post do Linkedin.
