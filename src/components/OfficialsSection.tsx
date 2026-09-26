import { useState, useRef, ChangeEvent } from "react";
import { Users, Mail, CheckCircle2, ZoomIn, X, Camera, RefreshCw } from "lucide-react";
import { useOfficialsPhotos } from "../utils/officerPhoto";

export function OfficialsSection() {
  const officialEmail = "pangasinan.urbiztondo@comelec.gov.ph";
  const {
    officerPhoto,
    updateOfficerPhoto,
    resetOfficerPhoto,
    isOfficerCustom,
    assistantPhoto,
    updateAssistantPhoto,
    resetAssistantPhoto,
    isAssistantCustom,
  } = useOfficialsPhotos();

  const [activePhoto, setActivePhoto] = useState<{ name: string; role: string; image: string; bio: string } | null>(null);

  const eoFileInputRef = useRef<HTMLInputElement>(null);
  const eaFileInputRef = useRef<HTMLInputElement>(null);

  const handleEoPhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          updateOfficerPhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEaPhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          updateAssistantPhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const officials = [
    {
      id: "officer",
      name: "Eric M. Austria",
      role: "Election Officer",
      roleBadge: "bg-sky-50 text-sky-800 border-sky-300 font-bold",
      image: officerPhoto,
      isCustom: isOfficerCustom,
      onUpload: handleEoPhotoUpload,
      onReset: resetOfficerPhoto,
      fileInputRef: eoFileInputRef,
      inputId: "eo-photo-upload",
      description: "Leading the Commission on Elections Municipal Office in Urbiztondo. Dedicated to conducting free, orderly, honest, peaceful, and credible elections across all 21 barangays.",
      mandate: "Municipal Electoral Administration & Legal Compliance",
      jurisdiction: "District 2, Pangasinan • 21 Barangays",
    },
    {
      id: "assistant",
      name: "Jocelyn V. Reyes",
      role: "Election Assistant II",
      roleBadge: "bg-sky-50 text-sky-800 border-sky-300 font-bold",
      image: assistantPhoto,
      isCustom: isAssistantCustom,
      onUpload: handleEaPhotoUpload,
      onReset: resetAssistantPhoto,
      fileInputRef: eaFileInputRef,
      inputId: "ea-photo-upload",
      description: "Overseeing voter registration processing, biometrics capture, record keeping, voter certification issuance, and frontline citizen assistance for Urbiztondo residents.",
      mandate: "Voters' Registration & Frontline Citizen Services",
      jurisdiction: "Office of the Election Officer • Public Desk",
    },
  ];

  return (
    <section id="officials" className="py-14 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Our Officials
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Office of the Election Officer — Urbiztondo, Pangasinan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="self-start sm:self-auto px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold border border-slate-200">
              District 2 • Municipal Hall Complex
            </span>
          </div>
        </div>

        {/* Officials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {officials.map((official) => (
            <div
              key={official.name}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
            >
              {/* Photo Frame with Hover Zoom */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div
                  onClick={() => setActivePhoto({ name: official.name, role: official.role, image: official.image, bio: official.description })}
                  className="relative cursor-pointer"
                  title="Click to view full photo"
                >
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-slate-200 group-hover:border-amber-400 shadow-md bg-slate-100 transition-all">
                    <img
                      src={official.image}
                      alt={`${official.name} - ${official.role}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div
                    className="absolute bottom-2 right-2 bg-black/60 hover:bg-black/80 text-white p-1 rounded-lg backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Enlarge portrait"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>

                  <div
                    className="absolute -top-1 -right-1 bg-emerald-500 border-2 border-white w-5 h-5 rounded-full flex items-center justify-center shadow-xs"
                    title="Active Public Service"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                </div>

                {/* Direct photo selection option for each official */}
                <div className="flex flex-col items-center gap-1.5 mt-1">
                  <label
                    htmlFor={official.inputId}
                    className="cursor-pointer text-[10px] font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-2.5 py-1 rounded-lg inline-flex items-center gap-1 transition-colors"
                    title="Insert or change photo directly without alteration"
                  >
                    <Camera className="w-3 h-3 text-sky-600" />
                    <span>{official.isCustom ? "Change Photo File" : "Insert Original Photo"}</span>
                  </label>
                  <input
                    id={official.inputId}
                    ref={official.fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={official.onUpload}
                  />

                  {official.isCustom && (
                    <button
                      onClick={official.onReset}
                      className="text-[9px] text-slate-500 hover:text-red-600 flex items-center gap-1 underline cursor-pointer"
                      title="Reset photo to default"
                    >
                      <RefreshCw className="w-2.5 h-2.5" />
                      Reset
                    </button>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {official.name}
                </h3>
                
                <div className="mt-1.5 mb-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs border ${official.roleBadge}`}>
                    {official.role}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {official.jurisdiction}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {official.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                  <div className="text-slate-500 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-[11px]">{official.mandate}</span>
                  </div>

                  <a
                    href={`mailto:${officialEmail}?subject=Attention:%20${encodeURIComponent(official.name)}`}
                    className="text-sky-600 hover:text-sky-800 font-bold inline-flex items-center gap-1 hover:underline text-xs"
                    title={`Contact ${official.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Contact Directly
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Enlarged Photo Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-200 animate-in fade-in">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 border border-slate-200 shadow-md">
              <img
                src={activePhoto.image}
                alt={activePhoto.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-black text-slate-900">{activePhoto.name}</h3>
              <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mt-0.5">{activePhoto.role}</p>
              <p className="text-xs text-slate-500 mt-2">Office of the Election Officer • Urbiztondo, Pangasinan</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
