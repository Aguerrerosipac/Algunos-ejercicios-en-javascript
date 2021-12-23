console.log("Primer_ejercicio");

let array = [5, 8];

suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i]    
    }  
console.log("La suma de los primeros elementos es: ", + suma);

array.push(6, 7)

suma = 0;
for (let i = 0; i < array.length; i++) {
    suma+= array[i]    
}
console.log("La suma acumulada es: ", + suma);