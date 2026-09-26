import { Mail, Facebook, ExternalLink, ShieldCheck, MapPin } from "lucide-react";
import { ComelecLogo } from "./ComelecLogo";

export function Footer() {
  const officialEmail = "pangasinan.urbiztondo@comelec.gov.ph";
  const facebookUrl = "https://www.facebook.com/ComelecUrbiztondoPangasinan1/";

  return (
    <footer className="bg-[#051c2e] text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand & Mission (Matches Screenshot_7) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <ComelecLogo className="w-10 h-10 shrink-0" />
              <div>
                <div className="text-base font-black text-white tracking-tight">
                  COMELEC Urbiztondo
                </div>
                <div className="text-xs font-semibold text-sky-400">
                  Office of the Election Officer
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Serving the Municipality of Urbiztondo, Pangasinan for the Barangay &amp; SK Elections 2026.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-white font-semibold text-xs border border-blue-500/30 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                Official Facebook Page
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href={`mailto:${officialEmail}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs border border-white/10 transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                {officialEmail}
              </a>
            </div>
          </div>

          {/* Quick Links (Matches Screenshot_7) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-wider uppercase text-white mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#announcements" className="text-slate-400 hover:text-white transition-colors">
                  Announcements
                </a>
              </li>
              <li>
                <a href="#calendar" className="text-slate-400 hover:text-white transition-colors">
                  Election Calendar
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#forms" className="text-slate-400 hover:text-white transition-colors">
                  Forms
                </a>
              </li>
              <li>
                <a href="#barangays" className="text-slate-400 hover:text-white transition-colors">
                  21 Barangays Directory
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Office Details (Matches Screenshot_7) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black tracking-wider uppercase text-white mb-4">
              OFFICE
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Municipal Hall Bldg., Poblacion<br />
                  Urbiztondo, Pangasinan 2414
                </span>
              </p>
              <p className="pt-1">
                Hours: Mon–Sat 8:00 AM – 5:00 PM<br />
                <span className="text-emerald-400 text-[11px]">No noon break</span>
              </p>
              <p className="pt-1">
                <a
                  href="https://comelec.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline flex items-center gap-1"
                >
                  comelec.gov.ph <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box (Matches Screenshot_7) */}
        <div className="border-t border-slate-800/80 pt-6 mt-6">
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-4xl">
            This is an informational portal for the Office of the Election Officer, Urbiztondo. Election data reflects COMELEC Resolution No. 11191 (BSKE calendar &amp; prohibited acts), RA 12232 (Election Day &amp; four-year term), and COMELEC Resolution No. 11207 (term limits). For official transactions, always refer to comelec.gov.ph.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
            <div>
              © 2026 COMELEC Urbiztondo. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="#home" className="hover:text-slate-300">Back to Top ↑</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
