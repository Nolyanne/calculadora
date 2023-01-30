

function numClic(clic){

    if (num1==='0'){
            num1=clic;
            document.getElementsByClassName('resultado').innerHTML = num1;
    } else if (sinal==='vazio'){
            num1=num1+clic;
            document.getElementsByClassName('resultado').innerHTML = num1;
        } else if (num2==='0'){
            num2=clic;
            document.getElementsByClassName('resultado').innerHTML = num2;
        } else {
            num2=num2+clic;
            document.getElementsByClassName('resultado').innerHTML = num2;
        }
    

    } 
    
function opClic(op){
    sinal = op;

} 


function limpar(){
    document.getElementsByClassName('resultado').innerHTML = "";
}

function calc(num1, num2, sinal){
    
    if (sinal==='mais'){
        result = parseint(num1) + parseint(num2);
    } else if (sinal==='menos'){
        result = parseint(num1) - parseint(num2);
    } else if (sinal==='mult'){
        result = parseint(num1) * parseint(num2);        
    } else if (sinal==='div'){
        result = parseint(num1) / parseint(num2);    
    } else{
        result = '0';
        document.getElementsByClassName('resultado').innerHTML = result;
    }
     

}
