var nome = 0
var salario = 0
var porcentagem = 0

PedirDados()
CalcularSalario(salario,DefinirPorcentagem())
console.log("Nome: " +nome+ "\nSalário: " +salario+ "\nPorcentagem do aumento: " +porcentagem+ "%\nSalário reajustado: " +CalcularSalario(salario,DefinirPorcentagem()))



function PedirDados(){
    nome = prompt("Insira o seu nome")
    salario = parseFloat(prompt("Insira o seu salário atual"))
}

function DefinirPorcentagem(){
    if(salario < 1500){
        porcentagem = 20
    }else if(salario < 2000){
        porcentagem = 15
    }else if(salario < 3000){
        porcentagem = 10    
    }else{
        porcentagem = 5
    }
    return porcentagem
}

function CalcularSalario(salarioParametro, porcentagemParametro){
    return salarioParametro + (salarioParametro * porcentagemParametro/100)
}