function clicou(){
document.getElementById("agradecimento").innerHTML = "<b>obrigada por clicar</b>"
//console.log(document.getElementById("agradecimento"));   
}

function redirecionar(){
    window.open ("https://www.instagram.com/urbanaflor_/"); //abre em uma aba diferente
    //window.location.href = "https://www.instagram.com/urbanaflor_/"; abre na msma aba
}

function trocar(elemento){
    elemento.innerHTML = "obrigada por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "obrigada por passar o mouse";
    //alert ("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
}
    //alert ("obrigado por clicar");
function load (){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)


}

/*function soma (n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)

}
alert(soma(5,10));
alert(setReplace("A Boca Rosa é a melhor vlogueira de make, na minha opinião", "Boca Rosa", "Joyce Kitamura"));

var d = new Date ();
alert (d);
alert (d.getMinutes());
alert (d.getHours());
*/

/*var count
for (count = 1; count <=5; count++){
    alert(count)
};
*/

/*var idade = prompt ("Qual sua idade?");
if (idade >= 18){
    alert ("maior de idade");
}else{ 
    alert ("menor de idade!");
};

var count = 0;
while (count<= 10){
    console.log(count);
    count = count + 2;
};*/

/*var nome = "Pri Sayuri";
var idade = 30;
var frase = "São Paulo é o melhor time do Brasileiro sqn pq nem vejo futebol"
var bemvindo = "Bem vindx a minha primeira página JS!"
var lista = ["pêra", "uva", "cereja", "abacaxi"]
var fruta = {nome: "maçã", cor: "vermelho"}
var frutas = [{nome: "maçã", cor: "vermelho"}, {nome: "uva", cor: "verde"}]
alert ("bem vinda! " + nome + " tem " + idade + " anos :O ");

//tentando aqui fazer um site acompanhando a aula do DIO
console.log(frase.replace ("São Paulo", "Santos"));
console.log(bemvindo.toUpperCase());
console.log(lista);
lista.push("jaca");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString()[0]);
console.log(lista [0]);
console.log(lista.join (" - "));
console.log(fruta);
console.log(fruta.nome);
console.log(frutas[1]);*/