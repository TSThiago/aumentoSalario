var nome = 0
var salario = 0
var porcentagem = 0

function PedirDados(){
    nome = prompt("Insira o seu nome")
    salario = parseFloat("Insira o seu salário atual")
}

function DefinirPorcentagem(){
    if(salario < 1500){
        porcentagem = 20
    }else if(salario < 2000){
        porgentagem = 15
    }else if(salario < 3000){
        porgentagem = 10    
    }else{
        porcentagem = 5
    }
}

function CalcularSalario(salarioParametro, porcentagemParametro){
    return salarioReajustado = salarioParametro + (salarioParametro * porcentagemParametro/100)
}