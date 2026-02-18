document.addEventListener('DOMContentLoaded', () => {
    const trigoInput = document.getElementById('trigoInput');
    
    // Proporções baseadas em 10kg (10.000g) de trigo
    const proporcoes = {
        acucar: 500 / 10,    // 50g por kg
        fermento: 25 / 10,   // 2.5g por kg
        sal: 250 / 10,       // 25g por kg
        oleo: 500 / 10,      // 50g por kg
        agua: 5000 / 10      // 500ml por kg
    };

    const calcular = () => {
        const trigo = parseFloat(trigoInput.value) || 0;

        document.getElementById('res-acucar').innerText = (trigo * proporcoes.acucar).toLocaleString('pt-BR');
        document.getElementById('res-fermento').innerText = (trigo * proporcoes.fermento).toLocaleString('pt-BR');
        document.getElementById('res-sal').innerText = (trigo * proporcoes.sal).toLocaleString('pt-BR');
        document.getElementById('res-oleo').innerText = (trigo * proporcoes.oleo).toLocaleString('pt-BR');
        document.getElementById('res-agua').innerText = (trigo * proporcoes.agua).toLocaleString('pt-BR');
    };

    trigoInput.addEventListener('input', calcular);
});
