let nome_estudante = "";
let elemento_nome_estudante = document.querySelector("#nome-estudante-titulo-boas-vindas");

while (nome_estudante == "") {
    nome_estudante = prompt("Qual o seu nome?");
}

if (nome_estudante == null) {
    elemento_nome_estudante.textContent = "Estudante";
} else {
    elemento_nome_estudante.textContent = nome_estudante;
}

