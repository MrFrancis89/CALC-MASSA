document.addEventListener('DOMContentLoaded', () => {
    const trigoInput = document.getElementById('trigoInput');
    const btnCopy = document.getElementById('btnCopy');

    // Proporções exatas da sua receita para cada 1 KG de trigo
    const ratios = {
        acucar: 50,    // 500g / 10
        sal: 25,       // 250g / 10
        fermento: 2.5, // 25g / 10
        oleo: 50,      // 500g / 10
        agua: 500      // 5000ml / 10
    };

    // Função auxiliar para formatar números de forma limpa
    const formatNumber = (num) => {
        // Se for inteiro, não mostra casas decimais. Se tiver quebrado, mostra até 1 casa.
        // Converte para string locale PT-BR (usa vírgula para decimais)
        return Number(num.toFixed(1)).toLocaleString('pt-BR', { maximumFractionDigits: 1 });
    };

    const updateResults = () => {
        // Tenta obter o valor. Substitui vírgula por ponto para garantir o cálculo correto
        let inputValue = trigoInput.value.replace(',', '.');
        const trigo = parseFloat(inputValue) || 0;

        // Atualiza os elementos do DOM
        document.getElementById('res-acucar').innerText = formatNumber(trigo * ratios.acucar);
        document.getElementById('res-sal').innerText = formatNumber(trigo * ratios.sal);
        document.getElementById('res-fermento').innerText = formatNumber(trigo * ratios.fermento);
        document.getElementById('res-oleo').innerText = formatNumber(trigo * ratios.oleo);
        document.getElementById('res-agua').innerText = formatNumber(trigo * ratios.agua);
    };

    const copyToClipboard = () => {
        const trigoVal = trigoInput.value || 0;
        if(parseFloat(trigoVal) <= 0) return; // Não copia se estiver zerado

        // Monta o texto para cópia
        const texto = `🍕 Receita para ${trigoVal}kg de Trigo:\n\n` +
            `• Açúcar: ${document.getElementById('res-acucar').innerText}g\n` +
            `• Sal: ${document.getElementById('res-sal').innerText}g\n` +
            `• Fermento: ${document.getElementById('res-fermento').innerText}g\n` +
            `• Óleo: ${document.getElementById('res-oleo').innerText}g\n` +
            `• Água gelada: ${document.getElementById('res-agua').innerText}ml`;

        // API de área de transferência
        navigator.clipboard.writeText(texto).then(() => {
            const originalHtml = btnCopy.innerHTML;
            btnCopy.innerHTML = "✅ Copiado com Sucesso!";
            btnCopy.style.backgroundColor = "#34C759"; // Verde iOS temporário
            
            setTimeout(() => {
                btnCopy.innerHTML = originalHtml;
                btnCopy.style.backgroundColor = ""; // Volta a cor original
            }, 2000);
        });
    };

    // Event Listeners
    // Usa 'input' e 'keyup' para garantir resposta rápida em qualquer teclado mobile
    trigoInput.addEventListener('input', updateResults);
    trigoInput.addEventListener('keyup', updateResults);
    btnCopy.addEventListener('click', copyToClipboard);
});
