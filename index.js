/*console.log("Estou no html, arquivo de script interno")
console.log("Eu funciono")

let meuNumero = 100;
let outroNumero = 35;

console.log(meuNumero);

meuNumero = 50;

console.log(meuNumero + outroNumero);

console.log(`Meu número é : ${meuNumero + outroNumero}`);

let cursoDeProgramacao = "kenzie academy";

console.log (cursoDeProgramacao);

const decimal = 3.14
const int = 5
const palavra = "batata"

console.log(decimal)
console.log(int)
console.log(palavra)
console.log(decimal, int, palavra)

console.log(typeof int)

const booleano = true

console.log(typeof booleano)

const texto = "mensagem"

console.log(typeof texto)

const booleano1 = true
const booleano2 = false

console.log(booleano1)
console.log(booleano2)

console.log(booleano1, booleano2)

const nulo = null
console.log(nulo)

let indefinido

console.log (indefinido)

let num1 = 5
let num2 = 10

let result = num1+num2

console.log(result)

let pi = 3.14
let raio = 5
let circunferencia = pi*raio*2
console.log(circunferencia)

let temperatura = 30

let fahrenheit = ((temperatura*9)/5)+32
console.log(fahrenheit)

let nota1 = 7
let nota2 = 9
let media = (nota1+nota2)/2
console.log(media)

let largura = 10
let comprimento = 20

console.log(largura*comprimento)

let salarioBruto = 5000
console.log(salarioBruto*0.9)


let horasTrabalhadas = 40
let valorHora = 50
console.log(horasTrabalhadas*valorHora)

let nome1 = "João"
let nome2 = "Silva"

console.log(nome1+ " " + nome2)

let string1 = "hello"
let string2 = "world"

console.log(string1+string2)

let decimal = 12.5

console.log(parseInt(decimal))

let numero1 = "12"

console.log(parseInt(numero1))

let soma1 = "12"
let soma2 = "3"

console.log((parseInt(soma1)) + (parseInt(soma2)))


let nome = prompt("Qual o seu nome?")

alert("Seja bem vindo, " + nome + "!")


let dinheiro = 828.50;
let preco = 10.20;

if(preco <= dinheiro){
    alert("Jose ira comprar")
}else{
    alert("Jose é pobre")
}


let numero = prompt("qual numero viado?")

if(numero > 24){
    alert("um pouco menos")
}else if (numero < 24){
    alert("um pouco mais")
}else{
    alert("pense num numero viado")
}


let A = 10
let B = 20
let C = 30

if (A+B > C){
    alert("A soma de A + B é maior que C")
} else if (A+B < C){
    alert("A soma de A + B é menor que C")
} else{
    alert("A soma de A + B é igual a C")
}

let num1 = 28
if (num1 % 2 == 0){
    alert("Esse numero é par")
} else{
    alert("Esse numero é impar")
}

let bool1 = false
let bool2 = false

if (bool1 && bool2){
    alert("Ambos são verdadeiros")
} else if(bool1 || bool2){
    alert("Uma das duas são verdadeiras")
} else{
    alert("Nenhuma é verdadeira")
}


let num1 = 4
let num2 = 2
let num3 = 3

if (num1 > num2 && num2 > num3){
    console.log(num1 + " é maior que " + num2 + " que é maior que " + num3)
}else if (num1 < num2 && num1 > num3){
    console.log(num2 + " é maior que " + num1 + " que é maior que " + num3)
}else if (num3 > num2 && num2 > num1){
    console.log(num3 + " é maior que " + num2 + " que é maior que " + num1)
}else if(num1 > num3 && num2 < num3){
    console.log(num1 + " é maior que " + num3 + " que é maior que " + num2)
}else if(num2 > num3 && num3 > num1){
    console.log(num2 + " é maior que " + num3 + " que é maior que " + num1)
}else if(num3 > num1 && num1 > num2){
    console.log(num3 + " é maior que " + num1 + " que é maior que " + num2)
}


let numero1 = prompt("Digite o primeiro numero")
let numero2 = prompt("Digite o segundo numero")

if(numero1>numero2){
    alert("Numero " + numero2 + " é maior que " + numero1)
} else if (numero1<numero2){
    alert("Numero " + numero1 + " é maior que " + numero2)
} else{
    alert("Numeros iguais")
}

// Não altere o nome das variavéis ou o texto do prompt! 
// Modifique apenas o tipo da variavel!            
var gender = prompt('Genero');
var height = prompt('Altura');
var barReps = prompt('Repetições com barra');
var barSeconds = prompt('Tempo das repetições com barra');
var abs = prompt('Abdominais');
var runDistance = prompt('Distância da corrida');
var runTime = prompt('Tempo da corrida');
var swimDistance = prompt('Distância da natação');
var swimTime = prompt('Tempo da natação');
var diveTime = prompt(' Tempo de mergulho');

let result = false;

if (gender === "male") {
    let heightOk = height >= 1.70;
    let barOk = (barReps >= 6) || (barSeconds >= 15);
    let absOk = abs >= 41;

    let runOk = 
        (runDistance >= 3000 && runTime <= 720) || 
        (runDistance >= 5000 && runTime <= 1200); 

    let swimOk = 
        (swimDistance >= 100 && swimTime <= 60) || 
        (diveTime <= 30);

    result = heightOk && barOk && absOk && runOk && swimOk;
}

if (gender === "female") {
    let heightOk = height >= 1.60;
    let barOk = (barReps >= 5) || (barSeconds >= 12);
    let absOk = abs >= 41;

    let runOk = 
        (runDistance >= 4000 && runTime <= 900) || 
        (runDistance >= 6000 && runTime <= 1320);  

    let swimOk = 
        (swimDistance >= 100 && swimTime <= 60) || 
        (diveTime <= 30);

    result = heightOk && barOk && absOk && runOk && swimOk;
}

if(result == true){
    alert("Passou")
}else{
    alert("Não passou")
}


function formataApresentacao() {
    const nome = "Thiago";
    const sobrenome = "Koman";
    const modulo = "M1";

    console.log('O nome completo do instrutor é:' + nome + sobrenome + ' e ele trabalha no módulo ' + modulo);
}

formataApresentacao()
formataApresentacao()
formataApresentacao()
formataApresentacao()

function somar(){
    let num1 = 8
    let num2 = 9

    console.log(num1+num2);
}

somar();
somar();


function maiorDeIdade(){
    var idade = 5

    if (idade >= 18){
        console.log("Já é maior de idade")
    }
    else {
        console.log("Ainda é menor de idade")    
    }
}

maiorDeIdade()
maiorDeIdade()
maiorDeIdade()


function atividade(){
    console.log("Hello World")
}

atividade()




function monitor(){

    let entregas = prompt("Quantas entregas foram?")
    let entrevistas = prompt("Quantas entrevistas foram?")
    let presenca = prompt("Quantas entrevistas foram?")

    if (entregas >= 100 && entrevistas >=100 && presenca >= 100){
        console.log("Possível monitor(a)")
    }else{
        console.log("Selecionar outro(a) aluno(a)")
    }
}

monitor()

function maiorNumero(){
    let num1 = prompt("numero 1")
    let num2 = prompt("numero 2")
    let num3 = prompt("Numero 3")

    if (num1 > num2 && num1 > num3){
        console.log("Número 1 é maior")
    } else if(num2 > num1 && num2 > num3){
        console.log("Número 2 é maior")
    } else if(num3 > num1 && num3 > num2){
        console.log("Número 3 é maior")
    }else{
        console.log("Os números são iguais")
    }
}

maiorNumero()



function apresentacao(){
    const nome = "Lucas"
    const sobrenome = "Santos"
    const idade = 28

    console.log("Meu nome é " + nome + " " + sobrenome + " e tenho " + idade + " anos")
}

apresentacao()


function soma(){
    let num1 = 5
    let num2 = 7
    let result = 0

    result = num1+num2
    return result;
}

let resultadoSoma = soma();
console.log(resultadoSoma);


function soma(){
    let num1 = 5
    let num2 = 7
    let result = 0

    result = num1+num2
    console.log(result)
}

let resultadoSoma = soma();
console.log(resultadoSoma);

function calcularAreaCirculo(raio){
    const pi = 3.14
    const areaCirculo = pi * raio * raio

    return areaCirculo;
}

const resultado = calcularAreaCirculo(5);
console.log(resultado)


function calcularAreaTriangulo(base, altura){
    console.log('Base é igual a: ' + base)
    console.log('altura é igual a: ' + altura)

    const areaTriangulo = (base*altura)/2

    return areaTriangulo;
}

const resultado = calcularAreaTriangulo(5, 10)
console.log(resultado)

function valor(numero){
    let p = "positivo"
    let n = "parametro 0 ou negativo"
    if (numero > 0){

        return p;
    }else{

        return n;
    }
}

let resultadoFuncao = valor(-5);
console.log(resultadoFuncao)
*/

function contarDigitos(numero) {
  return Math.abs(numero).toString().length;
}
console.log(contarDigitos(12345678))
