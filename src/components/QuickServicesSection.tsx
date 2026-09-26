import { FileCheck, MapPin, FileText, CalendarCheck, Calendar, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";

interface QuickServicesSectionProps {
  onOpenBooking: () => void;
  onOpenChecklist: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function QuickServicesSection({
  onOpenBooking,
  onOpenChecklist,
  onNavigateSection,
}: QuickServicesSectionProps) {
  const services = [
    {
      id: "appointment-req",
      title: "Request an Appointment",
      description: "Generate a front-desk service reference slip for faster in-person queueing at the municipal office.",
      icon: CalendarCheck,
      badge: "Frontline Queue",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      action: onOpenBooking,
      actionText: "Request Service Slip",
    },
    {
      id: "voter-cert",
      title: "Voter's Certification",
      description: "Official legal proof of registration accepted by DFA, banks, and government agencies. Free for Seniors, PWDs, & Jobseekers.",
      icon: FileCheck,
      badge: "No Noon Break",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      action: onOpenBooking,
      actionText: "Request Certification",
    },
    {
      id: "barangay-dir",
      title: "Find Your Voting Center",
      description: "Explore all 21 barangays, 132 clustered precincts, and verified voting venues under the 2026 POP.",
      icon: MapPin,
      badge: "21 Barangays",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      action: () => onNavigateSection("barangays"),
      actionText: "View 21 Barangays",
    },
    {
      id: "forms-repo",
      title: "Official COMELEC Forms",
      description: "Access verified application links for CEF-1, transfer, correction of entries, and candidacy forms on comelec.gov.ph.",
      icon: FileText,
      badge: "comelec.gov.ph",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      action: () => onNavigateSection("forms"),
      actionText: "Open Forms Source",
    },
    {
      id: "election-cal",
      title: "Statutory Calendar & RA 12326",
      description: "Official advisory regarding BSKE postponement to November 2028 and continuing registration resumption.",
      icon: Calendar,
      badge: "RA 12326 Advisory",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      action: () => onNavigateSection("calendar"),
      actionText: "Check Timeline",
    },
    {
      id: "valid-ids",
      title: "Accepted Valid IDs",
      description: "Photo-matched checklist of government IDs, PhilID, and birth certificate rules for live biometrics.",
      icon: ShieldCheck,
      badge: "ID Checklist",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      action: onOpenChecklist,
      actionText: "View Valid IDs",
    },
  ];

  return (
    <section id="quick-services" className="py-12 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Frontline Citizen Hub
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              What do you need today?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Direct access to electoral services, verified directories, and official guidelines for Urbiztondo voters.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>Municipal Hall open Mon–Sat 8AM–5PM (No Noon Break)</span>
          </div>
        </div>

        {/* 6 Quick Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-sky-50 text-sky-700 flex items-center justify-center border border-slate-200/70 group-hover:border-sky-200 transition-colors shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${svc.badgeColor}`}>
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60">
                  <button
                    type="button"
                    onClick={svc.action}
                    className="w-full py-2 px-3 text-xs font-bold text-sky-700 group-hover:text-white bg-white group-hover:bg-sky-600 rounded-xl border border-sky-200 group-hover:border-transparent transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                  >
                    <span>{svc.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
