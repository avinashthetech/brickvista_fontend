import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

export default function Dashboard() {
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");

  // 🔐 Protect
  useEffect(() => {
    if (!token) navigate("/login");
  }, []);

  // 📥 Fetch
  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/messages`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setMessages(data);
        setFiltered(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // 🔍 Search
  useEffect(() => {
    setFiltered(
      messages.filter(
        (m) =>
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          m.email.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, messages]);

  // 🗑️ Delete
  const handleDelete = async (id) => {
    await fetch(`${API_BASE_URL}/api/messages/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setMessages((prev) => prev.filter((m) => m._id !== id));
  };

  // ✅ Done
  const handleDone = async (id) => {
    await fetch(`${API_BASE_URL}/api/messages/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: "Done" }),
    });

    setMessages((prev) =>
      prev.map((m) =>
        m._id === id ? { ...m, status: "Done" } : m
      )
    );
  };

  // 🔐 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // 📊 Stats
  const total = messages.length;
  const done = messages.filter((m) => m.status === "Done").length;
  const pending = total - done;

  const chartData = [
    { name: "Total", value: total },
    { name: "Done", value: done },
    { name: "Pending", value: pending },
  ];

  // 📥 Export CSV
  const exportCSV = () => {
    const rows = [
      ["Name", "Email", "Phone", "Message", "Status"],
      ...messages.map((m) => [
        m.name,
        m.email,
        m.phone,
        m.message,
        m.status,
      ]),
    ];

    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "messages.csv";
    a.click();
  };

  return (
    <div className={darkMode ? "dark dashboard-container" : "dashboard-container"}>
      
      {/* Header */}
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀" : "🌙"}
          </button>

          <div className="notify">🔔 {pending}</div>

          <div className="profile">
            <span onClick={() => setOpen(!open)}>👤</span>
            {open && (
              <div className="dropdown">
                <p onClick={handleLogout}>Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="card stat-card">
          <h3>Total</h3>
          <p>{total}</p>
        </div>
        <div className="card stat-card green">
          <h3>Done</h3>
          <p>{done}</p>
        </div>
        <div className="card stat-card orange">
          <h3>Pending</h3>
          <p>{pending}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="card" style={{ height: 300, marginBottom: 20 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Search + Export */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={exportCSV}>Export</button>
      </div>

      {/* Table */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((msg) => (
                <tr key={msg._id}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.phone}</td>
                  <td>{msg.message}</td>

                  <td>
                    {msg.status === "Done" ? (
                      <span className="done">✔</span>
                    ) : (
                      <span className="pending">⏳</span>
                    )}
                  </td>

                  <td>
                    <button onClick={() => handleDone(msg._id)}>Done</button>
                    <button onClick={() => handleDelete(msg._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}