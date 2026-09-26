import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { X, Image as ImageIcon, Video, Upload, Link, AlertCircle, Play, CheckCircle2 } from "lucide-react";
import { GalleryItem } from "../utils/galleryStorage";

interface InsertMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (item: Omit<GalleryItem, "id" | "isCustom">) => void;
}

export function InsertMediaModal({ isOpen, onClose, onAdd }: InsertMediaModalProps) {
  const [tab, setTab] = useState<"file" | "url">("file");
  const [mediaType, setMediaType] = useState<"image" | "video">("image");
  const [mediaSrc, setMediaSrc] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [error, setError] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const isVideo = file.type.startsWith("video/");
    setMediaType(isVideo ? "video" : "image");

    if (!title) {
      // Auto-populate default title from filename
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");
      setTitle(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
    }
    if (!subtitle) {
      setSubtitle(isVideo ? "COMELEC Video Documentation" : "COMELEC Urbiztondo Photo");
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const res = event.target?.result as string;
      if (res) {
        setMediaSrc(res);
      }
    };
    reader.onerror = () => {
      setError("Failed to read file. Please try another file.");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!mediaSrc) {
      setError("Please select a photo or video to upload, or provide a URL.");
      return;
    }
    if (!title.trim()) {
      setError("Please provide a title for the media item.");
      return;
    }

    onAdd({
      type: mediaType,
      title: title.trim(),
      subtitle: subtitle.trim() || (mediaType === "video" ? "Video Documentation" : "Photo Documentation"),
      src: mediaSrc,
      desc: desc.trim() || undefined,
    });

    // Reset and close
    setMediaSrc("");
    setFileName("");
    setTitle("");
    setSubtitle("");
    setDesc("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative border border-slate-200 animate-in fade-in my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
            {mediaType === "video" ? <Video className="w-5 h-5" /> : <ImageIcon className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">
              Insert Photo or Video
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Add new media documentation to the COMELEC Urbiztondo Gallery
            </p>
          </div>
        </div>

        {/* Tab switch: File Upload vs URL */}
        <div className="flex border-b border-slate-200 mb-5 text-xs font-bold">
          <button
            type="button"
            onClick={() => setTab("file")}
            className={`flex items-center gap-1.5 pb-2.5 px-3 border-b-2 transition-colors cursor-pointer ${
              tab === "file"
                ? "border-sky-600 text-sky-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            Upload File (Device)
          </button>
          <button
            type="button"
            onClick={() => setTab("url")}
            className={`flex items-center gap-1.5 pb-2.5 px-3 border-b-2 transition-colors cursor-pointer ${
              tab === "url"
                ? "border-sky-600 text-sky-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Link className="w-3.5 h-3.5" />
            Paste Media URL
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* File Picker */}
          {tab === "file" ? (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Choose Photo or Video File
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-sky-500 rounded-2xl p-5 text-center cursor-pointer bg-slate-50/50 hover:bg-sky-50/40 transition-colors"
              >
                <div className="flex justify-center gap-2 mb-2 text-slate-400">
                  <ImageIcon className="w-6 h-6 text-sky-500" />
                  <Video className="w-6 h-6 text-amber-500" />
                </div>
                <p className="text-xs font-bold text-slate-700">
                  {fileName ? fileName : "Click to select a photo or video from your device"}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Supports JPG, PNG, WEBP, MP4, WebM (inserted as is, without alteration)
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Media Web URL
                </label>
                <div className="flex items-center gap-2 text-[11px]">
                  <label className="flex items-center gap-1 cursor-pointer text-slate-600">
                    <input
                      type="radio"
                      name="urlType"
                      checked={mediaType === "image"}
                      onChange={() => setMediaType("image")}
                    />
                    Photo
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer text-slate-600">
                    <input
                      type="radio"
                      name="urlType"
                      checked={mediaType === "video"}
                      onChange={() => setMediaType("video")}
                    />
                    Video
                  </label>
                </div>
              </div>
              <input
                type="url"
                placeholder={mediaType === "image" ? "https://example.com/photo.jpg" : "https://example.com/video.mp4"}
                value={mediaSrc}
                onChange={(e) => {
                  setMediaSrc(e.target.value);
                  setError("");
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          )}

          {/* Media Preview Box */}
          {mediaSrc && (
            <div className="relative rounded-2xl overflow-hidden bg-black max-h-48 flex items-center justify-center border border-slate-200">
              {mediaType === "video" ? (
                <video
                  src={mediaSrc}
                  controls
                  className="max-h-48 w-full object-contain"
                />
              ) : (
                <img
                  src={mediaSrc}
                  alt="Preview"
                  className="max-h-48 w-full object-cover"
                />
              )}
              <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                {mediaType === "video" ? <Video className="w-3 h-3 text-amber-400" /> : <ImageIcon className="w-3 h-3 text-sky-400" />}
                {mediaType === "video" ? "Video Preview" : "Photo Preview"}
              </span>
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Special Satellite Registration at Dalanguiring"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
            />
          </div>

          {/* Subtitle / Category */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Subtitle / Category
            </label>
            <input
              type="text"
              placeholder="e.g., Community outreach, Biometrics caravan, Youth assembly"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Brief summary or details about this event or activity..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              Insert into Gallery
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
