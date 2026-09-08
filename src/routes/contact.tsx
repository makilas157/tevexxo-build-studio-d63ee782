import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SocialRow } from "@/components/SocialRow";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tevexxo — start a project" },
      {
        name: "description",
        content:
          "Tell us about your project and the Tevexxo team will get back to you within one business day.",
      },
      { property: "og:title", content: "Contact Tevexxo" },
      { property: "og:description", content: "Start a project with our studio." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-xl border border-input bg-card/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        tag="Contact"
        title="Tell us what you're building."
        intro="Send a few lines about the problem. We reply within one business day."
      />

      <section className="section-pad">
        <div className="container-tv grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <form
            className="glass-panel space-y-5 p-6 md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block text-muted-foreground">Name</span>
                <input required name="name" className={inputClass} placeholder="Your name" />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block text-muted-foreground">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-2 block text-muted-foreground">Project details</span>
              <textarea
                required
                name="message"
                rows={6}
                className={inputClass}
                placeholder="What are you building, and what does success look like?"
              />
            </label>
            <button type="submit" className="btn-solid group">
              Send message
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            {sent && (
              <p className="text-sm text-accent">
                Thanks — your message is noted. Connect a mail service and we&rsquo;ll deliver it to
                your inbox.
              </p>
            )}
          </form>

          <div className="space-y-6">
            <div className="depth-card p-6">
              <Mail size={20} className="text-accent" />
              <h2 className="mt-3 font-display text-base font-semibold">Email</h2>
              <p className="mt-1 text-sm text-muted-foreground">hello@tevexxo.com</p>
            </div>
            <div className="depth-card p-6">
              <Phone size={20} className="text-accent" />
              <h2 className="mt-3 font-display text-base font-semibold">Phone</h2>
              <p className="mt-1 text-sm text-muted-foreground">+1 (000) 000-0000</p>
            </div>
            <div className="depth-card p-6">
              <MapPin size={20} className="text-accent" />
              <h2 className="mt-3 font-display text-base font-semibold">Studio</h2>
              <p className="mt-1 text-sm text-muted-foreground">Remote-first, worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <SocialRow />
    </>
  );
}
