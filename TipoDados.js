/*Exitems 3 tipos de variaveis 
 Let, var e const
 O tipo const impossibilita a alteração, o let e var permitem
 A diferença dos dois é que o let é no escopo do projeto, o var é global enquanto o let é local
 Lembrando que o javascript le linha a linha;
 */

    // Tipo de dados - vale lembrar que não é tipado, então uma variavel pode receber o valor que quiser
//String
let nome = 'Teste';
//----------------------------

//Number
let idade = 30;
//----------------------------

// Boolean
let verdadeiro = true;
//----------------------------

// Array
let frutas = ['Goiaba','Laranha', 'Banana']
frutas[0] //Goiaba, Array[posição]
//----------------------------

// Objetos
let carro = {
    marca: 'Nissan',
    modelo: 'Kicks',
    ano: 2020
}

// Para acessar o valor de um atributo de um objeto 
carro.marca; /* ou */ carro['ano'];

//----------------------------
//Function 
let soma = function(a, b){
    return a + b;
}

// ou 

function soma(a,b){
    return a + b;
}
//----------------------------

// Arrow Function
let soma = (a , b) => {
    return a + b;
}

// ou

let soma = (a, b) => a + b;

//----------------------------