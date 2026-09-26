import { useState } from "react";
import { Mail, Facebook, ExternalLink, Menu, X, Check, Copy, Calendar, ShieldCheck } from "lucide-react";
import { ComelecLogo } from "./ComelecLogo";

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenChecklist: () => void;
}

export function Header({ onOpenBooking, onOpenChecklist }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const officialEmail = "pangasinan.urbiztondo@comelec.gov.ph";
  const facebookUrl = "https://www.facebook.com/ComelecUrbiztondoPangasinan1/";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Announcements", href: "#announcements" },
    { label: "Calendar", href: "#calendar" },
    { label: "FAQ", href: "#faq" },
    { label: "Forms", href: "#forms" },
    { label: "Barangays", href: "#barangays" },
    { label: "Our Officials", href: "#officials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top GovPH & Municipal Office Official Banner */}
      <div className="bg-[#0b3b60] text-slate-100 text-xs px-4 py-1.5 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wide text-amber-300 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              GOVPH
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-slate-200 hidden sm:inline">Republic of the Philippines • Commission on Elections</span>
            <span className="text-slate-400 hidden md:inline">·</span>
            <span className="text-blue-200 hidden md:inline font-medium">District 2, Pangasinan</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Official designated contact URL / Email requested by user */}
            <div className="flex items-center gap-1 bg-white/10 hover:bg-white/15 px-2 py-0.5 rounded text-[11px] transition-colors">
              <Mail className="w-3 h-3 text-amber-300 shrink-0" />
              <a
                href={`mailto:${officialEmail}?subject=Inquiry%20to%20COMELEC%20Urbiztondo`}
                className="hover:underline font-mono text-blue-100"
                title="Click to send email"
              >
                {officialEmail}
              </a>
              <button
                onClick={handleCopyEmail}
                className="ml-1 text-slate-300 hover:text-white p-0.5 rounded cursor-pointer"
                title="Copy email address"
                aria-label="Copy official email"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            {/* Official Facebook Link requested by user */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 hover:text-amber-200 transition-colors bg-blue-900/60 hover:bg-blue-900 px-2 py-0.5 rounded border border-blue-700/50"
              title="Official Facebook Page of COMELEC Urbiztondo"
            >
              <Facebook className="w-3 h-3 text-[#1877F2]" />
              <span className="hidden sm:inline">Facebook</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Lockup (Matches Screenshot_1) */}
          <a href="#home" className="flex items-center gap-3 group">
            <ComelecLogo className="w-12 h-12" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0b3b60]">
                  COMELEC CONNECT
                </span>
                <span className="text-sm sm:text-base font-bold text-sky-600">
                  Urbiztondo • Pangasinan
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Office of the Election Officer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0b3b60] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Checklist & Book Appointment (Matches Screenshot_1) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenChecklist}
              className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0b3b60] hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Requirements
            </button>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] active:scale-98 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#0284c7] rounded-lg shadow-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChecklist();
              }}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Voter & Candidate Requirements Checklist
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-lg shadow-xs"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
