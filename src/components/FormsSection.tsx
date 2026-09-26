import { useState } from "react";
import { FileText, ExternalLink, CheckCircle, X, ShieldCheck, AlertCircle, AlertTriangle } from "lucide-react";
import { FORMS_DATA, DownloadableForm } from "../data/forms";

export function FormsSection() {
  const [selectedForm, setSelectedForm] = useState<DownloadableForm | null>(null);
  const [redirectToast, setRedirectToast] = useState<string | null>(null);

  const cocForms = FORMS_DATA.filter((f) => f.category === "CERTIFICATE OF CANDIDACY");
  const voterForms = FORMS_DATA.filter((f) => f.category === "VOTER REGISTRATION FORMS");

  const handleOpenSource = (form: DownloadableForm) => {
    setRedirectToast(form.title);
    setTimeout(() => setRedirectToast(null), 4000);

    // Safely open the official COMELEC forms portal
    window.open("https://comelec.gov.ph", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="forms" className="py-14 bg-white border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Official Electoral Forms
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Verified references connecting to the central COMELEC repository at comelec.gov.ph
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-sky-50 text-sky-800 text-xs font-bold rounded-full border border-sky-200 flex items-center gap-1.5 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Official COMELEC Repository</span>
            </span>
          </div>
        </div>

        {/* Official-Source Verification Strip */}
        <div className="mb-8 bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <span>Official Source Verification Strip</span>
                <span className="text-[10px] text-emerald-700 font-extrabold uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Integrity Verified
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                To guarantee authenticity and avoid outdated revisions, all legal CEF documents, oaths, and candidacy templates are accessed directly from the Commission on Elections central portal. This site does not host local PDF mirrors.
              </p>
            </div>
          </div>

          <a
            href="https://comelec.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 bg-white hover:bg-sky-50 border border-sky-200 rounded-xl transition-colors shrink-0 flex items-center gap-1 shadow-2xs"
          >
            <span>comelec.gov.ph</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Success toast if opened */}
        {redirectToast && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center justify-between animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Opening official COMELEC source for <strong>{redirectToast}</strong>. Please ensure all submitted copies are notarized with documentary stamps.
              </span>
            </div>
            <button
              onClick={() => setRedirectToast(null)}
              className="text-emerald-700 hover:text-emerald-900 font-bold ml-2 p-1 cursor-pointer"
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        )}

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Column 1: Certificate of Candidacy */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-sky-600" />
                <span>CERTIFICATE OF CANDIDACY FORMS</span>
              </div>
              <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                Filing Suspended per RA 12326
              </span>
            </div>

            <div className="space-y-4">
              {cocForms.map((form) => (
                <div
                  key={form.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-[10px] font-semibold text-slate-500 uppercase tracking-wide bg-slate-100 px-2 py-0.5 rounded mb-1.5">
                        {form.badge}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {form.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {form.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedForm(form)}
                      className="text-xs font-bold text-slate-600 hover:text-sky-700 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-1.5 py-0.5"
                    >
                      View Instructions
                    </button>
                    <button
                      onClick={() => handleOpenSource(form)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-1.5 py-0.5"
                    >
                      <span>Open Official COMELEC Source</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Voter Registration Forms */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-sky-600" />
                <span>VOTER REGISTRATION FORMS</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Resuming Nov 2026
              </span>
            </div>

            <div className="space-y-4">
              {voterForms.map((form) => (
                <div
                  key={form.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-[10px] font-semibold text-slate-500 uppercase tracking-wide bg-slate-100 px-2 py-0.5 rounded mb-1.5">
                        {form.badge}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {form.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {form.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedForm(form)}
                      className="text-xs font-bold text-slate-600 hover:text-sky-700 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-1.5 py-0.5"
                    >
                      View Instructions
                    </button>
                    <button
                      onClick={() => handleOpenSource(form)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 cursor-pointer hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-1.5 py-0.5"
                    >
                      <span>Open Official COMELEC Source</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Warning / Reminder Box */}
        <div className="mt-8 bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <span className="font-bold">Official Document Protocol:</span> Always access the latest official version directly from{" "}
            <a
              href="https://comelec.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-amber-950 inline-flex items-center gap-0.5"
            >
              comelec.gov.ph <ExternalLink className="w-3 h-3" />
            </a>
            . Submitted application forms must be printed on legal-size paper (8.5&quot; x 13&quot; or 8.5&quot; x 14&quot;), filled out legibly, and signed personally before the election officer or authorized administering official.
          </p>
        </div>

      </div>

      {/* Form Instructions Modal */}
      {selectedForm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="form-instruction-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-in fade-in">
            <button
              onClick={() => setSelectedForm(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
              aria-label="Close instructions modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] font-bold text-sky-700 uppercase bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
              {selectedForm.badge}
            </span>

            <h3 id="form-instruction-title" className="text-lg font-black text-slate-900 mt-2 mb-1">
              {selectedForm.title}
            </h3>

            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              {selectedForm.description}
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-5">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Required Attachments &amp; Submission Rules:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {selectedForm.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedForm(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleOpenSource(selectedForm);
                  setSelectedForm(null);
                }}
                className="px-4 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span>Open Official Form on comelec.gov.ph</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
