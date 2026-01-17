// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const formRef = useRef();
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");
//     setError("");

//     try {
//       await emailjs.sendForm(
//         "service_v4o9bye",
//         "default_template",
//         formRef.current,
//         "kOusaIuwI0NIZfsD6"
//       );

//       setSuccess("✅ Email sent successfully. I’ll get back to you shortly.");
//       formRef.current.reset();
//     } catch (err) {
//       console.error(err);
//       setError("❌ Failed to send email. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 flex justify-center">
//       <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow">
//         <h2 className="text-3xl font-bold text-center mb-2">Contact</h2>
//         <p className="text-center text-gray-600 mb-6">
//           Have a project or question? Let’s talk.
//         </p>

//         <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
//           <input name="name" placeholder="Your name" required className="input" />
//           <input name="email" type="email" placeholder="Your email" required className="input" />
//           <textarea name="message" rows="4" placeholder="Your message" required className="input" />

//           <button disabled={loading} className="w-full bg-black text-white py-3 rounded-lg">
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>

//         {success && <p className="mt-4 text-green-600 text-center">{success}</p>}
//         {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
//       </div>
//     </section>
//   );
// }



























import { useState, useEffect } from "react";
import api from "../utils/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
  if (success) {
    const timer = setTimeout(() => setSuccess(""), 5000);
    return () => clearTimeout(timer);
  }
}, [success]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    
    setError("");

    try {
      await api.post("/contact", form);
      setSuccess("✅ Email sent successfully. Thanks for reaching out! I’ll respond within 24 hours.");
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
          <input name="name" value={form.name} onChange={handleChange} required className="input" placeholder="Name" />
          <br />
          <input name="email" value={form.email} onChange={handleChange} required className="input"  placeholder="Email"/>
          <br />
          <textarea name="message" value={form.message} onChange={handleChange} required className="input" placeholder="Message" />

          <button disabled={loading} className="w-full bg-black text-white py-3 rounded-lg">
            {loading ? "Sending..." : "Send Message"}

          </button>


          
        </form>

        {success &&<p className="mt-4 text-green-600 text-center font-medium animate-fadeIn">{success}</p>}
       
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </section>
  );
}
