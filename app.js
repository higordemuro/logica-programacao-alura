// Contador Progressivo (1 a 10)

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Contador Regressivo (10 a 0)

let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}

// Contagem Regressiva a partir de um número fornecido pelo usuário

let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

// Contagem Progressiva até um número fornecido pelo usuário

let numeroMaximo = prompt("Digite um número para a contagem progressiva:");
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}


