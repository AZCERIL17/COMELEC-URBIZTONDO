import { useState, useEffect } from "react";
import { ArrowRight, Calendar, ExternalLink, ShieldCheck, Mail, MapPin, Clock, UserCheck, AlertTriangle, FileCheck2, AlertCircle } from "lucide-react";
import { ComelecLogo } from "./ComelecLogo";
import { IMAGES } from "../data/assets";
import { useOfficialsPhotos } from "../utils/officerPhoto";
import { BSKE_POSTPONEMENT_INFO } from "../data/calendar";

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateForms: () => void;
  onNavigateCalendar: () => void;
}

export function Hero({ onOpenBooking, onNavigateForms, onNavigateCalendar }: HeroProps) {
  const { officerPhoto, assistantPhoto } = useOfficialsPhotos();
  const officialEmail = "pangasinan.urbiztondo@comelec.gov.ph";

  return (
    <section id="home" className="relative pt-8 sm:pt-10 pb-12 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 scroll-mt-24">
      {/* Subtle background civic pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0b3b60_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Official Statutory Postponement Alert Banner */}
        <div className="mb-6 bg-gradient-to-r from-amber-500/10 via-red-500/10 to-amber-500/10 border-2 border-red-400/80 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5 sm:mt-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-red-600 text-white">
                  OFFICIAL ADVISORY • LAW ENACTED
                </span>
                <span className="text-xs font-bold text-slate-900">
                  Republic Act No. 12326 Signed into Law
                </span>
              </div>
              <p className="text-xs text-slate-700 font-medium mt-1 leading-relaxed">
                President Ferdinand Marcos Jr. has signed <strong>RA 12326</strong> postponing the Barangay &amp; SK Elections to <strong>November 2028</strong> and fixing terms to 5 years. Filing of Certificates of Candidacy (Sept 28 – Oct 5, 2026) is <strong>SUSPENDED</strong>. The COMELEC Urbiztondo Office remains <strong>open for frontline citizen services</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <a
              href="https://newsinfo.inquirer.net/2311546/marcos-signs-into-law-bske-postponement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-red-700 hover:text-red-900 underline flex items-center gap-1"
            >
              <span>News Report</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onNavigateCalendar}
              className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              View Updated Calendar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Hero Title & Key Actions (Matches Screenshot_1) */}
          <div className="lg:col-span-7 pt-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a2e4c] tracking-tight leading-[1.08] mb-4">
              COMELEC CONNECT
              <span className="block text-[#0284c7]">Urbiztondo</span>
              <span className="block text-[#0a2e4c]">Pangasinan</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-8">
              <span className="font-semibold text-slate-900">Serbisyong Tapat, Halalang Maayos</span> — Connecting communities with modern, secure, and transparent electoral services for all 21 barangays.
            </p>

            {/* Quick Action Badges / CTAs (Matches Screenshot_1) */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                <span>Request an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onNavigateForms}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold rounded-2xl border border-slate-300/80 shadow-2xs hover:shadow-xs transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span>Official Forms (CEF-1)</span>
              </button>

              <button
                type="button"
                onClick={onNavigateCalendar}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold rounded-2xl border border-slate-300/80 shadow-2xs hover:shadow-xs transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>Election Timeline &amp; RA 12326</span>
              </button>
            </div>

            {/* 3 Metric Summary Cards (Matches Screenshot_1 with updated POP count) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
                <div className="text-3xl font-extrabold text-[#0a2e4c] tracking-tight tabular-nums">
                  21
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  Barangays
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  100% District 2 Coverage
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
                <div className="text-3xl font-extrabold text-[#0a2e4c] tracking-tight tabular-nums">
                  42,999
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  Registered voters
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Official COMELEC POP count
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all">
                <div className="text-3xl font-extrabold text-emerald-700 tracking-tight">
                  Open
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  Frontline services
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Mon – Fri (No Noon Break)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Municipal Leadership & Postponement Status Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#07243c] via-[#0b3b60] to-[#041c30] rounded-3xl p-6 sm:p-7 text-white shadow-xl border border-sky-900/50 relative overflow-hidden">
              
              {/* Top Accent Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-xs font-semibold text-sky-200 border border-white/10 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Municipal Election Leadership</span>
              </div>

              {/* Office Leadership Photos */}
              <div className="space-y-4 mb-6">
                {/* Election Officer: Eric M. Austria */}
                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-amber-400/90 shadow-md shrink-0 bg-slate-800">
                    <img
                      src={officerPhoto}
                      alt="Eric M. Austria, Election Officer"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                      Election Officer
                    </div>
                    <div className="text-lg font-black text-white leading-tight">
                      Eric M. Austria
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Office of the Election Officer • Urbiztondo
                    </div>
                  </div>
                </div>

                {/* Team Mini-Directory (Election Assistant) */}
                <div className="grid grid-cols-1 gap-2 pt-1">
                  <a
                    href="#officials"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/15 p-1.5 rounded-xl border border-white/10 transition-colors group"
                  >
                    <img
                      src={assistantPhoto}
                      alt="Jocelyn V. Reyes, Election Assistant II"
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-lg object-cover border border-amber-300/80 shadow-xs shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate group-hover:text-amber-300">
                        Jocelyn V. Reyes
                      </div>
                      <div className="text-[10px] text-sky-200 truncate">
                        Election Assistant II • Frontline Desk
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Split Box: BSKE Postponement Status & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 rounded-2xl p-4 border border-white/10 mb-5">
                {/* BSKE Postponement Status */}
                <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-3">
                  <div className="text-[10px] font-bold tracking-wider text-amber-300 uppercase mb-1 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>BSKE STATUS</span>
                  </div>
                  <div className="text-2xl font-black text-red-300 tracking-tight leading-none">
                    POSTPONED
                  </div>
                  <div className="text-[11px] font-bold text-white mt-1">
                    To November 2028
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5">
                    Republic Act No. 12326
                  </div>
                </div>

                {/* Contact Information */}
                <div className="sm:pl-1 flex flex-col justify-center">
                  <div className="text-[10px] font-bold tracking-wider text-slate-300 uppercase mb-1.5">
                    CONTACT OFFICE
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-200">
                    <a
                      href={`mailto:${officialEmail}`}
                      className="flex items-center gap-1.5 text-sky-200 hover:text-white hover:underline truncate"
                      title={officialEmail}
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{officialEmail}</span>
                    </a>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Municipal Hall Complex</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statutory Notice */}
              <div className="text-[11px] text-slate-300 flex items-start gap-1.5 bg-black/20 p-2.5 rounded-xl border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  COC Filing (Sept 28 – Oct 5, 2026) is <strong>SUSPENDED</strong>. Voter registration resumes November 2026 through July 2027.
                </span>
              </div>

              {/* Quick Action Button inside card */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Voter Certification / Assistance</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
