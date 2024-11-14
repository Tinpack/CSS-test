function alternarTema(tema) {
    const body = document.body;
    const container1 = document.getElementById("container1");
    const caixaTexto = document.getElementById("caixa-texto");

    body.classList.remove('tema-claro', 'tema-escuro', 'sem-css');
    container1.classList.remove('tema-claro', 'tema-escuro', 'sem-css');
    caixaTexto.classList.remove('tema-claro', 'tema-escuro', 'sem-css');

    if (tema === 'claro') {
        body.classList.add('tema-claro');
        container1.classList.add('tema-claro');
        caixaTexto.classList.add('tema-claro');
    } else if (tema === 'escuro') {
        body.classList.add('tema-escuro');
        container1.classList.add('tema-escuro');
        caixaTexto.classList.add('tema-escuro');
    }
}

function removerTema() {
    const body = document.body;
    const container1 = document.getElementById("container1");
    const caixaTexto = document.getElementById("caixa-texto");

    body.classList.remove('tema-claro', 'tema-escuro');
    container1.classList.remove('tema-claro', 'tema-escuro');
    caixaTexto.classList.remove('tema-claro', 'tema-escuro');

    body.classList.add('sem-css');
    container1.classList.add('sem-css');
    caixaTexto.classList.add('sem-css');
}

function mostrarCaixaTexto() {
    const caixaTexto = document.getElementById("caixa-texto");
    caixaTexto.style.display = "block";
}
