var name = document.querySelector('#exampleInputName');

var gender = document.querySelectorAll('#form-user-create [name=gender]:checked');

var birth = document.querySelector('#exampleInputBirth');

var country = document.querySelector('#exampleInputCountry');

var email = document.querySelector('#exampleInputEmail');

var password = document.querySelector('#exampleInputPassword');

var photo = document.querySelector('#exampleInputFile');

var admin = document.querySelector('#exampleInputAdmin');




var fields = document.querySelectorAll('#form-user-create [name]');
fields.forEach(function(field, index){

    if (field.name == 'gender') {
        if (field.checked) {
            
            console.log('Sim', field);

        }
    } else {
        console.log('Não');
    }

    //console.log(field.id, field.name, field.value, field.checked, index);
});

/*var olaMundo = ('Olá Mundo');
console.log("Primeira Variável " + olaMundo);




let a = 10;
const b = "10";
console.log ("let a é igual a const b? " + (a !== b));




let cor = "preto";
if (cor === "verde") {

    console.log ("A variável cor é igual a verde!");

} else if (cor === "preto") {

    console.log ("A variável cor é diferente de verde!");

} else {

    console.log ("Presta atenção, a variável cor é igual a preto");

}




//Switch
let corSwitch = "preto";

switch (corSwitch) {
    case "verde":
        console.log ("A variável cor é igual a verde!");
        break;


    case "amarelo":
        console.log ("A variável cor é igual a amarelo!");
        break;


    case "azul":
        console.log ("A variável cor é igual a azul!");
        break;
        
    default:
        console.log ("Vc não acertou, a variável cor é preto");
}

//For
let numero = 9;

for (let i = 0; i <= 10; i++) {
                 //Isso é um template string
    console.log (`${i} X ${numero} = ${i*numero}`);
}

//Funções
function calculadora(x1, x2, operador) {
    return eval(`${x1} ${operador} ${x2}`);
}

let resultado = calculadora(2, 2, "*");

console.log (resultado);

//Arrow Function
let calc = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}

let result = calc(5, 2, "*");

console.log (result);

//Array
let carros = ["gol", "corsa", 'palio'];

//Laço para percorrer no Array
carros.forEach(function(value, index){

    console.log ("Quantidade de carros é: ", carros.length, "A posição é: ", index, "O valor é: ", value);
});

//Classes = Conjunto de Métodos e Atributos
let celular1 = function(){
    this.color = "azul";

    this.ligar = function(){
        console.log ("fazendo uma ligação");
        return ("ligando");
    }
}

let objeto = new celular1();

console.log (objeto.ligar());

//Classes com o ES6
class celular2 {
    //Constructor é um método construtor
    constructor(){
        this.color = "azul";
    }

    ligar2() {
        console.log ("fazendo uma ligação Classes com o ES6");
        return ("ligando Classes com o ES6");
    }
}

let objeto2 = new celular2();

console.log (objeto2.ligar2());*/