/*!
 * JavaScript Validação Plugin v1.0.0
 *
 *
 * Copyright (c) 2021 Andreney Laranjeira
 * Released under the MIT license
 */

function vazio(input){
	var campo = document.getElementById(input);
	var valor_campo = campo.value;
	if(valor_campo == "" || valor_campo == null){
		campo.classList.add("is-invalid");
		campo.focus();
		return false;
	}else{
		campo.classList.remove("is-invalid");
		campo.classList.add("is-valid");
		return true
	}
}

function tamanho(input, tamanho){
	var min = tamanho;
	var campo = document.getElementById(input);
	var valor_campo = campo.value;
	if(valor_campo.length  < min){
		campo.classList.add("is-invalid");
		campo.focus();
		return false;
	}else{
		campo.classList.remove("is-invalid");
		campo.classList.add("is-valid");
		return true
	}
}

function email(input){
	var campo = document.getElementById(input);
	var valor_campo = campo.value;
	if(!checar_email_valido(valor_campo)){
		campo.classList.add("is-invalid");
		campo.focus();
		return false;
	}else{
		campo.classList.remove("is-invalid");
		campo.classList.add("is-valid");
		return true
	}
}
function checar_email_valido(email) {
	var padrao = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
	return padrao.test(email);
}


function radio(input){
	var campo = document.getElementsByName(input);
	var aux = 0;
	for (var i = 0; i < campo.length; i++) {
		if (campo[i].checked) {
			//alert("Escolheu: " + campo[i].value);
			console.log("Escolheu: " + campo[i].value);
			aux++;
		}
	}
	if(aux == 0){
		for (var i = 0; i < campo.length; i++) {
			campo[i].classList.add("is-invalid");
		}
	}else{
		for (var i = 0; i < campo.length; i++) {
			campo[i].classList.remove("is-invalid");
			campo[i].classList.add("is-valid");
		}
	}
}


/*
var vazio = ['lastName', 'firstName'];
var radio = ['flexRadioDefault'];

function validarCadastro(){
	var erro = 0;
	var abanco = vazio("lastName");
	var acodigo = vazio("firstName");
	var radioi = radio("flexRadioDefault");

	if(!acodigo || !abanco){
		erro++;
	}
	
	if(erro == 0){
		$('.alert').hide();
		document.formCad.submit();
	}else{
		$('.alert').show();
	}
}
*/