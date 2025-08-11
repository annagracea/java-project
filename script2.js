// Example backend URL (Change when you connect to Java backend)
const backendURL = "http://localhost:8080";

// Donor Registration
document.getElementById("donorForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    fetch(`${backendURL}/registerDonor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(res => res.text())
    .then(msg => alert(msg))
    .catch(err => console.error(err));
});

// Donor Search
document.getElementById("searchForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    fetch(`${backendURL}/searchDonor?bloodGroup=${formData.bloodGroup}&location=${formData.location}`)
    .then(res => res.json())
    .then(data => {
        const tbody = document.querySelector("#donorTable tbody");
        tbody.innerHTML = "";
        data.forEach(donor => {
            tbody.innerHTML += `
                <tr>
                    <td>${donor.name}</td>
                    <td>${donor.bloodGroup}</td>
                    <td>${donor.location}</td>
                    <td>${donor.phone}</td>
                </tr>
            `;
        });
    })
    .catch(err => console.error(err));
});
