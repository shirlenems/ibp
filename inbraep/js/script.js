import {Inbraep} from "./Inbraep.js";
import {Cursos} from "./Cursos.js";
import {Curso} from "./Curso.js"; 

var retornoDadosJson;

function consultaJson() {
    var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
request.send();
request.onload = function() {
    retornoDadosJson = request.response;
    return retornoDadosJson;
  }
}

let dados = consultaJson();

console.log('dados json ', dados);

/*const inbraep = new Inbraep();
const cursos = new Cursos();
const curso = new Curso();

inbraep.nomeFantasia = "Inbraep";
inbraep.nomeJuridico = "INBRAP - Instituto Brasileiro de Treinamento Profissional Ltda.";

console.log(`Nome fantasia ${inbraep.nomeFantasia} e nome jurídico ${inbraep.nomeJuridico}`); */




function montaPaginaCursos() {

    var tituloPagina = "CURSOS";
    var subtituloPagina = "INBRAEP - Instituto Brasileiro de Ensino Profissionalizante";

    var pagina = `<h1 id="titulo">${tituloPagina}</h1>`;

   
    const cursoNR10 = new Curso();
    cursoNR10.tituloCurso = dados.cursos.cursoNR10.tituloCurso;

    console.log('dados vindos do json curso tituloCuurso', cursoNR10.tituloCurso);



  /*  CURSOS
    INBRAEP - Instituto Brasileiro de Ensino Profissionalizante
logo
    CIPA Curso NR05 CIPA - Comissão Interna de Prevenção de Acidentes

    A partir de R$99,90
    Saiba mais */

}