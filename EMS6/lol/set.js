let palabra = 'Alli si Maria avisa y asi va a ir a mi silla';
let nuevaPalabra = '';
let palabraOriginal = '';

palabra.toLowerCase

for(let i = palabra.length-1; i >= 0; i--){
    if(palabra[i]==' '){
        continue;
    }
    nuevaPalabra += palabra[i];
}
for(let i = 0; i < palabra.length; i++){
    if(palabra[i]==' '){
        continue;
    }
    palabraOriginal += palabra[i];
}

console.log(palabra);
console.log(palabraOriginal)
console.log(nuevaPalabra);

if(nuevaPalabra.toLowerCase() == palabraOriginal.toLowerCase()){
    console.log('Es palindroma xd')
}else{
    console.log('No lo es')
}



