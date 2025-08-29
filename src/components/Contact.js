import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Contact Me
          </h2>
        </div>

        <div className="flex flex-wrap gap-10">
          {/* Contact Info */}
          <div className="flex-1 min-w-[280px]">
            <ToastContainer />
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <p className="text-muted-foreground mt-2">
              Feel free to contact me for any work or suggestions below.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:2020sujeetsah@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  2020sujeetsah@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-primary" />
                <a
                  href="https://www.linkedin.com/in/sujeet-kumar-ba2825216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/sujeet-kumar-ba2825216
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaGithub className="text-primary" />
                <a
                  href="https://github.com/SUJEET-JMI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/SUJEET-JMI
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 min-w-[280px]">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="rounded-md border border-border bg-card p-5 shadow-sm"
              onSubmit={() => {
                setIsSubmitting(true);
                toast.success("Thank you! Your message has been sent.", {
                  position: "top-right",
                  autoClose: 5000,
                });
              }}
            >
              {/* Web3Forms access key */}
              <input
                type="hidden"
                name="access_key"
                value="464522f0-b02f-44de-a0ef-57f612f46a29"
              />

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                  placeholder="Your email"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[120px]"
                  required
                  placeholder="Your message"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
