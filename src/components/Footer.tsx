import { Mail, Facebook, ExternalLink, ShieldCheck, MapPin, AlertCircle } from "lucide-react";
import { ComelecLogo } from "./ComelecLogo";

export function Footer() {
  const officialEmail = "pangasinan.urbiztondo@comelec.gov.ph";
  const facebookUrl = "https://www.facebook.com/ComelecUrbiztondoPangasinan1/";

  return (
    <footer className="bg-[#051c2e] text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <ComelecLogo className="w-10 h-10 shrink-0" />
              <div>
                <div className="text-base font-black text-white tracking-tight">
                  COMELEC Urbiztondo
                </div>
                <div className="text-xs font-semibold text-sky-400">
                  Office of the Election Officer • Pangasinan District 2
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Serving the 21 barangays of Urbiztondo, Pangasinan with transparent, accessible, and certified frontline electoral services.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-white font-semibold text-xs border border-blue-500/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                Official Facebook Page
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href={`mailto:${officialEmail}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs border border-white/10 transition-colors font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                {officialEmail}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-wider uppercase text-white mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#quick-services" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400">
                  What Do You Need Today?
                </a>
              </li>
              <li>
                <a href="#announcements" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400">
                  Announcements &amp; Advisories
                </a>
              </li>
              <li>
                <a href="#calendar" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400">
                  Election Calendar &amp; RA 12326
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#forms" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400">
                  Official Forms Repository
                </a>
              </li>
              <li>
                <a href="#barangays" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400">
                  21 Barangays POP Directory
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400">
                  Request an Appointment / Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Office Details */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-wider uppercase text-white mb-4">
              OFFICE HOURS &amp; VENUE
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  2nd Floor, Municipal Hall Building<br />
                  Poblacion, Urbiztondo, Pangasinan 2414
                </span>
              </p>
              <p className="pt-1">
                Hours: Mon–Sat 8:00 AM – 5:00 PM<br />
                <span className="text-emerald-400 text-[11px] font-semibold">Continuous Service • No Noon Break</span>
              </p>
              <p className="pt-1">
                <a
                  href="https://comelec.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                >
                  comelec.gov.ph <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="border-t border-slate-800/80 pt-6 mt-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-4 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-200">Time-Sensitive Statutory Verification Notice:</strong> Philippine election dates, candidacy periods, and statutory guidelines are subject to legislative enactments (such as Republic Act No. 12326 signed on September 24, 2026, postponing the BSKE to November 2028 and fixing official terms to 5 years), judicial orders, and Commission on Elections En Banc resolutions. All citizens and prospective candidates must verify time-sensitive timelines against the latest official issuances published on{" "}
              <a
                href="https://comelec.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 hover:underline font-semibold"
              >
                comelec.gov.ph
              </a>{" "}
              or posted at the Office of the Election Officer, Urbiztondo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
            <div>
              © 2026 Commission on Elections — Office of the Election Officer, Urbiztondo, Pangasinan.
            </div>
            <div className="flex items-center gap-4">
              <a href="#home" className="hover:text-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
