import { useState } from "react";
import { X, CheckCircle2, AlertTriangle, ShieldCheck, FileCheck, HelpCircle } from "lucide-react";

interface VoterChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoterChecklistModal({ isOpen, onClose }: VoterChecklistModalProps) {
  const [tab, setTab] = useState<"ids" | "coc" | "sk">("ids");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Official Requirements &amp; ID Guide
            </h3>
            <p className="text-xs text-slate-500">
              Verified compliance under COMELEC Resolution No. 11270 &amp; RA 8189
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-5">
          <button
            onClick={() => setTab("ids")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              tab === "ids" ? "bg-[#0b3b60] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Accepted Valid IDs
          </button>
          <button
            onClick={() => setTab("coc")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              tab === "coc" ? "bg-[#0b3b60] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            COC Filing Checklist
          </button>
          <button
            onClick={() => setTab("sk")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              tab === "sk" ? "bg-[#0b3b60] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            SK Youth Eligibility
          </button>
        </div>

        {/* Tab 1: IDs */}
        {tab === "ids" && (
          <div className="space-y-4 text-xs">
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4">
              <h4 className="font-bold text-emerald-900 text-sm mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ACCEPTED Valid Government Photo IDs:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                <li className="flex items-center gap-2">✓ PhilID / National ID (Physical or ePhilID)</li>
                <li className="flex items-center gap-2">✓ Philippine Passport</li>
                <li className="flex items-center gap-2">✓ Driver&apos;s License (LTO)</li>
                <li className="flex items-center gap-2">✓ SSS / GSIS / UMID Card</li>
                <li className="flex items-center gap-2">✓ Postal ID (PVC Card)</li>
                <li className="flex items-center gap-2">✓ Student ID / School ID with enrollment form</li>
                <li className="flex items-center gap-2">✓ Senior Citizen / PWD ID</li>
                <li className="flex items-center gap-2">✓ PRC Professional License</li>
                <li className="flex items-center gap-2">✓ IBP / OWWA / OFW ID</li>
                <li className="flex items-center gap-2">✓ Barangay Certification with Photo</li>
              </ul>
            </div>

            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4">
              <h4 className="font-bold text-rose-900 text-sm mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                STRICTLY NOT ACCEPTED as proof of identity:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-rose-800">
                <li className="flex items-center gap-2">✕ Community Tax Certificate (Cedula)</li>
                <li className="flex items-center gap-2">✕ Police Clearance alone</li>
                <li className="flex items-center gap-2">✕ Barangay Clearance without photograph</li>
                <li className="flex items-center gap-2">✕ PhilHealth ID without biometric photo</li>
                <li className="flex items-center gap-2">✕ TIN Card (old non-photo card)</li>
                <li className="flex items-center gap-2">✕ Company IDs of unregistered private firms</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: COC */}
        {tab === "coc" && (
          <div className="space-y-4 text-xs text-slate-700">
            <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4 space-y-2">
              <h4 className="font-bold text-sky-900 text-sm">
                Checklist for Filing Certificate of Candidacy (BSKE 2026):
              </h4>
              <ol className="list-decimal pl-4 space-y-1.5 leading-relaxed">
                <li><strong>Five (5) Original accomplished copies</strong> of the official Certificate of Candidacy form (no photocopies of signatures).</li>
                <li><strong>Passport-size photograph</strong> taken within the last six (6) months with printed name and signature at the bottom, attached to each copy.</li>
                <li><strong>Thirty-peso (₱30.00) documentary stamp</strong> affixed to the primary copy.</li>
                <li><strong>Notarized or sworn</strong> personally by the candidate before a Notary Public, Judge, or Election Officer.</li>
                <li><strong>CONA</strong> (Certificate of Nomination and Acceptance) if running under a registered political party.</li>
                <li><strong>Special Power of Attorney (SPA)</strong> if submitted through an authorized representative.</li>
              </ol>
            </div>
          </div>
        )}

        {/* Tab 3: SK */}
        {tab === "sk" && (
          <div className="space-y-4 text-xs text-slate-700">
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2">
              <h4 className="font-bold text-amber-950 text-sm">
                Sangguniang Kabataan (SK) Age &amp; Residency Rules:
              </h4>
              <ul className="space-y-2 leading-relaxed">
                <li>• <strong>SK Voter:</strong> At least 15 but less than 18 years old on Election Day (November 2, 2026) for youth-only ballot; 18 to 30 years old gets both SK &amp; Barangay ballots.</li>
                <li>• <strong>SK Candidate:</strong> Must be at least 18 years old but not more than 24 years old on Election Day.</li>
                <li>• <strong>Anti-Dynasty Rule:</strong> An SK candidate must not be related within the second civil degree of consanguinity or affinity to any incumbent elective national or municipal official (Mayor, Vice Mayor, Councilor, Punong Barangay, Kagawad).</li>
                <li>• <strong>Birth Certificate:</strong> PSA-authenticated Certificate of Live Birth must be prepared.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
}
