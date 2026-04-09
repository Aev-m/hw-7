
const url = "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json";


fetch(url)
    .then(response => response.json()) 
    .then(paintings => {
        const tableElement = document.getElementById("paintings");

        paintings.forEach(painting => {
           
            const row = document.createElement("tr");

            
            const nameCell = document.createElement("td");
            nameCell.textContent = painting.name;

            const yearCell = document.createElement("td");
            yearCell.textContent = painting.year;

            const artistCell = document.createElement("td");
            artistCell.textContent = painting.artist;

           
            row.appendChild(nameCell);
            row.appendChild(yearCell);
            row.appendChild(artistCell);

            tableElement.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error fetching paintings:", error);
    });