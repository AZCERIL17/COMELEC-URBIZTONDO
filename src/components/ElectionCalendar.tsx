import { useState, useMemo } from "react";
import { Calendar as CalendarIcon, Info, Download, ExternalLink, CheckCircle2, ShieldAlert, AlertTriangle, Filter, ChevronDown, ChevronUp, FileText, Ban, AlertCircle } from "lucide-react";
import { CALENDAR_MILESTONES, PROHIBITED_ACTS_DATA, CalendarMilestone, BSKE_POSTPONEMENT_INFO } from "../data/calendar";

export function ElectionCalendar() {
  const [activeTab, setActiveTab] = useState<"bske" | "prohibitions" | "nle">("bske");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedMilestone, setSelectedMilestone] = useState<CalendarMilestone | null>(null);
  const [copiedSchedule, setCopiedSchedule] = useState(false);

  const categories = ["ALL", "Legislation", "Candidacy", "Registration", "Election Day", "Campaign", "Prohibition"];

  const getStatusBadge = (status: CalendarMilestone["status"]) => {
    switch (status) {
      case "Postponed":
        return "bg-red-100 text-red-800 border border-red-300 font-extrabold px-2.5 py-0.5";
      case "Suspended":
        return "bg-rose-100 text-rose-800 border border-rose-300 font-bold px-2.5 py-0.5 line-through";
      case "Election Day":
        return "bg-sky-600 text-white font-extrabold px-3 py-1 shadow-xs";
      case "Critical":
        return "bg-rose-50 text-rose-700 border border-rose-200 font-bold px-2.5 py-0.5";
      case "Active":
        return "bg-amber-100 text-amber-900 border border-amber-300 font-bold px-2.5 py-0.5";
      case "Post-Election":
        return "bg-amber-50 text-amber-700 border border-amber-200 font-medium px-2.5 py-0.5";
      case "Completed":
        return "bg-slate-100 text-slate-600 border border-slate-200 font-medium px-2.5 py-0.5";
      case "Upcoming":
      default:
        return "bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold px-2.5 py-0.5";
    }
  };

  const filteredMilestones = useMemo(() => {
    if (selectedCategory === "ALL") return CALENDAR_MILESTONES;
    return CALENDAR_MILESTONES.filter((m) => m.category === selectedCategory);
  }, [selectedCategory]);

  const handleExportIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//COMELEC Urbiztondo//Election Calendar RA 12326//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:COMELEC BSKE Calendar - Postponed to Nov 2028 (Urbiztondo)
