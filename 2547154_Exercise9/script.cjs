const API_BASE = "http://localhost:3000";

async function loadRegistrations() {
  const res = await fetch(`${API_BASE}/registrations`);
  const data = await res.json();

  const table = document.getElementById("registrationsTable");
  table.innerHTML = "";
  data.users.forEach(f => {
    table.innerHTML += `
      <tr>
        <td class="p-2 border">${f.id}</td>
        <td class="p-2 border">${f.name}</td>
        <td class="p-2 border">${f.email}</td>
        <td class="p-2 border">${f.p_no}</td>
      </tr>
    `;
  });
}

document.getElementById("addRegistrationForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const type = document.getElementById("email").value;
  const size = document.getElementById("p_no").value;

  const res = await fetch(`${API_BASE}/registrations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, p_no })
  });

  const result = await res.json();
  alert(result.message || "User added");
  loadRegistrations();
});

document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", document.getElementById("name").value);
  formData.append("document", document.getElementById("document").files[0]);

  const res = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData
  });

  const text = await res.text();
  alert(text);
});

// document.getElementById("bookKennelForm").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   console.log("Form submission started");

//   const owner_name = document.getElementById("owner_name").value;
//   const p_no = document.getElementById("p_no").value;
//   const pet_name = document.getElementById("pet_name").value;
//   const species = document.getElementById("species").value;
//   const tot_days = parseInt(document.getElementById("tot_days").value, 10);  // Convert to integer
//   const kennel_id = parseInt(document.getElementById("kennel_id").value, 10);  // Convert to integer

//   const formData = { owner_name, p_no, pet_name, species, tot_days, kennel_id };

//   console.log("Captured data: ", formData);

//   console.log("Sending request with payload: ", formData);

//   const res = await fetch(`${API_BASE}/kennel_booking`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData)
//   });

//   const result = await res.json();
//   console.log("Response status: ", res.status);

//   if (res.status === 500) {
//     console.log("Booking failed:", result);
//   } else {
//     alert(result.message || "Booking attempted");
//   }
// });


