import { useState } from "react";
import { Mail, Facebook, ExternalLink, Menu, X, Check, Copy, Calendar, ShieldCheck, CalendarCheck, ChevronDown } from "lucide-react";
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
    { label: "Quick Services", href: "#quick-services" },
    { label: "Announcements", href: "#announcements" },
    { label: "Calendar", href: "#calendar" },
    { label: "FAQ", href: "#faq" },
    { label: "Forms", href: "#forms" },
    { label: "21 Barangays", href: "#barangays" },
    { label: "Officials", href: "#officials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
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
            {/* Official designated contact URL / Email */}
            <div className="flex items-center gap-1 bg-white/10 hover:bg-white/15 px-2 py-0.5 rounded text-[11px] transition-colors">
              <Mail className="w-3 h-3 text-amber-300 shrink-0" />
              <a
                href={`mailto:${officialEmail}?subject=Inquiry%20to%20COMELEC%20Urbiztondo`}
                className="hover:underline font-mono text-blue-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-300"
                title="Click to send email"
              >
                {officialEmail}
              </a>
              <button
                onClick={handleCopyEmail}
                className="ml-1 text-slate-300 hover:text-white p-0.5 rounded cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-300"
                title="Copy email address"
                aria-label="Copy official email"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            {/* Official Facebook Link */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 hover:text-amber-200 transition-colors bg-blue-900/60 hover:bg-blue-900 px-2 py-0.5 rounded border border-blue-700/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-300"
              title="Official Facebook Page of COMELEC Urbiztondo"
            >
              <Facebook className="w-3 h-3 text-[#1877F2]" />
              <span className="hidden sm:inline">Facebook</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean, non-overlapping, shrink-0 brand lockup) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4.25rem] sm:min-h-[4.75rem] py-2.5 gap-4">
          
          {/* Brand Lockup: Strictly shrink-0, whitespace-nowrap, zero overlap */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl py-1"
          >
            <ComelecLogo className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 drop-shadow-2xs" />
            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-baseline gap-1.5 whitespace-nowrap leading-tight">
                <span className="text-base sm:text-lg font-black tracking-tight text-[#0b3b60]">
                  COMELEC CONNECT
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-sky-600">
                  Urbiztondo
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-500 whitespace-nowrap mt-0.5 leading-none">
                Office of the Election Officer • Pangasinan
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (For wide viewports, never crowding brand lockup) */}
          <nav className="hidden 2xl:flex items-center gap-4 text-xs xl:text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0b3b60] hover:underline underline-offset-8 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-1 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Medium/Large Compact Nav (for 1024px to 1535px screens) */}
          <nav className="hidden lg:flex 2xl:hidden items-center gap-3 text-xs font-semibold text-slate-600">
            <a href="#quick-services" className="hover:text-[#0b3b60] whitespace-nowrap px-1 py-1">Quick Services</a>
            <a href="#calendar" className="hover:text-[#0b3b60] whitespace-nowrap px-1 py-1">Calendar</a>
            <a href="#forms" className="hover:text-[#0b3b60] whitespace-nowrap px-1 py-1">Forms</a>
            <a href="#barangays" className="hover:text-[#0b3b60] whitespace-nowrap px-1 py-1">21 Barangays</a>
            <a href="#faq" className="hover:text-[#0b3b60] whitespace-nowrap px-1 py-1">FAQ</a>
          </nav>

          {/* Actions: Checklist & Request Appointment */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenChecklist}
              className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0b3b60] hover:bg-slate-100 rounded-xl transition-colors border border-slate-200 inline-flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 shrink-0"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Valid IDs</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 active:scale-98 rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 shrink-0"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Request Appointment</span>
            </button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex items-center gap-2 2xl:hidden lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-2.5 py-1.5 text-xs font-bold text-white bg-sky-600 rounded-xl shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 shrink-0"
            >
              Request
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Tablet Hamburger (when on lg to 2xl to access secondary links) */}
          <div className="hidden lg:flex 2xl:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              title="More navigation options"
              aria-label="More navigation options"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile/Tablet Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="2xl:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1.5 shadow-lg animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
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
              className="w-full text-left px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Voter Valid IDs &amp; Requirements</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Request an Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
