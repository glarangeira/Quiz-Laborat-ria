let name = prompt("Qual é o seu nome?");

document.getElementById('name').innerHTML = "Olá, " + name + ".";

let txt;
let confirmation = confirm("Clique em OK para fazer o teste.");
if (confirmation == true) {
  txt = "Você aceitou o quiz! Clique em Ok para começar.";
} else {
  txt = "Você não aceitou o teste";
}
window.alert(txt)

let question1 = prompt("Qual a raiz de 36? \n 1) 7\n 2) 6\n 3) 5");
const answer1 = "2";
let question2 = prompt("Qual o valor de PI? \n 1) 3,36\n 2) 3,14\n 3) 3,16");
const answer2 = "2";
let question3 = prompt("Quanto é 10 + 2? \n 1) 10 \n 2) 12 \n 3) 0");
const answer3 = "2";
let question4 = prompt("Quanto é 100 - 26? \n 1) 84 \n 2) 74 \n 3) 64");
const answer4 = "2"; 

if(question1 == answer1) {
  document.getElementById('a1').innerHTML = "Resposta 1";
} else {
  document.getElementById('a5').innerHTML = "Resposta 1"; 
}

if(question2 == answer2) {
  document.getElementById('a2').innerHTML = "Resposta 2";
} else {
  document.getElementById('a6').innerHTML = "Resposta 2"; 
}

if(question3 == answer3) {
  document.getElementById('a3').innerHTML = "Resposta 3";
} else {
  document.getElementById('a7').innerHTML = "Resposta 3"; 
}

if(question4 == answer4) {
  document.getElementById('a4').innerHTML = "Resposta 4";
} else {
  document.getElementById('a8').innerHTML = "Resposta 4"; 
}


/*function adicionar(){
    let corretas = document.getElementById("p1").value;
    let listar = document.getElementById("listaCorretas").innerHTML;
    listar = listar + "<li>"+corretas+"</li>";

    document.getElementById("listar").innerHTML = lista;
    
}*/

   