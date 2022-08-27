// 3. Depois de calcular o aumento você deve exibir: o nome do
// colaborador, o salário, a % de aumento e o salário reajustado.
// 4. Crie uma função que pergunte se o usuário deseja calcular
// novamente com novas informações.
// Para calcular o aumento, faça o valor do salário multiplicado pela
// porcentagem em decimal.
// Ex.: salário R$1.000,00 aumento de 10%
// 1000 * 1.10 = 1100
// salário R$1.000,00 aumento de 15%
// 1000 * 1.15 = 1150
// ATENÇÃO!! Faça um commit para cada item do exercício.

function PedirNome(){
    var nome = prompt("Insira o seu nome")
    return nome;
}

function PedirSalario(){
    var salario = parseFloat(prompt("Insira o seu salário"))
    return salario;
}

function CalcularSalario(name,num){
    if(num < 1501){
        var porcentagem = 1.20
        var salarioNovo = num * porcentagem 
    }
    else if(num > 1500 && num < 2001){
        porcentagem = 1.15
        salarioNovo = num * porcentagem
    }
    else if(num > 2000 && num < 3001){
        porcentagem = 1.10
        salarioNovo = num * porcentagem 
    }
    else if(num > 3000){
        porcentagem = 1.05
        salarioNovo = num * porcentagem
    }
    
    console.log("Nome: " +name+ " \nSalário atual: " +num+ " \nPorcentagem do aumento: " +porcentagem+ "\nSalário reajustado: " +salarioNovo)
}

CalcularSalario(PedirNome(),PedirSalario())