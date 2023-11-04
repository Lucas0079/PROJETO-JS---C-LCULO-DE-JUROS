// Importando o plugin de input
import EntradaDados from 'readline-sync'

	console.log("Aplicação de cálculo de juros")

	//Pegando o valor da dívida do usuário e definição de variáveis
	let juros;
	let total;
	let valor_divida = EntradaDados.question("\nInforme o valor da dívida: ")


	// Criando condicionais com base no valor da dívida
	if( valor_divida > 0 ){
			
		let boletos = EntradaDados.question("\nInforme a quantidade de boletos atrasados: ")

		//Criando condicionais com base na quantidade de boletos atrasados
		if(Number(boletos)  > 0){
			 if ( boletos > 15){
				juros = 10;
				total = (Number(valor_divida)/100)*juros + Number(valor_divida);
            }
			else {
				juros = 5;
				total = (Number(valor_divida)/100)*juros + Number(valor_divida);
            }
			console.log("\nValor da dívida: R$"+valor_divida);
			console.log("Boletos: "+boletos);
			console.log("juros: "+juros+"%");
			console.log("Total: "+total);
        }
		else {
			console.log("\nSuas dívidas estão em dia");
		}

    }
	else{
		console.log("O valor da dívida deve ser maior que 0!");
	}