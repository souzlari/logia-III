const livros = require("./database");

livros.sort((a, b) => a.páginas - b.páginas);

const input = require("readline-sync");
const verLivrosCategoria = input.question(
  "Voce deseja encontrar um livro por categoria?(S/N/Recomenda/Wishlist)"
);

if (verLivrosCategoria.toLocaleUpperCase() === "S") {
  console.log("Essas são as opções disponíveis:");
  console.log("Distopia", "Romance", "Quadrinhos");

  const escolherCategoria = input.question("Qual categoria você deseja?");

  const categorias = livros.filter(
    (livros) => livros.categoria === qualCategoria
  );

  console.log(categorias);
} else {
  console.log("Esses são todos os livros disponíveis: ");
  console.log(livros);
}
