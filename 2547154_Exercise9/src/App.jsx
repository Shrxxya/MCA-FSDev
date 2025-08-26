import { useState } from "react";
import HTVHKCLogo from "./assets/logo.png";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [p_no, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  // const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const API_BASE = "http://localhost:3000";

  // Fetch user data (registrations)
  const loadRegistrations = async () => {
    try {
      const res = await fetch(`${API_BASE}/registrations`);
      const data = await res.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    }
  };

  // Register a new user
  // const handleRegistration = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch(`${API_BASE}/registrations`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ name, email, p_no }),
  //     });

  //     const result = await res.json();
  //     alert(result.message || "User added");

  //     // Reload registrations after adding a user
  //     loadRegistrations();
  //   } catch (error) {
  //     console.error("Error registering user:", error);
  //     alert("Failed to register user.");
  //   }
  // };

  // const handleFileUpload = async (e) => {
  //   e.preventDefault();
  //   if (!file) {
  //     alert("No file selected.");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("document", file);

  //   try {
  //     const response = await fetch(`${API_BASE}/upload`, {
  //       method: "POST",
  //       body: formData,
  //     });
  //     const result = await response.text(); // In your case, it's a text response
  //     alert(result || "Upload successful");
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //     alert("Failed to upload file.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("No file selected.");
      return;
    }

    // Step 1: Register the user
    try {
      const response = await fetch(`${API_BASE}/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, p_no: p_no }),
      });

      const result = await response.json();
      if (response.status === 201) {
        alert(result.message || "User Registered Successfully!");

        // Step 2: Upload the file if the registration is successful
        const formData = new FormData();
        formData.append("name", name); // Send name to associate the file
        formData.append("document", file); // Append the file

        const uploadResponse = await fetch(`${API_BASE}/upload`, {
          method: "POST",
          body: formData,
        });

        const uploadResult = await uploadResponse.text();
        alert(uploadResult || "File uploaded successfully!");
      } else {
        alert(result.error || "Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration and upload:", error);
      alert("Failed to complete registration and upload.");
    }
  };

  // Load users when the component mounts
  // useEffect(() => {
  //   loadRegistrations();
  // }, []);

  return (
    <div className="bg-gray-100 p-6">
      <header>
        <a href="#" className="block text-[#292827] no-underline">
          <div className="flex items-center">
            <img src={HTVHKCLogo} alt="Logo" className="w-[140px] h-[140px]" />
            <div className="text-black text-4xl font-bold ml-4">
              Happy Tails Kennel Center
            </div>
          </div>
        </a>
      </header>

      <h1 className="text-3xl font-bold text-center text-black-600 mb-6">
        Happy Tails Kennel Booking
      </h1>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
        <button
          onClick={loadRegistrations}
          className="bg-[#fa2878] text-white px-4 py-2 rounded mb-4"
        >
          Load Users
        </button>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.p_no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Register Yourself</h2>
        <form id="addRegistrationForm" onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="text"
            value={p_no}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ID"
            className="border p-2 w-full rounded"
            required
          />
          {/* <div className="space-y-2">
            <label className="block text-sm font-semibold">Upload Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="border p-2 w-full rounded"
              required
            />
          </div> */}
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border p-2 w-full rounded"
            required
          />
          <button className="bg-[#fa2878] text-white px-4 py-2 rounded">
            Register
          </button>
        </form>
      </section>
    </div>
  );
};

export default App;
