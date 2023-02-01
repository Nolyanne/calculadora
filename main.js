var num1=["0"];
var num2=["0"];
var sinal=["vazio"];
var result=0;


function numClic(clic){
    if (num1=='0'){
        num1=clic;
        document.getElementById('resultt').innerHTML = num1;
    } else if (sinal=='vazio'){
            num1=num1+clic;
            document.getElementById('resultt').innerHTML = num1;
        } else if (num2=='0'){
                num2=clic;
                document.getElementById('resultt').innerHTML = num2;
        } else {
            num2=num2+clic;
            document.getElementById('resultt').innerHTML = num2;
        }
    
    } 
    
function opClic(op){
    sinal = op;
} 


function limpar(){
    num1="0";
    num2="0";
    sinal="vazio";
    result=0;
    document.getElementById('resultt').innerHTML = 0;
}

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
    document.getElementById('resultt').innerHTML = result;
    } 
