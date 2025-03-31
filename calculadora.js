function calcularDiferenca() {
    let dataInicial = document.getElementById("dataInicial").value;
    let horaInicial = document.getElementById("horaInicial").value;
    let dataFinal = document.getElementById("dataFinal").value;
    let horaFinal = document.getElementById("horaFinal").value;
    
    let inicio = new Date(`${dataInicial}T${horaInicial}`);
    let fim = new Date(`${dataFinal}T${horaFinal}`);
    
    if (isNaN(inicio) || isNaN(fim)) {
        alert("Por favor, insira datas e horas válidas.");
        return;
    }
    
    let diferencaMs = fim - inicio;
    if (diferencaMs < 0) {
        alert("A data final deve ser maior que a data inicial.");
        return;
    }
    
    let totalMinutos = Math.floor(diferencaMs / (1000 * 60));
    let horas = Math.floor(totalMinutos / 60);
    let minutos = totalMinutos % 60;
    
    let resultado = `${horas}h ${minutos}min`;
    document.getElementById("resultado").innerText = resultado;
}

function copiarResultado() {
    let resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado).then(() => {
        alert("Resultado copiado!");
    });
}

function definirDataAtual() {
    let hoje = new Date().toISOString().split('T')[0];
    document.getElementById("dataInicial").value = hoje;
    document.getElementById("dataFinal").value = hoje;
}
