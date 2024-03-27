let balance = 0;
let lastDate = null;

function updateBalance(amount) {
    balance += amount;
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = `$${balance.toFixed(2)}`;
}

function addTransaction(type) {
    const amount = parseFloat(document.getElementById("amount").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const description = document.getElementById("description").value.trim();
    const date = document.getElementById("date").value;

    if (!description || !date || isNaN(amount) || isNaN(quantity)) {
        alert("Por favor completa todos los campos con valores válidos.");
        return;
    }

    const totalAmount = type === 'income' ? amount * quantity : -amount * quantity; // Agregado el símbolo negativo

    const transactionDate = new Date(date).toLocaleDateString();
    const transactionsList = document.getElementById("transactions");

    // Agregar fecha como subtítulo solo si es diferente a la última fecha
    if (transactionDate !== lastDate) {
        const transactionDateElement = document.createElement("h4");
        transactionDateElement.textContent = transactionDate;
        transactionsList.appendChild(transactionDateElement);
        lastDate = transactionDate;
    }

    // Agregar transacción a la lista
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${description}</span>: <span>$${totalAmount.toFixed(2)}</span>`;
    listItem.classList.add(type);
    transactionsList.appendChild(listItem);

    updateBalance(totalAmount);
}
