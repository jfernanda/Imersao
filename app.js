function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Se campoPesquisa == vazio
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Por favor, digite um nome</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se nome.includes = campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Saiba mais </a>
            </div>
            `;
        }
    }
    //Se campoPesquisa for diferente da base de dados
    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
};





