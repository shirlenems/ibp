
/* funcao criarPermalink(titulo) testada */
let titulo1 = "Curso Online NR-20 Básico";

function criarPermalink(titulo) { 
   let permalink = titulo.split(" ").join("-").toLowerCase();
   // console.log(`meu permalink tem o slug: ${slug} `)

  return permalink;
}

var slug = criarPermalink(titulo1);
console.log(`meu slug é: ${slug}`);

//juntar aqui o codigo do history.pushState... para atualizar a url do navegador



/* -------------------------  */

//solucao pra descobrir qual curso é e carregar a pagina ou o caminho inverso conforme a tab ativa ele troca a url.. 

var urlAtual = window.location.href;
 
if (urlAtual.includes("NR-10")) { //includes verifica se a urlatual tem a palavra nr-10
    //carrega a pagina populando com os dados do curso n-10 e 
    
}

//ou pode ir como case no lugar

/*const idCurso =  //'pegando a id do curso pra descobrir qual pagina carregar';
switch (idCurso) {
  case 'NR05':
    console.log('carrega todos os dados do nr10, esconde ou mostra o q tem, verifica qual tab ativa e deixa tudo atualizado incluindo a url do navegador');
    break;
  case 'NR10':
     //codigo
    break;
  case 'NR12':
  //codigo
    break;
  default:
    console.log(`O curso com id: ${idCurso} não foi encontrado.`);
} */
