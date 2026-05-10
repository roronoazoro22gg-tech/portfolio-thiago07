const formulario = document.getElementById("formContato");

const mensagem = document.getElementById("msg");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    const email = document.getElementById("email").value;

    const texto = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || texto === "") {

        alert("Preencha todos os campos!");

        return;
    }

    if(!email.includes("@") || !email.includes(".")) {

        alert("Digite um e-mail válido!");

        return;
    }

    mensagem.innerHTML = "Mensagem enviada com sucesso!";

    mensagem.style.color = "green";

    formulario.reset();

});

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});