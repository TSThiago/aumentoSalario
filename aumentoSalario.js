// 4. Crie uma função que pergunte se o usuário deseja calcular
// novamente com novas informações.
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

repetir = true
while(repetir == true){
    CalcularSalario(PedirNome(),PedirSalario())
    parar = prompt("O que deseja fazer? \n1 - Repetir programa \n2 - Encerrar programa")
    while(parar < 1 || parar > 2){
        parar = prompt("Insira uma opção válida: \n1 - Repetir programa \n2 - Encerrar programa")
    }
    if(parar == 1){
        repetir = true
    }else if(parar == 2){
        repetir = false
    }
}
