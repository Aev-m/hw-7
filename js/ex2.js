// Wait for the user to click the button
document.getElementById("lookupBtn").addEventListener("click", () => {
    
    const login = document.getElementById("username").value;
    
    const url = `https://api.github.com/users/${login}`;

    
    fetch(url)
        .then(response => response.json())
        .then(user => {
            const picContainer = document.getElementById("profilePic");
            const tableContainer = document.getElementById("resultTable");

            picContainer.innerHTML = "";
            tableContainer.innerHTML = "";

            const img = document.createElement("img");
            img.src = user.avatar_url;
            img.style.width = "150px"; 
            picContainer.appendChild(img);

            const table = document.createElement("table");

            function addRow(label, value) {
                const row = document.createElement("tr");
                const cell1 = document.createElement("td");
                cell1.textContent = label;
                const cell2 = document.createElement("td");
                cell2.textContent = value;
                row.appendChild(cell1);
                row.appendChild(cell2);
                table.appendChild(row);
            }


            addRow("Name", user.name);
            addRow("Blog", user.blog);
            addRow("Created", user.created_at);

            tableContainer.appendChild(table);
        })
        .catch(error => {

            console.error("Error fetching GitHub profile:", error);
        });
});