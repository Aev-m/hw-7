document.getElementById("sampleForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const resultDiv = document.getElementById("formResult");
    
    resultDiv.innerHTML = "<h3>Form Data Entered</h3>";

    const table = document.createElement("table");
    
    const headerRow = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.textContent = "Key";
    const th2 = document.createElement("th");
    th2.textContent = "Value";
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    table.appendChild(headerRow);

    formData.forEach((value, key) => {
        const row = document.createElement("tr");
        
        const cell1 = document.createElement("td");
        cell1.style.fontWeight = "bold";
        cell1.textContent = key;
        
        const cell2 = document.createElement("td");
        cell2.textContent = value;
        
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });

    resultDiv.appendChild(table);
});