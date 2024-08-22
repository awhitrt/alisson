const caixaPrincipal = document.querySelector('.caixaPrincipal')
const caixaPerguntas = document.querySelector('.caixaPerguntas')
const caixaAternativas = document.querySelector('.caixaAlternativas')
const caixaResultado = document.querySelector('.caixaResultado')
const textoResultado = document.querySelector('.textoResultado')

const perguntas = [
    {
        enunciado: " 1) Quais são os desafios enfrentados pelas mulheres na busca por representatividade na mídia? ",
        alternativas: [
            {
            texto: "a) Estereótipos de gênero, Falta de oportunidade de carreira e Discriminação salarial",
            afirmacao: "1) Correto, todos esses são desafios enfrentados pelas mulheres."
            },
            {
            texto:"b) falta de acesso à internet",
            afirmacao: "1) Errado, praticamente toda população tem acesso."
            },
            {
            texto:"c) transito nas grandes cidades ",
            afirmacao: "1) Errado, a alternativa não possui nada haver com o tema."
        }
    ]
    },

    {
        enunciado: "2) Qual é a importância da representatividade feminina na mídia para o empoderamento das mulheres? ",
        alternativas: [
            {
            texto:"a) Promove a diversidade e a inclusão, Desafia estereótipos de gênero e inspira outras mulheres e meninas",
            afirmacao: "2) Correto, tudo isso é possivel pela representatividade feminina."
            },
            {
            texto: "b) ensinar receitas",
            afirmacao: "2) Errado, o esteriótipo de mulheres com cozinha é muito errado."
            },
            { texto:"c) Diminuição da evasão escolar",
                afirmacao: "2) Errado, a alternativa não possui nada haver com o tema."
            }
        ]
           
    },
    {
        enunciado: "3) Por que as mulheres devem ter tanta representatividade quanto os homens na mídia?",
        alternativas: [
            {
            texto:"a) pois o mundo deve ser correto e justo à todos.",
            afirmacao: "3) Correto, devemos combater a desigualdade e preconceito."
        },
         {   
            texto: "b) Para poderem divulgar jogo do tigrinho",
            afirmacao: "3) Errado, jogo do tigrinho é ilegal."
         },
         {
          texto: "c) Melhoria na qualidade do sono",
          afirmacao: "3) Errado, a alternativa não possui nada haver com o tema. "
         }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual= perguntas[atual];
    caixaPerguntas.textContent= perguntaAtual.enunciado;
    caixaAternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas=document.createElement("button");
            botaoAlternativas.textContent=alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
           caixaAternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Seu Resultado :)";
        textoResultado.textContent = historiaFinal;
        caixaAternativas.textContent = "";
    }

    
    mostraPergunta();

    