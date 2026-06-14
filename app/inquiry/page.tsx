"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  UserRound
} from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  requirement: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  requirement: "",
  message: "",
  website: ""
};

const salesEmail = "ych775082667@gmail.com";
const inquiryEndpoint = "";

function validate(values: FormValues) {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?[0-9\s().-]{7,22}$/;

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = "Please enter a valid international phone number.";
  }
  if (values.website.trim()) errors.website = "Spam protection triggered.";

  return errors;
}

function buildMailto(values: FormValues) {
  const subject = encodeURIComponent(`LEDUSS Inquiry from ${values.name}`);
  const body = encodeURIComponent(
    [
      "New LEDUSS B2B Inquiry",
      "",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Company: ${values.company || "N/A"}`,
      `Country / Region: ${values.country || "N/A"}`,
      `Product Requirement: ${values.requirement || "N/A"}`,
      "",
      "Message:",
      values.message || "N/A"
    ].join("\n")
  );

  return `mailto:${salesEmail}?subject=${subject}&body=${body}`;
}

export default function InquiryPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const requiredLeft = useMemo(() => {
    return ["name", "email", "phone"].filter((field) => !values[field as keyof FormValues].trim()).length;
  }, [values]);

  function updateField(field: keyof FormValues, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (touched[field]) setErrors(validate(nextValues));
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      country: true,
      requirement: true,
      message: true,
      website: true
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus("error");
      setStatusMessage("Please complete the required fields before submitting.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("Sending your inquiry...");

    try {
      if (inquiryEndpoint) {
        const response = await fetch(inquiryEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        });
        if (!response.ok) throw new Error("Request failed");
      } else {
        window.location.href = buildMailto(values);
      }

      setStatus("success");
      setStatusMessage("Inquiry ready. Your email app will open, or our system will receive it after backend integration.");
    } catch {
      setStatus("error");
      setStatusMessage("Submission failed. Please email us directly or try again later.");
    }
  }

  return (
    <main className="inquiry-page">
      <header className="site-header contact-header">
        <a className="brand" href="/" aria-label="LEDUSS home">LEDUSS</a>
        <nav className="main-nav" aria-label="Inquiry page navigation">
          <a href="/">Home</a>
          <a href="/#products">Products <ChevronDown /></a>
          <a href="/#factory">Factory</a>
          <a href="/#projects">Projects</a>
          <a href="/#resources">Resources <ChevronDown /></a>
          <a className="active" href="/inquiry">Inquiry</a>
        </nav>
        <div className="header-actions">
          <button className="language" type="button">
            <Globe2 />
            English
            <ChevronDown />
          </button>
          <a className="whatsapp" href="#">
            <MessageCircle />
            WhatsApp Us
          </a>
        </div>
      </header>

      <section className="inquiry-shell">
        <aside className="inquiry-aside">
          <a className="back-link" href="/contact">
            <ArrowLeft />
            Back to Contact
          </a>
          <span className="contact-eyebrow">B2B Inquiry</span>
          <h1>Get a factory quote for your LED display project</h1>
          <p>
            Tell us the product type, application, size, pixel pitch or quantity. Our team will respond with a practical
            solution and factory pricing.
          </p>
          <div className="inquiry-proof">
            <div>
              <ShieldCheck />
              <strong>Privacy friendly</strong>
              <span>Your details are used only for project follow-up.</span>
            </div>
            <div>
              <CheckCircle2 />
              <strong>Fast response</strong>
              <span>Required fields are marked clearly for quick submission.</span>
            </div>
          </div>
        </aside>

        <form className="inquiry-form-card" onSubmit={handleSubmit} noValidate>
          <div className="form-head">
            <div>
              <span>LEDUSS Inquiry Form</span>
              <h2>Project information</h2>
            </div>
            <strong>{requiredLeft === 0 ? "Ready to submit" : `${requiredLeft} required left`}</strong>
          </div>

          <div className="form-grid">
            <label className="field">
              <span>Name <b>*</b></span>
              <div>
                <UserRound />
                <input
                  value={values.name}
                  onBlur={() => setTouched({ ...touched, name: true })}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.name)}
                  required
                />
              </div>
              {errors.name && <small>{errors.name}</small>}
            </label>

            <label className="field">
              <span>Email <b>*</b></span>
              <div>
                <Mail />
                <input
                  type="email"
                  value={values.email}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="name@company.com"
                  aria-invalid={Boolean(errors.email)}
                  required
                />
              </div>
              {errors.email && <small>{errors.email}</small>}
            </label>

            <label className="field">
              <span>Phone <b>*</b></span>
              <div>
                <Phone />
                <input
                  type="tel"
                  value={values.phone}
                  onBlur={() => setTouched({ ...touched, phone: true })}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="+1 555 123 4567"
                  aria-invalid={Boolean(errors.phone)}
                  required
                />
              </div>
              {errors.phone && <small>{errors.phone}</small>}
            </label>

            <label className="field">
              <span>Company Name</span>
              <input
                value={values.company}
                onChange={(event) => updateField("company", event.target.value)}
                placeholder="Your company name"
              />
            </label>

            <label className="field">
              <span>Country / Region</span>
              <input
                value={values.country}
                onChange={(event) => updateField("country", event.target.value)}
                placeholder="United States, UAE, Germany..."
              />
            </label>

            <label className="field">
              <span>Product Requirement</span>
              <select value={values.requirement} onChange={(event) => updateField("requirement", event.target.value)}>
                <option value="">Select product type</option>
                <option>Indoor LED Displays</option>
                <option>Outdoor LED Displays</option>
                <option>LED Floor Displays</option>
                <option>Foldable LED Screens</option>
                <option>Cylinder / Custom-Shaped LED Displays</option>
                <option>OEM/ODM Custom Project</option>
              </select>
            </label>

            <label className="field full-field">
              <span>Message</span>
              <textarea
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us about your project: pixel pitch, size, application, quantity, installation city, delivery time..."
                rows={5}
              />
            </label>

            <label className="spam-field" aria-hidden="true">
              Website
              <input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateField("website", event.target.value)} />
            </label>
          </div>

          <div className={`form-status ${status}`}>
            {status === "submitting" ? <Loader2 /> : status === "success" ? <CheckCircle2 /> : <ShieldCheck />}
            <span>{statusMessage || "Protected by a hidden anti-spam field. Required fields are marked with *."}</span>
          </div>

          <button className="submit-inquiry" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
            {status === "submitting" ? <Loader2 /> : <Send />}
          </button>
        </form>
      </section>
    </main>
  );
}
