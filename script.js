// Function to add a food item to the table
function addFoodItem(event) {
    event.preventDefault();

    const name = document.getElementById("foodName").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const availability = document.getElementById("availability").value;

    const table = document.getElementById("foodTableBody");
    const row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${category}</td>
        <td>$${parseFloat(price).toFixed(2)}</td>
        <td>${availability}</td>
    `;

    // Clear the form after adding
    document.querySelector("form").reset();
}

// Function to sort the table by column
function sortTable(columnIndex) {
    const table = document.getElementById("foodTable");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();

        // Sort numerically for price
        if (columnIndex === 2) {
            return parseFloat(cellA.replace('$', '')) - parseFloat(cellB.replace('$', ''));
        }

        return cellA.localeCompare(cellB);
    });

    // Reorder rows
    tbody.innerHTML = "";
    sortedRows.forEach(row => tbody.appendChild(row));
}

// Function to filter the table
function filterTable() {
    const filter = document.getElementById("filter").value.toLowerCase();
    const rows = document.querySelectorAll("#foodTableBody tr");

    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
}
