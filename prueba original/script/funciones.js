let totalGastos = 0;
let totalBeneficios = 0;

document.getElementById('addGastoBtn').addEventListener('click', function() {
    addGasto();
    updateBalance();
});

document.getElementById('addBeneficioBtn').addEventListener('click', function() {
    addBeneficio();
    updateBalance();
});

function addGasto() {
    const gastoInput = document.getElementById('gasto');
    const gasto = parseFloat(gastoInput.value);

    if (!isNaN(gasto) && gasto > 0) {
        totalGastos += gasto;
        document.getElementById('totalGastos').textContent = totalGastos.toFixed(2);
        gastoInput.value = '';
    } else {
        alert('Por favor, ingrese un valor de gasto válido.');
    }
}

function addBeneficio() {
    const beneficioInput = document.getElementById('beneficio');
    const beneficio = parseFloat(beneficioInput.value);

    if (!isNaN(beneficio) && beneficio > 0) {
        totalBeneficios += beneficio;
        document.getElementById('totalBeneficios').textContent = totalBeneficios.toFixed(2);
        beneficioInput.value = '';
    } else {
        alert('Por favor, ingrese un valor de beneficio válido.');
    }
}

function updateBalance() {
    const balance = totalBeneficios - totalGastos;
    document.getElementById('balance').textContent = balance.toFixed(2);
}
