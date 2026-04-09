const countryData = {
    name: "Reuel",
    countries: [
        { name: "Mexico", year: 2018 },
        { name: "Japan", year: 2022 },
        { name: "France", year: 2024 }
    ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(countryData)
})
.then(response => response.text()) 
.then(result => {
    console.log(result); 
})
.catch(error => {
    console.error("Error:", error);
});