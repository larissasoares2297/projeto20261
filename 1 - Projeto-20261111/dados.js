// ===== Camada de dados do Portal do Aluno =====
// Estas funções serão usadas pela TELA (React) na próxima aula.
// Complete os pontos marcados com TODO.

// A lista "crua" de redações. No projeto, virá da API.
// Não precisa mudar.
const REDACOES = [
  { id: 1, tema: "Meio ambiente", status: "corrigida",  nota: 920 },
  { id: 2, tema: "Tecnologia",    status: "em_correcao" },
  { id: 3, tema: "Educação",      status: "corrigida",  nota: 680 },
  { id: 4, tema: "Cidadania",     status: "corrigida",  nota: 800 },
];

// TODO 1 — devolva só as redações com status "corrigida" (use filter)
function filtrarCorrigidas(lista) {
  return lista.filter(r =>
r.status === "corrigida");
}

// TODO 2 — devolva um array só com as NOTAS da lista recebida (use map)
function extrairNotas(lista) {
   return lista.map(r => r.nota);
}

// TODO 3 — devolva a MÉDIA das notas das redações corrigidas
// dica: filtrarCorrigidas + extrairNotas + reduce
function calcularMedia(lista) {
    const corrigidas = filtrarCorrigidas(lista);

    const notas = extrairNotas(corrigidas);

    const soma = notas.reduce((t, n) => t + n, 0);

    return soma / notas.length;
}


// TODO 4 — devolva a PRIMEIRA redação com nota 900 ou mais (use find)
function redacaoDestaque(lista) {
   return lista.find(r => r.nota >= 900);
}

// Simula a busca na API (no projeto, vira: await fetch(url)).
// Já está pronta — não precisa mudar.
function buscarRedacoes() {
  return new Promise(resolve => {
    setTimeout(() => resolve(REDACOES), 500);
  });
}
