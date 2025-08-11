console.log("MapMyDonor frontend loaded");

// Example: Fetch donors from backend API
function getDonors() {
    fetch("http://localhost:8080/donors")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
