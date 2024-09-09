function validarForm() {
    var nome = document.nomeform.elements["nome"].value.trim();
    var email = document.nomeform.elements["email"].value.trim();
    var comentario = document.nomeform.elements["comentario"].value.trim();
    var pesquisa = document.nomeform.elements["pesquisa"].value.trim();

    if (nome.length < 10) {
        alert("Nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        alert("Email deve ter os caracteres @ e .");
        return false;
    }

    if (comentario.length < 20) {
        alert("Comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    if (pesquisa === "sim") {
        alert("Obrigado por responder a esquisa nessa página!");
    } else {
        alert("Volte Sempre!");
    }
}