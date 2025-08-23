const API_BASE = "http://localhost:3000";

async function loadKennels() {
  const res = await fetch(`${API_BASE}/kennels`);
  const data = await res.json();

  const table = document.getElementById("kennelsTable");
  table.innerHTML = "";
  data.kennels.forEach(f => {
    table.innerHTML += `
      <tr>
        <td class="p-2 border">${f.id}</td>
        <td class="p-2 border">${f.name}</td>
        <td class="p-2 border">${f.type}</td>
        <td class="p-2 border">${f.size}</td>
        <td class="p-2 border">${f.fee}</td>
      </tr>
    `;
  });
}

document.getElementById("addKennelForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const size = document.getElementById("size").value;
  const fee = document.getElementById("fee").value;

  const res = await fetch(`${API_BASE}/kennels`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, type, size, fee })
  });

  const result = await res.json();
  alert(result.message || "Kennel added");
  loadKennels();
});

// document.getElementById("bookKennelForm").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   console.log("data values captured 1")
//   const owner_name = document.getElementById("owner_name").value;
//   const p_no = document.getElementById("p_no").value;
//   const pet_name = document.getElementById("pet_name").value;
//   const species = document.getElementById("species").value;
//   const tot_days = document.getElementById("tot_days").value;
//   const kennel_id = document.getElementById("kennel_id").value;
//   console.log("data values captured 2")

//   const res = await fetch(`${API_BASE}/kennel_booking`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ owner_name, p_no, pet_name, species, tot_days, kennel_id })
//   });

//   const result = await res.json();
//   alert(result.message || "Booking attempted");
// });

document.getElementById("bookKennelForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form submission started");

  const owner_name = document.getElementById("owner_name").value;
  const p_no = document.getElementById("p_no").value;
  const pet_name = document.getElementById("pet_name").value;
  const species = document.getElementById("species").value;
  const tot_days = parseInt(document.getElementById("tot_days").value, 10);  // Convert to integer
  const kennel_id = parseInt(document.getElementById("kennel_id").value, 10);  // Convert to integer

  const formData = { owner_name, p_no, pet_name, species, tot_days, kennel_id };

  console.log("Captured data: ", formData);

  console.log("Sending request with payload: ", formData);

  const res = await fetch(`${API_BASE}/kennel_booking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  const result = await res.json();
  console.log("Response status: ", res.status);

  if (res.status === 500) {
    console.log("Booking failed:", result);
  } else {
    alert(result.message || "Booking attempted");
  }
});


