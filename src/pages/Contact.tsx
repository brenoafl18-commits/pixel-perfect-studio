import { useState } from "react";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    service: "",
    email: "",
    description: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent(`Novo contato: ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Nome: ${form.firstName} ${form.lastName}\nServiço: ${form.service}\nEmail: ${form.email}\n\nDescrição:\n${form.description}`
    );
    window.location.href = `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`;
    
    setTimeout(() => setSending(false), 2000);
  };

  return (
    <Layout>
      <section className="px-4 md:px-8 py-8 min-h-[70vh]">
        <h1 className="text-4xl md:text-5xl font-light mb-16">
          {siteContent.contact.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div />
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-bold block mb-2">Name</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b-2 border-foreground pb-2 text-sm outline-none placeholder:text-muted-foreground w-full"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b-2 border-foreground pb-2 text-sm outline-none placeholder:text-muted-foreground w-full"
                />
              </div>
            </div>

            <input
              type="text"
              name="service"
              placeholder="Serviço"
              value={form.service}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-foreground pb-2 text-sm outline-none placeholder:text-muted-foreground w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-transparent border-b-2 border-foreground pb-2 text-sm outline-none placeholder:text-muted-foreground w-full"
            />

            <textarea
              name="description"
              placeholder="Project description"
              value={form.description}
              onChange={handleChange}
              rows={5}
              className="bg-transparent border-b-2 border-foreground pb-2 text-sm outline-none placeholder:text-muted-foreground w-full resize-none"
            />

            <button
              type="submit"
              disabled={sending}
              className="bg-foreground text-background px-8 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {sending ? "Enviando..." : "Let's work!"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
