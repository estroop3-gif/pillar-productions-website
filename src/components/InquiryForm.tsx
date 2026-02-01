"use client";

import { useState, useRef } from "react";

interface Field {
  name: string;
  label: string;
  type?: "text" | "email" | "select" | "textarea";
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface InquiryFormProps {
  formType: string;
  fields: Field[];
  submitLabel?: string;
}

export default function InquiryForm({
  formType,
  fields,
  submitLabel = "Submit",
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const body: Record<string, string> = { formType };

    data.forEach((value, key) => {
      body[key] = value.toString();
    });

    // Honeypot check
    if (body._hp) {
      setStatus("success");
      return;
    }
    delete body._hp;

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900 text-center">
        <h3 className="text-xl font-semibold mb-4">Request received</h3>
        <p className="text-neutral-400 leading-relaxed mb-6">
          Thank you for reaching out. Our team will follow up shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-neutral-500 hover:text-white transition-colors underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
      </div>

      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2"
          >
            {field.label}
            {field.required && <span className="text-neutral-600"> *</span>}
          </label>

          {field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors"
            >
              <option value="">Select</option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={4}
              placeholder={field.placeholder}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type || "text"}
              required={field.required}
              placeholder={field.placeholder}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-neutral-600 transition-colors"
            />
          )}
        </div>
      ))}

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
