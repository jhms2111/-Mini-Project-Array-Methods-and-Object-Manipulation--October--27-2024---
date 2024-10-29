/*Tarefas do Exercício
*Agora, vou listar algumas funcionalidades que você deve implementar, organizadas em passos. Cada uma delas vai te ajudar a treinar a manipulação de arrays e a interação com o DOM usando JavaScript:

*1. Exibir Lista de Produtos na Tela
Crie uma função que exiba os produtos em uma lista na tela (por exemplo, em uma <ul> ou <table>).
Cada item deve mostrar o nome do produto, o preço e se é vegetariano ou não.
Cada item deve ter um botão para adicionar o produto ao carrinho.
*2. Adicionar Produto ao Carrinho
Crie um array chamado carrinho que inicialmente está vazio.
Quando o botão de adicionar um produto for clicado, adicione o produto ao array carrinho.
Exiba os itens que estão no carrinho em uma lista separada.
*3. Calcular o Total do Carrinho
Crie um botão que, ao ser clicado, some os preços dos produtos no carrinho e exiba o total na tela.
Exiba esse total abaixo da lista de produtos do carrinho.
*4. Filtrar Produtos Vegetariano/Não-Vegetariano
Crie dois botões: um para exibir apenas produtos vegetarianos e outro para exibir apenas produtos não vegetarianos.
Ao clicar em cada botão, a lista de produtos exibida na tela deve ser filtrada de acordo com a escolha.
*5. Remover Itens do Carrinho
Cada item no carrinho deve ter um botão de remover.
Ao clicar nesse botão, o produto deve ser removido do array carrinho e a lista atualizada.
*6. Ordenar Produtos pelo Preço
Crie dois botões: um para ordenar os produtos por preço em ordem crescente e outro para ordem decrescente.
Ao clicar nos botões, a lista de produtos exibida deve ser ordenada conforme a escolha.
*7. Pesquisar Produto por Nome
Crie um campo de input onde o usuário possa digitar o nome de um produto.
Conforme o usuário digitar, a lista de produtos deve ser filtrada para mostrar apenas aqueles que contenham a sequência digitada no nome.

Sugestão de Abordagem
Comece exibindo os produtos na tela usando document.getElementById para acessar a lista e innerHTML para adicionar os elementos.
Adicione eventListeners aos botões para chamar funções que manipulem o array de produtos e o carrinho.
Use métodos de array como filter, map, reduce, e sort para lidar com as funcionalidades.
Atualize a lista de produtos e do carrinho na tela sempre que houver uma alteração.
Esse exercício é ótimo para praticar:

Manipulação de arrays e objetos em JavaScript.
Interação com o DOM (Document Object Model).
Lógica de programação.
Criação de funções e eventos.
Boa sorte! Se precisar de ajuda em algum passo, é só me chamar!

*/



const produtos = [
    { id: 1, nome: 'Banana', preco: 2.5, vegetariano: true },
    { id: 2, nome: 'Carne Bovina', preco: 25, vegetariano: false },
    { id: 3, nome: 'Leite', preco: 4, vegetariano: true },
    { id: 4, nome: 'Arroz', preco: 3, vegetariano: true },
    { id: 5, nome: 'Peixe', preco: 18, vegetariano: false },
    { id: 6, nome: 'Batata', preco: 1.5, vegetariano: true },
    { id: 7, nome: 'Ovo', preco: 6, vegetariano: true },
    { id: 8, nome: 'Frango', preco: 15, vegetariano: false },
    { id: 9, nome: 'Maçã', preco: 3.5, vegetariano: true },
    { id: 10, nome: 'Queijo', preco: 8, vegetariano: true },
    { id: 11, nome: 'Macarrao', preco: 5, vegetariano: true }
];

let carrinho = [];

//funcao para exibir lista de produto

function exibirProdutos(lista) {
    const listaDeProdutos = document.getElementById('lista-produtos');
    listaDeProdutos.innerHTML = '';
    lista.forEach(produto => {
        const item = document.createElement('li');
         item.textContent = `${produto.nome} - ${produto.preco.toFixed(2)} - ${produto.vegetariano ? 'Vegetariano' : 'Nao vegetariano'}`;


         const botaoAdicionar = document.createElement('button')
         botaoAdicionar.textContent = 'Adicionar ao carrinho';
         botaoAdicionar.onclick = () => adicionarAoCarrinho(produto);

         item.appendChild(botaoAdicionar);
         listaDeProdutos.appendChild(item); 
    } );
}

  //funcao para adicionar produto ao carrinho
    function adicionarAoCarrinho(produto) {
        carrinho.push(produto);
        exibirCarrinho()
    } 

    //funcao para exibir o produto no carrinho
    function exibirCarrinho() {
        const listaCarrinho = document.getElementById('lista-carrinho')
        listaCarrinho.innerHTML = '';
        carrinho.forEach((produto, index) => {


            const item = document.createElement('li')
            item.textContent = `${produto.nome} - ${produto.preco.toFixed(2)}`;

            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.onclick = () => removerDoCarrinho(index)

            item.appendChild(botaoRemover),
            listaCarrinho.appendChild(item)
        });
    }


    //fiuncao para remover produtos do carrinho 
    function removerDoCarrinho(index) {
        carrinho.splice(index, 1 );
        exibirCarrinho()
    }

//funcao para calcular o total no carrinho
 function totalCarrinho() {
    const total = carrinho.reduce((soma, produto) => soma + produto.preco , 0);
    document.getElementById('total').textContent = ` ${total.toFixed(2)}`
 }

        // Função para filtrar produtos vegetarianos
        function filtrarVegetarianos() {
            const vegetarianos = produtos.filter(produto => produto.vegetariano);
            exibirProdutos(vegetarianos);
        }

        // Função para filtrar produtos não vegetarianos
        function filtrarNaoVegetarianos() {
            const naoVegetarianos = produtos.filter(produto => !produto.vegetariano);
            exibirProdutos(naoVegetarianos);
        }

       // Função para ordenar produtos por preço (crescente)
       function ordenarCrescente() {
        const ordenados = [...produtos].sort((a, b) => a.preco - b.preco);
        exibirProdutos(ordenados);
    }

            // Função para ordenar produtos por preço (decrescente)
            function ordenarDecrescente() {
                const ordenados = [...produtos].sort((a, b) => b.preco - a.preco);
                exibirProdutos(ordenados);
            }

        // Adicionando event listeners aos botões
        document.getElementById('calcular-total').addEventListener('click', totalCarrinho);
        document.getElementById('filtrar-vegetariano').addEventListener('click', filtrarVegetarianos);
        document.getElementById('filtrar-nao-vegetariano').addEventListener('click', filtrarNaoVegetarianos);
        document.getElementById('ordenar-crescente').addEventListener('click', ordenarCrescente);
        document.getElementById('ordenar-decrescente').addEventListener('click', ordenarDecrescente);





    
    // Exibir todos os produtos ao carregar a página
        exibirProdutos(produtos);