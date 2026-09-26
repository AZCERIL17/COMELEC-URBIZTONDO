import { useState, useRef, ChangeEvent } from "react";
import {
  MapPin,
  ChevronRight,
  School,
  Users,
  CheckCircle2,
  Image as ImageIcon,
  X,
  Video,
  Play,
  Plus,
  Trash2,
  RefreshCw,
  Upload,
  FileCheck2,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { BARANGAYS_DATA, BARANGAY_POP_SUMMARY } from "../data/barangays";
import { useGallery, GalleryItem } from "../utils/galleryStorage";
import { InsertMediaModal } from "./InsertMediaModal";

export function BarangaysSection() {
  const [selectedBarangayId, setSelectedBarangayId] = useState<string>("poblacion");
  const [searchTerm, setSearchTerm] = useState("");
  const [galleryModalItem, setGalleryModalItem] = useState<GalleryItem | null>(null);
  const [isInsertModalOpen, setIsInsertModalOpen] = useState(false);

  const { items: galleryItems, addItem, removeItem, resetGallery, hasCustomItems } = useGallery();
  const quickFileInputRef = useRef<HTMLInputElement>(null);

  const selectedBarangay =
    BARANGAYS_DATA.find((b) => b.id === selectedBarangayId) || BARANGAYS_DATA[0];

  const filteredBarangays = BARANGAYS_DATA.filter((b) =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const handleQuickUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isVideo = file.type.startsWith("video/");
    const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");
    const title = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);

    const reader = new FileReader();
    reader.onload = (event) => {
      const res = event.target?.result as string;
      if (res) {
        addItem({
          type: isVideo ? "video" : "image",
          title,
          subtitle: isVideo ? "Video Upload" : "Photo Upload",
          src: res,
          desc: `Uploaded on ${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`,
        });
      }
    };
    reader.readAsDataURL(file);

    // Reset input
    if (quickFileInputRef.current) {
      quickFileInputRef.current.value = "";
    }
  };

  return (
    <section id="barangays" className="py-14 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with POP Verification */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                21 Barangays • Interactive Directory
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Official Project of Precincts (POP) • Certified by Election Officer Eric M. Austria
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 flex items-center gap-1 shadow-2xs">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Project of Precincts (POP) Certified</span>
            </span>
            <span className="px-3 py-1 bg-white text-slate-700 text-xs font-semibold rounded-full border border-slate-200 shadow-2xs">
              Urbiztondo • District 2
            </span>
          </div>
        </div>

        {/* POP Master Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Barangays</div>
            <div className="text-xl font-black text-slate-900 mt-0.5">{BARANGAY_POP_SUMMARY.totalBarangays}</div>
            <div className="text-[10px] text-sky-600 font-semibold mt-0.5">All 21 Covered</div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Voting Centers</div>
            <div className="text-xl font-black text-slate-900 mt-0.5">{BARANGAY_POP_SUMMARY.totalBarangays}</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">1 Center per Barangay</div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clustered Precincts</div>
            <div className="text-xl font-black text-sky-700 mt-0.5">{BARANGAY_POP_SUMMARY.totalClusteredPrecincts}</div>
            <div className="text-[10px] text-slate-500 font-medium mt-0.5">Clusters 1 to 132</div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Established Precincts</div>
            <div className="text-xl font-black text-slate-900 mt-0.5">{BARANGAY_POP_SUMMARY.totalEstablishedPrecincts}</div>
            <div className="text-[10px] text-slate-500 font-medium mt-0.5">Total across precincts</div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Barangay Voters</div>
            <div className="text-xl font-black text-sky-600 mt-0.5">{BARANGAY_POP_SUMMARY.totalBarangayVoters.toLocaleString()}</div>
            <div className="text-[10px] text-slate-500 font-medium mt-0.5">Official POP Count</div>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">SK Registered Voters</div>
            <div className="text-xl font-black text-amber-600 mt-0.5">{BARANGAY_POP_SUMMARY.totalSkVoters.toLocaleString()}</div>
            <div className="text-[10px] text-slate-500 font-medium mt-0.5">Youth Voters</div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-16">
          
          {/* Left Column: List of 21 Barangays with Search */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search barangay name (e.g. Poblacion, Dalanguiring, Real)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="max-h-[420px] overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
              {filteredBarangays.map((b) => {
                const isSelected = b.id === selectedBarangay.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBarangayId(b.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? "bg-sky-600 text-white font-bold shadow-xs"
                        : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-amber-300" : "bg-sky-500"}`} />
                      <span className="truncate">{b.name}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 text-[11px]">
                      <span className={isSelected ? "text-sky-100" : "text-slate-500 font-semibold"}>
                        {b.registeredVoters.toLocaleString()} voters
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-slate-400"}`} />
                    </div>
                  </button>
                );
              })}

              {filteredBarangays.length === 0 && (
                <div className="py-8 text-center text-xs text-slate-400">
                  No barangay matching &ldquo;{searchTerm}&rdquo;
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-1 font-medium">
              <span>Showing {filteredBarangays.length} of 21 barangays</span>
              <span className="font-bold text-slate-700">Total 42,999 voters (60,626 with SK)</span>
            </div>
          </div>

          {/* Right Column: Selected Barangay Deep-Dive Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-1.5">
                  {selectedBarangay.status}
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  Barangay {selectedBarangay.name}
                </h3>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-2xl font-black text-sky-600">
                  {selectedBarangay.registeredVoters.toLocaleString()}
                </div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Barangay Voters • {selectedBarangay.skVoters.toLocaleString()} SK
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
              
              {/* Voting Center Card */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 col-span-1 sm:col-span-2">
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold mb-1">
                  <School className="w-4 h-4 text-sky-600" />
                  <span>Official Voting Center (POP Merged)</span>
                </div>
                <div className="text-sm font-black text-slate-900">
                  {selectedBarangay.votingCenter}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Designated polling venue for all clustered precincts under Barangay {selectedBarangay.name}
                </div>
              </div>

              {/* Clustered Precincts Card */}
              <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100">
                <div className="flex items-center gap-1.5 text-sky-700 text-[11px] font-semibold mb-1">
                  <Layers className="w-3.5 h-3.5 text-sky-600" />
                  <span>Clustered Precincts</span>
                </div>
                <div className="text-base font-black text-sky-950">
                  {selectedBarangay.clustersCount} Clusters
                </div>
                <div className="text-xs text-sky-800 font-semibold mt-0.5">
                  {selectedBarangay.clusterRange}
                </div>
                <div className="text-[11px] text-sky-600 mt-1">
                  {selectedBarangay.establishedPrecincts} Established Precincts
                </div>
              </div>

              {/* Voters Breakdown Card */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-1.5 text-amber-800 text-[11px] font-semibold mb-1">
                  <Users className="w-3.5 h-3.5 text-amber-600" />
                  <span>Voters Breakdown (POP Certified)</span>
                </div>
                <div className="flex items-baseline justify-between text-xs mt-1">
                  <span className="text-slate-600">Barangay Voters:</span>
                  <span className="font-bold text-slate-900">{selectedBarangay.registeredVoters.toLocaleString()}</span>
                </div>
                <div className="flex items-baseline justify-between text-xs mt-0.5">
                  <span className="text-slate-600">SK Youth Voters:</span>
                  <span className="font-bold text-slate-900">{selectedBarangay.skVoters.toLocaleString()}</span>
                </div>
                <div className="flex items-baseline justify-between text-xs pt-1.5 mt-1 border-t border-amber-200 font-bold text-amber-900">
                  <span>Total Electors:</span>
                  <span>{selectedBarangay.totalVoters.toLocaleString()}</span>
                </div>
              </div>

            </div>

            {/* Description & Precinct Details */}
            <div className="space-y-2 text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">Cluster Details:</strong> {selectedBarangay.clusteredPrecincts}
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-500 text-[11px]">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{selectedBarangay.riverBasinNote}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-500 text-[11px] pt-1 border-t border-slate-200/60">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Electoral Administration: {selectedBarangay.contactOfficer} • Commission on Elections</span>
              </div>
            </div>
          </div>

        </div>

        {/* COMELEC Urbiztondo Gallery with Photo & Video Insert */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  COMELEC Urbiztondo Gallery
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                  {galleryItems.length} items
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Official electoral photos, community caravans &amp; video documentation
              </p>
            </div>

            {/* Gallery Control Bar */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Insert Photo or Video Button */}
              <button
                type="button"
                onClick={() => setIsInsertModalOpen(true)}
                className="px-3.5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                title="Insert a photo or video into the gallery"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Insert Photo / Video</span>
              </button>

              {/* Direct Quick File Upload */}
              <label
                htmlFor="gallery-quick-upload"
                className="px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                title="Quickly upload a photo or video from your device"
              >
                <Upload className="w-3.5 h-3.5 text-sky-600" />
                <span>Quick Upload</span>
              </label>
              <input
                id="gallery-quick-upload"
                ref={quickFileInputRef}
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={handleQuickUpload}
              />

              {/* Reset to defaults if custom items exist */}
              {hasCustomItems && (
                <button
                  type="button"
                  onClick={resetGallery}
                  className="px-2.5 py-2 text-[11px] font-bold text-slate-500 hover:text-red-600 bg-white hover:bg-red-50 border border-slate-200 rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
                  title="Reset gallery to original default photos"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryItems.map((item) => {
              const isVideo = item.type === "video";
              return (
                <div
                  key={item.id}
                  onClick={() => setGalleryModalItem(item)}
                  className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer h-56 bg-slate-950 flex flex-col justify-end p-5 border border-slate-800"
                >
                  {/* Background Media */}
                  {isVideo ? (
                    <video
                      src={item.src}
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-70 group-hover:opacity-85 pointer-events-none"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-70 group-hover:opacity-85"
                    />
                  )}

                  {/* Contrast Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Video Play Badge in Center */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-amber-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Top Badges: Media Type & Delete if Custom */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs ${
                      isVideo
                        ? "bg-amber-500 text-slate-950"
                        : "bg-sky-600 text-white"
                    }`}>
                      {isVideo ? <Video className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                      {isVideo ? "VIDEO" : "PHOTO"}
                    </span>

                    {item.isCustom && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeItem(item.id);
                        }}
                        className="pointer-events-auto p-1.5 rounded-lg bg-black/60 hover:bg-red-600 text-white/80 hover:text-white transition-colors cursor-pointer"
                        title="Delete custom item from gallery"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10">
                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5 font-medium flex items-center gap-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Insert Photo or Video Modal */}
      <InsertMediaModal
        isOpen={isInsertModalOpen}
        onClose={() => setIsInsertModalOpen(false)}
        onAdd={addItem}
      />

      {/* Gallery Lightbox Modal (Supports Image & Video) */}
      {galleryModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
          <div className="bg-slate-900 text-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-slate-800 animate-in fade-in">
            {/* Close Button */}
            <button
              onClick={() => setGalleryModalItem(null)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/60 hover:bg-black/80 p-2 rounded-full cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Content */}
            <div className="relative w-full bg-black flex items-center justify-center min-h-[300px] max-h-[70vh]">
              {galleryModalItem.type === "video" ? (
                <video
                  src={galleryModalItem.src}
                  controls
                  autoPlay
                  className="w-full max-h-[70vh] object-contain"
                />
              ) : (
                <img
                  src={galleryModalItem.src}
                  alt={galleryModalItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[70vh] object-contain"
                />
              )}
            </div>

            {/* Details */}
            <div className="p-6 bg-slate-900 border-t border-slate-800">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${
                  galleryModalItem.type === "video" ? "bg-amber-500 text-slate-950" : "bg-sky-600 text-white"
                }`}>
                  {galleryModalItem.type === "video" ? <Video className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                  {galleryModalItem.type === "video" ? "Video Documentation" : "Photo Documentation"}
                </span>
                <span className="text-xs text-sky-400 font-semibold">• {galleryModalItem.subtitle}</span>
              </div>

              <h3 className="text-xl font-black text-white">{galleryModalItem.title}</h3>
              
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {galleryModalItem.desc ||
                  "Official electoral documentation for the Commission on Elections Municipal Office in Urbiztondo, Pangasinan."}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