BEGIN:VEVENT
SUMMARY:BSKE Postponed to November 2028 per RA 12326
DESCRIPTION:President Ferdinand Marcos Jr. signed Republic Act No. 12326 moving the BSKE to November 2028.
DTSTART:20260924T000000
DTEND:20260924T235959
LOCATION:Urbiztondo, Pangasinan
STATUS:CONFIRMED
END:VEVENT
BEGIN:VEVENT
SUMMARY:COMELEC Continuing Voter Registration Resumption
DESCRIPTION:COMELEC reopens nationwide continuing voter registration until July 30, 2027.
DTSTART:20261109T080000
DTEND:20270730T170000
LOCATION:Office of the Election Officer, Urbiztondo, Pangasinan
STATUS:CONFIRMED
END:VEVENT
BEGIN:VEVENT
SUMMARY:Next BSKE Election Day (November 2028)
DESCRIPTION:New election day for Barangay and Sangguniang Kabataan Elections under RA 12326.
DTSTART:20281106T070000
DTEND:20281106T150000
LOCATION:Urbiztondo, Pangasinan
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "comelec-urbiztondo-bske-calendar-ra12326.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCopiedSchedule(true);
    setTimeout(() => setCopiedSchedule(false), 3000);
  };

  return (
    <section id="calendar" className="py-14 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0 shadow-2xs">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Election Calendar &amp; Postponement Advisory
                </h2>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase bg-red-100 text-red-800 border border-red-300">
                  REPUBLIC ACT NO. 12326
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Official statutory schedule update based on <strong className="text-slate-700">RA 12326 signed into law on September 24, 2026</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
            <button
              onClick={handleExportIcs}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-2xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Add updated dates to Google Calendar or Outlook"
            >
              {copiedSchedule ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Calendar Exported (.ics)</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-sky-600" />
                  <span>Sync to Calendar (.ics)</span>
                </>
              )}
            </button>
            <a
              href="https://newsinfo.inquirer.net/2311546/marcos-signs-into-law-bske-postponement"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-2xs inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Read Law Postponement Report</span>
              <ExternalLink className="w-3 h-3 opacity-90" />
            </a>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("bske")}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "bske"
                ? "bg-[#0284c7] text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            BSKE Timeline &amp; Postponement Status (RA 12326)
          </button>

          <button
            onClick={() => setActiveTab("prohibitions")}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === "prohibitions"
                ? "bg-rose-600 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Prohibited Acts &amp; Statutory Guidelines
          </button>
        </div>

        {/* TAB 1: BSKE TIMELINE & POSTPONEMENT ADVISORY */}
        {activeTab === "bske" && (
          <div>
            
            {/* Major Law Postponement Banner */}
            <div className="bg-white border-2 border-red-300 rounded-3xl p-6 sm:p-7 shadow-xs mb-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Ban className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                      LEGISLATION SIGNED
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                      BSKE Postponed to November 2028
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold shadow-2xs">
                    Republic Act No. 12326
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                <div className="bg-red-50/60 p-4 rounded-2xl border border-red-100">
                  <div className="text-[11px] font-bold text-red-800 uppercase tracking-wider">Previous Date</div>
                  <div className="text-base font-black text-slate-700 line-through mt-0.5">November 2, 2026</div>
                  <div className="text-xs text-red-700 font-semibold mt-1">CANCELLED per RA 12326</div>
                </div>

                <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200">
                  <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">New Election Date</div>
                  <div className="text-base font-black text-emerald-900 mt-0.5">November 2028 (1st Monday)</div>
                  <div className="text-xs text-emerald-700 font-semibold mt-1">5-Year Term of Office</div>
                </div>

                <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200">
                  <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Sept 28 – Oct 5 COC Filing</div>
                  <div className="text-base font-black text-amber-900 mt-0.5">SUSPENDED</div>
                  <div className="text-xs text-amber-700 font-semibold mt-1">No COC filing received</div>
                </div>
              </div>

              <div className="text-xs text-slate-700 leading-relaxed space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <p>
                  <strong>Executive Summary:</strong> On September 24, 2026, President Ferdinand Marcos Jr. signed into law <strong>Republic Act No. 12326</strong> (&ldquo;An Act Fixing the Term of Office of Barangay Officials and Members of the Sangguniang Kabataan to Five Years&rdquo;). This law officially postpones the BSKE from November 2, 2026 to the first Monday of November 2028.
                </p>
                <p>
                  In compliance with RA 12326, the Commission on Elections has cancelled all activities for the November 2026 election, including the Sept 28 – Oct 5 Certificate of Candidacy filing. Incumbent officials will continue serving in a holdover capacity. Continuing Voter Registration is scheduled to reopen in the second week of November 2026 through July 30, 2027.
                </p>
                <div className="pt-1 flex items-center justify-between flex-wrap gap-2 text-[11px]">
                  <span className="text-slate-500 font-medium">Source: Inquirer News &amp; Official COMELEC Policy Announcement</span>
                  <a
                    href="https://newsinfo.inquirer.net/2311546/marcos-signs-into-law-bske-postponement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Full Inquirer Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 no-scrollbar">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#0b3b60] text-white shadow-2xs"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat === "ALL" ? "All Milestones" : cat}
                </button>
              ))}
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-[11px] font-bold tracking-wider text-slate-400 uppercase bg-slate-50/70">
                      <th scope="col" className="py-4 px-6 sm:w-1/4">
                        DATE / PERIOD
                      </th>
                      <th scope="col" className="py-4 px-6 sm:w-1/2">
                        ACTIVITY / STATUTORY PROVISION
                      </th>
                      <th scope="col" className="py-4 px-6 sm:w-1/4 text-right">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {filteredMilestones.map((item) => {
                      const isExpanded = selectedMilestone?.id === item.id;
                      return (
                        <tr
                          key={item.id}
                          onClick={() => setSelectedMilestone(isExpanded ? null : item)}
                          className={`transition-colors cursor-pointer group ${
                            isExpanded ? "bg-sky-50/60" : "hover:bg-slate-50"
                          }`}
                        >
                          <td className="py-4 px-6 font-bold text-slate-900 whitespace-nowrap align-top">
                            <div className="flex items-center gap-2">
                              <span>{item.date}</span>
                            </div>
                          </td>

                          <td className="py-4 px-6 align-top">
                            <div className="font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                              {item.activity}
                            </div>
                            <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                              {item.details}
                            </div>
                          </td>

                          <td className="py-4 px-6 text-right align-top">
                            <span className={`inline-block rounded-full text-xs ${getStatusBadge(item.status)}`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Selected Milestone Detail Modal / Accordion Drawer */}
            {selectedMilestone && (
              <div className="mt-4 p-5 bg-white border border-sky-200 rounded-2xl shadow-xs">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 uppercase">
                      {selectedMilestone.category}
                    </span>
                    <h4 className="text-lg font-black text-slate-900 mt-1">
                      {selectedMilestone.activity}
                    </h4>
                    <p className="text-xs text-sky-700 font-bold mt-0.5">
                      Period: {selectedMilestone.date}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedMilestone(null)}
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-100 rounded-lg cursor-pointer"
                  >
                    Close
                  </button>
                </div>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {selectedMilestone.details}
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                  Legal Basis: {selectedMilestone.legalBasis}
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: PROHIBITED ACTS & STATUTORY BANS */}
        {activeTab === "prohibitions" && (
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800 mb-4 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Notice on Election Prohibitions:</strong> Due to the enactment of Republic Act No. 12326 postponing the BSKE to November 2028, election-specific bans (such as gun ban and public works ban) originally set for September/October 2026 will be rescheduled in accordance with the new election calendar to be promulgated by COMELEC En Banc. Perpetual bans (such as vote-buying/selling under Kontra-Bigay) remain strictly illegal under Philippine law.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROHIBITED_ACTS_DATA.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {item.period}
                    </span>
                  </div>

                  <ul className="text-xs text-slate-700 space-y-1.5 my-3">
                    {item.prohibitedActions.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                    <strong className="text-slate-700">Statutory Basis:</strong> {item.statutoryBasis}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
