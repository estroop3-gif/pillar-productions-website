"use client";

import { useState } from "react";

interface EmailCaptureProps {
  heading?: string;
  description?: string;
  buttonLabel?: string;
  source?: string;
  variant?: "inline" | "card";
}

export default function EmailCapture({
  heading = "Get the free guide: How to Get Your Brand on Screen",
  description = "A step-by-step overview of how brands enter entertainment — formats, budgets, deal structures, and what to look for in a producing partner.",
  buttonLabel = "Send Me the Guide",
  source = "guide",
  variant = "card",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className={
          variant === "card"
            ? "bg-neutral-950 rounded-2xl p-8 border border-neutral-900 text-center"
            : "text-center py-6"
        }
      >
        <p className="text-lg font-semibold mb-2">You are in.</p>
        <p className="text-neutral-400 text-sm">
          Check your inbox — the guide is on its way.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        variant === "card"
          ? "bg-neutral-950 rounded-2xl p-8 border border-neutral-900"
          : ""
      }
    >
      <h3 className="text-xl font-semibold mb-2">{heading}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-5">
        {description}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 bg-black border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-white text-black text-sm font-medium tracking-wide rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? "Sending..." : buttonLabel}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-2">{errorMsg}</p>
      )}
    </div>
  );
}
