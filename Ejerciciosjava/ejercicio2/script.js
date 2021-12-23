/*
console.log("Segundo_ejercicio_forma1");
let sentence= "El lunes es un gran dia para programar";

// Oracion inicial
let oracionInicial = function () {
    console.log("El lunes es un gran dia para programar");
  };
  oracionInicial();
  // Buscar el elemento a reemplazar dentro de la oracion inicial
  (function wordToReplace() {
    console.log("El wordtoreplace es", sentence.split(" ")[1]);
    return(wordToReplace)
  })();

 (function (wordToReplace) {
    console.log(`El ${wordToReplace}  es un gran dia para programar`);
  })(prompt("Ingrese el dia"));*/
  
//==============================================================================
/*
console.log("Segundo_ejercicio_forma2");
let sentence= "El lunes es un gran dia para programar";
let wordToReplace= (prompt("Ingrese el dia"));
let replacerWord= console.log(`El ${wordToReplace}  es un gran dia para programar`);*/

//===================================================================================

console.log("Segundo_ejercicio_forma3")
let sentence = "El lunes es un gran dia para programar";
let wordToReplace = (sentence.split(" "));
let replacerWord= wordToReplace.splice(1, 1, (prompt("Ingrese el dia")));
console.log(wordToReplace);
