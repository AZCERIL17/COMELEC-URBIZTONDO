import { Building2, MapPin, Clock, Info, Calendar, Mail, ExternalLink, CalendarCheck } from "lucide-react";
import { useOfficialsPhotos } from "../utils/officerPhoto";

interface VisitAppointmentProps {
  onOpenBooking: () => void;
}

export function VisitAppointmentSection({ onOpenBooking }: VisitAppointmentProps) {
  const { officerPhoto, assistantPhoto } = useOfficialsPhotos();
  const officialEmail = "pangasinan.urbiztondo@comelec.gov.ph";

  return (
    <section id="contact" className="py-14 bg-slate-50 border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Visit Us &amp; Request an Appointment
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Office of the Election Officer — Urbiztondo, Pangasinan
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Box: Office Information */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Office of the Election Officer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    2nd Floor, Municipal Hall Building, Poblacion<br />
                    Urbiztondo, Pangasinan 2414
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    District 2, Province of Pangasinan, Region I
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-2">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  Mon–Sat 8:00 AM – 5:00 PM <span className="text-sky-600 font-bold">(No Noon Break)</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-1">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm">
                  <a
                    href={`mailto:${officialEmail}?subject=Citizen%20Inquiry`}
                    className="font-semibold text-sky-700 hover:underline"
                  >
                    {officialEmail}
                  </a>
                </div>
              </div>

              {/* Frontline Advisory Notice */}
              <div className="mt-6 bg-sky-50/70 border border-sky-100 rounded-2xl p-4 flex items-start gap-3">
                <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-sky-900">Frontline Service Notice:</span> Walk-in applicants are welcome during all regular operating hours without noon break. Submitting an online appointment request generates a service reference slip to speed up verification at the front desk.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-400">Assisting Officials:</span>
                <div className="flex items-center -space-x-1.5">
                  <img
                    src={officerPhoto}
                    alt="Eric M. Austria"
                    title="Eric M. Austria - Election Officer"
                    className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                  <img
                    src={assistantPhoto}
                    alt="Jocelyn V. Reyes"
                    title="Jocelyn V. Reyes - Election Assistant II"
                    className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-700">Eric M. Austria &amp; Jocelyn V. Reyes</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Express Priority Lane Active
              </span>
            </div>
          </div>

          {/* Right Card: Request an Appointment CTA */}
          <div className="lg:col-span-6 bg-[#0284c7] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background subtle glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Frontline Queue Reference</span>
              </div>

              {/* Title & Deck */}
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug mb-3">
                Prepare your visit for voter certification, biometrics, or record reactivation.
              </h3>

              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mb-8 max-w-lg">
                Generate a service request reference slip to present at the Municipal Hall front desk. Note: Walk-ins are accommodated continuously without noon break.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 pt-4 border-t border-sky-400/40">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3 bg-white hover:bg-sky-50 text-[#0284c7] text-xs sm:text-sm font-extrabold rounded-xl shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request an Appointment
              </button>

              <a
                href="https://comelec.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Visit comelec.gov.ph</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
