/* 
Kizzy, para melhor visualização e teste, criei esse arquivo separado para a questão 10.(Para ler a resposta melhor, use "Alt + Z" no Visual Studio Code).

    10. Crie um exemplo prático com duas classes:
    
    - Classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10%.

    - Classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20%.

    Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe Livro.
    
*/

class Produto {
    // Construtor que recebe 'nome' e 'preco' e inicializa os atributos da classe.
    constructor(nome, preco) {
      this.nome = nome;   // Atributo 'nome' do produto.
      this.preco = preco; // Atributo 'preco' do produto.
    }
    
    // Método que calcula o preço com desconto de 10%.
    calcularDesconto() {
      return this.preco * 0.9; // Aplica 10% de desconto.
    }
  }
  
  class Livro extends Produto {
    // Construtor que herda os atributos de Produto utilizando 'super'.
    constructor(nome, preco) {
      super(nome, preco); // Inicializa os atributos herdados.
    }
    
    // Sobrescreve o método calcularDesconto para aplicar 20% de desconto no preço do livro.
    calcularDesconto() {
      return this.preco * 0.8; // Aplica 20% de desconto.
    }
  }
  
  // Exemplo de uso:
  
  // Cria um objeto da classe Produto com nome "Camiseta" e preço 100.
  const produto = new Produto("Camiseta", 100);
  
  // Cria um objeto da classe Livro com nome "JavaScript Avançado" e preço 100.
  const livro = new Livro("JavaScript Avançado", 100);
  
  // Exibe o preço com desconto para cada objeto.
  console.log(`Preço camiseta: ${produto.calcularDesconto()}`);// Saída: 90 (desconto de 10%)
  console.log(`Preço livro: ${livro.calcularDesconto()}`);// Saída: 80 (desconto de 20%)
  
  /* 
  Explicação: 
  
  A herança permite que a classe `Livro` reutilize os atributos e métodos da classe `Produto`. Ao sobrescrever o método `calcularDesconto()`, a classe `Livro` aplica um desconto maior, específico para livros.
  */
  