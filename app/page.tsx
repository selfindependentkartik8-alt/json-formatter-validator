"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"format" | "minify">("format");
  const [copied, setCopied] = useState(false);

  const scrollToTool = () => {
    document.getElementById("formatter")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const processJson = () => {
    if (!input.trim()) {
      setError("Please paste JSON first.");
      setResult("");
      return;
    }

    try {
      const parsed = JSON.parse(input);

      const output =
        mode === "format"
          ? JSON.stringify(parsed, null, 2)
          : JSON.stringify(parsed);

      setResult(output);
      setError("");
      setCopied(false);
    } catch (err) {
      setResult("");
      setError(
        err instanceof Error ? err.message : "Invalid JSON format."
      );
    }
  };

  const copyResult = async () => {
    if (!result) return;

    await navigator.clipboard.writeText(result);
    setCopied(true);

    setTimeout(() => setCopied(false), 1800);
  };

  const clearAll = () => {
    setInput("");
    setResult("");
    setError("");
    setCopied(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-red-950 via-red-950/70 to-black text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[620px] w-[850px] -translate-x-1/2 rounded-full bg-red-500/20 blur-[150px]" />

      <div className="pointer-events-none absolute left-[-180px] top-[40%] h-[350px] w-[350px] rounded-full bg-rose-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[58%] h-[350px] w-[350px] rounded-full bg-red-600/10 blur-[140px]" />

      {/* NAVBAR */}
      <nav className="relative z-30 mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/40 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">

          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-red-400/20 bg-white/10 shadow-lg shadow-red-500/10">
              <img
                src="/logo.png"
                alt="KrishAIWorks Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-tight text-white sm:text-base">
                KrishAIWorks
              </h2>

              <p className="text-[9px] font-medium tracking-wide text-zinc-500 sm:text-[10px]">
                AI Solutions That Work
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-1 md:flex">

            <a
              href="#features"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-red-300"
            >
              Features
            </a>

            <a
              href="#how"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-red-300"
            >
              How To Use
            </a>

            <a
              href="#faq"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-red-300"
            >
              FAQ
            </a>

            <button
              onClick={scrollToTool}
              className="ml-2 rounded-xl border border-red-400/20 bg-red-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-400 active:scale-95"
            >
              Try Now
            </button>
          </div>

          <button
            onClick={scrollToTool}
            className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-500/20 md:hidden"
          >
            Try Now
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center sm:px-8 sm:pt-24">

        <div className="rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs text-red-200 shadow-lg shadow-red-950/30 backdrop-blur-xl">
          {"{ }"} JSON Formatter & Validator
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Built by{" "}
          <span className="font-semibold text-red-400">
            KrishAIWorks
          </span>
        </p>

        <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Clean Your JSON.
          <br />

          <span className="bg-gradient-to-r from-red-300 via-rose-400 to-orange-300 bg-clip-text text-transparent">
            Instantly Validate It.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          Format, beautify, minify and validate JSON with a clean,
          developer-friendly tool built for speed.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-2.5">

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            ⚡ Instant Format
          </span>

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            ✅ JSON Validate
          </span>

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            📱 Mobile Friendly
          </span>

        </div>

        {/* TOOL */}
        <div
          id="formatter"
          className="mt-12 w-full max-w-4xl scroll-mt-8"
        >
          <div className="rounded-[2rem] border border-red-400/10 bg-zinc-950/60 p-5 shadow-2xl shadow-red-950/30 backdrop-blur-2xl sm:p-7">

            <div className="mb-5 text-left">

              <h2 className="text-lg font-semibold text-white sm:text-xl">
                JSON Formatter
              </h2>

              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Paste your JSON below and choose Format or Minify.
              </p>

            </div>

            {/* MODE */}
            <div className="mb-4 grid grid-cols-2 gap-3">

              <button
                onClick={() => setMode("format")}
                className={`rounded-xl border py-3 text-sm font-semibold transition ${
                  mode === "format"
                    ? "border-red-400/30 bg-red-500 text-white shadow-lg shadow-red-500/20"
                    : "border-white/10 bg-white/[0.03] text-zinc-400 hover:bg-white/[0.06]"
                }`}
              >
                ✨ Format
              </button>

              <button
                onClick={() => setMode("minify")}
                className={`rounded-xl border py-3 text-sm font-semibold transition ${
                  mode === "minify"
                    ? "border-red-400/30 bg-red-500 text-white shadow-lg shadow-red-500/20"
                    : "border-white/10 bg-white/[0.03] text-zinc-400 hover:bg-white/[0.06]"
                }`}
              >
                ⚡ Minify
              </button>

            </div>

            {/* INPUT */}
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste JSON here..."
              spellCheck={false}
              className="h-64 w-full resize-none rounded-2xl border border-red-400/20 bg-black/30 p-5 font-mono text-sm leading-7 text-white outline-none placeholder:text-zinc-600 transition focus:border-red-400 focus:ring-2 focus:ring-red-400/10"
            />

            {/* ACTIONS */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={processJson}
                className="h-14 flex-1 rounded-2xl bg-red-500 px-7 text-sm font-semibold text-white shadow-xl shadow-red-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-red-400 active:scale-95"
              >
                {mode === "format"
                  ? "✨ Format JSON"
                  : "⚡ Minify JSON"}
              </button>

              <button
                onClick={clearAll}
                className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-7 text-sm font-semibold text-zinc-300 transition hover:bg-white/[0.08] active:scale-95"
              >
                Clear
              </button>

            </div>

            {/* ERROR */}
            {error && (
              <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-left">

                <div className="flex items-center gap-2">
                  <span className="text-red-400">⚠️</span>

                  <h3 className="font-semibold text-red-300">
                    Invalid JSON
                  </h3>
                </div>

                <p className="mt-2 break-words text-sm leading-6 text-red-200/80">
                  {error}
                </p>

              </div>
            )}

            <p className="mt-3 text-left text-xs text-zinc-600">
              Your JSON is processed directly in your browser.
            </p>

          </div>
        </div>

        {/* RESULT */}
        {result && (
          <div className="mt-10 w-full max-w-4xl text-left">

            <div className="rounded-[2rem] border border-red-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-red-950/30 backdrop-blur-2xl sm:p-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    JSON Result
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    Your JSON has been processed successfully.
                  </p>
                </div>

                <span className="w-fit rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-medium text-red-300">
                  ✓ Valid JSON
                </span>

              </div>

              {/* HIGHLIGHTED RESULT HEADING */}
              <div className="mt-7 overflow-hidden rounded-2xl border border-white/5 bg-black/30">

                <div className="border-b border-red-400/10 bg-red-500/[0.04] px-5 py-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-red-300">
                    JSON Output
                  </h3>
                </div>

                <div className="p-5 sm:p-7">
                  <pre className="max-h-[600px] overflow-auto whitespace-pre-wrap break-words font-mono text-sm leading-7 text-zinc-300">
                    {result}
                  </pre>
                </div>

              </div>

              {/* RESULT ACTIONS */}
              <div className="mt-6 flex flex-wrap gap-3">

                <button
                  onClick={copyResult}
                  className="rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-400 active:scale-95"
                >
                  {copied ? "✓ Copied" : "📋 Copy Result"}
                </button>

                <button
                  onClick={clearAll}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 active:scale-95"
                >
                  🔄 New JSON
                </button>

              </div>

            </div>
          </div>
        )}

      </section>

      {/* WHY USE IT */}
      <section
        id="features"
        className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-10 px-5 py-24 sm:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto inline-flex rounded-full border border-red-400/10 bg-red-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Why Use It
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Clean JSON without the hassle.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Everything you need to work with JSON quickly and efficiently.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <FeatureCard
            icon="✨"
            number="01"
            title="Pretty Format"
            description="Turn messy JSON into clean, readable and properly indented data."
          />

          <FeatureCard
            icon="⚡"
            number="02"
            title="Minify JSON"
            description="Compress your JSON into a compact format whenever you need it."
          />

          <FeatureCard
            icon="✅"
            number="03"
            title="Validate JSON"
            description="Instantly detect invalid JSON and understand what went wrong."
          />

        </div>

      </section>

      {/* HOW TO USE */}
      <section
        id="how"
        className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-10 px-5 py-24 sm:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto inline-flex rounded-full border border-red-400/10 bg-red-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            How To Use
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three simple steps.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Clean and validate your JSON in just a few seconds.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <StepCard
            number="01"
            title="Paste JSON"
            description="Paste your JSON data into the editor."
          />

          <StepCard
            number="02"
            title="Choose Mode"
            description="Select Format for readable JSON or Minify for compact JSON."
          />

          <StepCard
            number="03"
            title="Copy Result"
            description="Review the result and copy it instantly."
          />

        </div>

      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative z-10 mx-auto w-full max-w-3xl scroll-mt-10 px-5 py-24 sm:px-8"
      >

        <div className="text-center">

          <div className="mx-auto inline-flex rounded-full border border-red-400/10 bg-red-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            FAQ
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-10 space-y-4">

          <Faq
            question="Is this JSON formatter free?"
            answer="Yes. You can format, minify and validate JSON completely free."
          />

          <Faq
            question="Does the tool store my JSON?"
            answer="No. JSON processing happens directly in your browser."
          />

          <Faq
            question="Can I minify JSON?"
            answer="Yes. Select Minify mode and the tool will remove unnecessary whitespace."
          />

          <Faq
            question="What happens if my JSON is invalid?"
            answer="The tool will show an error message explaining the JSON parsing problem."
          />

        </div>

      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">

        <div className="relative overflow-hidden rounded-[2rem] border border-red-400/10 bg-gradient-to-br from-red-950/60 via-zinc-950/80 to-black px-6 py-14 text-center shadow-2xl shadow-red-950/30 backdrop-blur-xl sm:px-12">

          <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

          <div className="relative">

            {/* HERO/CTA LOGO */}
            <div className="mx-auto h-14 w-14 overflow-hidden rounded-2xl border border-red-400/20 bg-white/10 shadow-lg shadow-red-500/10">
              <img
                src="/logo.png"
                alt="KrishAIWorks Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              KrishAIWorks
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Make your JSON clean and ready.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500">
              Format, validate and minify JSON instantly with a simple developer tool.
            </p>

            <button
              onClick={scrollToTool}
              className="mt-8 inline-flex rounded-xl bg-red-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-400 active:scale-95"
            >
              ✨ Try It Now
            </button>

          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 px-5 py-10">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 sm:flex-row">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="KrishAIWorks Logo"
              className="h-12 w-12 rounded-full border border-red-400/20 object-cover shadow-lg shadow-red-500/10"
            />

            <div>
              <p className="font-semibold text-white">
                KrishAIWorks
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                AI Solutions That Work
              </p>
            </div>

          </div>

          <a
            href="https://instagram.com/KrishAIWorks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition hover:text-red-400"
          >
            Instagram · @KrishAIWorks
          </a>

          <div className="text-center sm:text-right">

            <p className="text-xs text-zinc-600">
              © 2026 KrishAIWorks
            </p>

            <p className="mt-1 text-xs text-zinc-700">
              Built with AI.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}

/* FEATURE CARD */

function FeatureCard({
  icon,
  number,
  title,
  description,
}: {
  icon: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-zinc-950/60 p-7 shadow-xl backdrop-blur-2xl transition hover:border-red-400/20">

      <div className="text-3xl">
        {icon}
      </div>

      <p className="mt-5 text-[10px] font-bold tracking-[0.25em] text-red-400/60">
        {number}
      </p>

      <h3 className="mt-2 text-lg font-bold text-red-300">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

/* STEP CARD */

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/[0.06] bg-zinc-950/50 p-7 backdrop-blur-2xl">

      <p className="text-xs font-black tracking-[0.25em] text-red-400">
        {number}
      </p>

      <h3 className="mt-5 font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

/* FAQ */

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-white/[0.06] bg-zinc-950/60 p-5 backdrop-blur-xl">

      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white">

        <span>{question}</span>

        <span className="text-xl text-red-400 transition group-open:rotate-45">
          +
        </span>

      </summary>

      <p className="mt-4 text-sm leading-7 text-zinc-500">
        {answer}
      </p>

    </details>
  );
}
