# Resolução dos Desafios de Lógica de Programação - Alura 🎓

## Objetivo 🎯

Aqui estou resolvendo os desafios do **curso de Lógica de Programação da Alura** para praticar conceitos básicos que são super importantes, como variáveis, condicionais (if-else), loops (while) e interações com o usuário (alert, prompt). Esses conceitos são fundamentais para entender como programar de forma estruturada e aprender as bases para qualquer linguagem. 💻

Esses desafios me ajudam a construir uma base sólida para, no futuro, conseguir resolver problemas mais complexos e escrever códigos melhores. 🚀

## Desafios - Respostas 📝

### 1. Criar um contador que comece em 1 e vá até 10 usando um loop `while`. Mostrar cada número.

```javascript
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
```

### 2. Criar um contador que comece em 10 e vá até 0 usando um loop `while`. Mostrar cada número.

```javascript
let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}
```

### 3. Criar um programa de contagem regressiva. Pedir um número pro usuário e contar desse número até 0, usando um loop `while` no console do navegador.

```javascript
let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}
```

### 4. Criar um programa de contagem progressiva. Pedir um número pro usuário e contar de 0 até esse número, usando um loop `while` no console do navegador.

```javascript
let numeroMaximo = prompt("Digite um número para a contagem progressiva:");
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}
```

# Aviso Importante! ⚠️

**Se for rodar um código de contagem, não pode ter outros códigos de contagem rodando ao mesmo tempo.** Então, pra cada contagem funcionar direitinho, é só deixar o código da contagem que você quer rodar e comentar ou apagar os outros. 🧹
