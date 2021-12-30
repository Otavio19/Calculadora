/*
	Script By: @Otavio.eliass
*/

var valor1 = ''
var valor2 = ''
var operacao = ''

function numero(d){
	document.querySelector('.visor').value += d
	valor1 += d
	console.log('Valor 1: ' + valor1)
}

function funcao(d){
	if(valor1 == ''){
		$('.visor').val('Selecione um valor')
	setTimeout(function(){
  			$('.visor').val('');
				}, 1000);
	}
		operacao = d
		document.querySelector('.visor').value += operacao
		console.log('Operação Escolhida foi: ' + d)
		valor2 = valor1
		valor1 = ''
		console.log('Valor 2: ' + valor2)
}

function apagar(){
	var tela = $('.visor').val()
	var apagado = tela.slice(0, -1);
	$('.visor').val(apagado)
	valor1 = apagado
}

function apagarTudo(){
	console.log('Valores zerados!')
	$('.visor').val('')
	valor1 = ''
	valor2 = ''
	operacao = ''
}

function resultado(){
	var valor1Int = parseInt(valor1)
	var valor2Int = parseInt(valor2)
	switch(operacao){
		case '+':
			$('.visor').val(valor2Int + valor1Int)
			console.log('Resultado: '+ (valor2Int + valor1Int))
			break;

		case '-':
			$('.visor').val(valor2Int - valor1Int)
			console.log('Resultado: '+ (valor2Int - valor1Int))
			break;

		case 'x':
			$('.visor').val(valor2Int * valor1Int)
			console.log('Resultado: '+ (valor2Int * valor1Int))
			break;

		case '/':
			$('.visor').val(valor2Int / valor1Int)
			console.log('Resultado: '+ (valor2Int / valor1Int))
			break;
	}

}