import { useState } from "react";
import { Megaphone, ExternalLink, Calendar, X, FileText, Facebook } from "lucide-react";
import { ANNOUNCEMENTS_DATA, Announcement } from "../data/announcements";

export function Announcements() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  const getTagStyle = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "elections":
        return "text-sky-700 bg-sky-50 border-sky-200";
      case "requirement":
        return "text-indigo-700 bg-indigo-50 border-indigo-200";
      case "advisory":
        return "text-amber-700 bg-amber-50 border-amber-200";
      default:
        return "text-emerald-700 bg-emerald-50 border-emerald-200";
    }
  };

  return (
    <section id="announcements" className="py-12 bg-white border-b border-slate-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matches Screenshot_2) */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-sky-600 flex items-center justify-center shrink-0">
            <Megaphone className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Announcements
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Latest advisories from the Office of the Election Officer
            </p>
          </div>
        </div>

        {/* 3 Announcement Cards Grid (Matches Screenshot_2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ANNOUNCEMENTS_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAnnouncement(item)}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Meta row: Tag and Date */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className={`px-2.5 py-0.5 rounded-md font-semibold border ${getTagStyle(item.tag)}`}>
                    {item.tag}
                  </span>
                  <span className="text-slate-400 font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Card Footer action */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-sky-600 font-semibold">
                <span>Read official details</span>
                <span className="text-slate-400 font-normal group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Live Facebook Updates Link */}
        <div className="mt-6 text-center">
          <a
            href="https://www.facebook.com/ComelecUrbiztondoPangasinan1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#0b3b60] bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-full border border-slate-200 transition-colors"
          >
            <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
            Follow our Facebook Page for real-time daily bulletins and barangay visit dates
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

      </div>

      {/* Advisory Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              aria-label="Close advisory"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold mb-3">
              <span className={`px-2.5 py-0.5 rounded-md border ${getTagStyle(selectedAnnouncement.tag)}`}>
                {selectedAnnouncement.tag}
              </span>
              <span className="text-slate-500">{selectedAnnouncement.date}</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
              {selectedAnnouncement.title}
            </h3>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700 leading-relaxed space-y-3 mb-6">
              <p>{selectedAnnouncement.summary}</p>
              {selectedAnnouncement.fullBody && (
                <p className="text-xs text-slate-600">{selectedAnnouncement.fullBody}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
              <span>Legal Basis: {selectedAnnouncement.source}</span>
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
