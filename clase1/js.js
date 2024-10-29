
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
            { id: 10, nome: 'Queijo', preco: 8, vegetariano: true }
        ];

        let carrinho = [];

        // Função para exibir a lista de produtos
        function exibirProdutos(lista) {
            const listaProdutos = document.getElementById('lista-produtos');
            listaProdutos.innerHTML = '';
            lista.forEach(produto => {
                const item = document.createElement('li');
                item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)} - ${produto.vegetariano ? 'Vegetariano' : 'Não Vegetariano'}`;
                
                const botaoAdicionar = document.createElement('button');
                botaoAdicionar.textContent = 'Adicionar ao Carrinho';
                botaoAdicionar.onclick = () => adicionarAoCarrinho(produto);

                item.appendChild(botaoAdicionar);
                listaProdutos.appendChild(item);
            });
        }

        // Função para adicionar um produto ao carrinho
        function adicionarAoCarrinho(produto) {
            carrinho.push(produto);
            exibirCarrinho();
        }

        // Função para exibir os produtos no carrinho
        function exibirCarrinho() {
            const listaCarrinho = document.getElementById('lista-carrinho');
            listaCarrinho.innerHTML = '';
            carrinho.forEach((produto, index) => {
                
                const item = document.createElement('li');
                item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;

                const botaoRemover = document.createElement('button');
                botaoRemover.textContent = 'Remover';
                botaoRemover.onclick = () => removerDoCarrinho(index);

                item.appendChild(botaoRemover);
                listaCarrinho.appendChild(item);
            });
        }

        // Função para remover um produto do carrinho
        function removerDoCarrinho(index) {
            carrinho.splice(index, 1);
            exibirCarrinho();
        }

        // Função para calcular o total do carrinho
        function calcularTotal() {
            const total = carrinho.reduce((soma, produto) => soma + produto.preco, 0);
            document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
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

        // Função para pesquisar produtos por nome
        function pesquisarProduto(event) {
            const termo = event.target.value.toLowerCase();
            const filtrados = produtos.filter(produto => produto.nome.toLowerCase().includes(termo));
            exibirProdutos(filtrados);
        }

        // Adicionando event listeners aos botões
        document.getElementById('calcular-total').addEventListener('click', calcularTotal);
        document.getElementById('filtrar-vegetariano').addEventListener('click', filtrarVegetarianos);
        document.getElementById('filtrar-nao-vegetariano').addEventListener('click', filtrarNaoVegetarianos);
        document.getElementById('ordenar-crescente').addEventListener('click', ordenarCrescente);
        document.getElementById('ordenar-decrescente').addEventListener('click', ordenarDecrescente);
        document.getElementById('pesquisar-produto').addEventListener('input', pesquisarProduto);

        // Exibir todos os produtos ao carregar a página
        exibirProdutos(produtos);
    