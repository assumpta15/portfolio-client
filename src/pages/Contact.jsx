// import { useState } from "react";
// //import api from "../utils/api";
// import api from "../api/axios";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");
//     setError("");

//     try {
//       await api.post("/contact", form);
//       setSuccess("✅ Email sent successfully. I’ll get back to you shortly.");
//       setForm({ name: "", email: "", message: "" });
//     } catch {
//       setError("❌ Failed to send email. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

import { useState } from "react";
import api from "../api/axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

     const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await api.post("/api/contact", form);
      setSuccess("✅ Email sent successfully. I’ll get back to you shortly.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("❌ Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 flex justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-center mb-2">Contact</h2>
        <p className="text-center text-gray-600 mb-6">
          Have a project or question? Let’s talk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} required className="input" />
          <input name="email" value={form.email} onChange={handleChange} required className="input" />
          <textarea name="message" value={form.message} onChange={handleChange} required className="input" />

          <button disabled={loading} className="w-full bg-black text-white py-3 rounded-lg">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {success && <p className="mt-4 text-green-600 text-center">{success}</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </section>
  );
}
