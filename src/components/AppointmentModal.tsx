import { useState } from "react";
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, MapPin, Printer, Send, ShieldCheck } from "lucide-react";
import { BARANGAYS_DATA } from "../data/barangays";
import { IMAGES } from "../data/assets";
import { useOfficialsPhotos } from "../utils/officerPhoto";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const { officerPhoto, assistantPhoto } = useOfficialsPhotos();
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [service, setService] = useState("New Voter Registration (Regular 18+)");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [barangay, setBarangay] = useState("Poblacion");
  const [priorityStatus, setPriorityStatus] = useState("None (Regular)");
  const [preferredDate, setPreferredDate] = useState("2026-10-01");
  const [preferredTime, setPreferredTime] = useState("09:00 AM – 11:00 AM");
  const [referenceCode, setReferenceCode] = useState("");

  const officialEmail = "pangasinan.urbiztondo@comelec.gov.ph";

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `URB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceCode(randomCode);
    setStep("confirmed");
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`[Appointment Request] ${service} - ${fullName} (${referenceCode})`);
    const body = encodeURIComponent(
      `To: Commission on Elections - Urbiztondo, Pangasinan\n` +
      `Office of the Election Officer\n\n` +
      `APPOINTMENT REQUEST DETAILS:\n` +
      `Reference Code: ${referenceCode}\n` +
      `Full Name: ${fullName}\n` +
      `Contact Number: ${contactNumber}\n` +
      `Email: ${email}\n` +
      `Barangay: ${barangay}, Urbiztondo, Pangasinan\n` +
      `Service Requested: ${service}\n` +
      `Priority Lane: ${priorityStatus}\n` +
      `Preferred Schedule: ${preferredDate} at ${preferredTime}\n\n` +
      `Thank you.`
    );
    window.location.href = `mailto:${officialEmail}?subject=${subject}&body=${body}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Book an Appointment
                </h3>
                <p className="text-xs text-slate-500">
                  Office of the Election Officer • Urbiztondo, Pangasinan
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Service Selection */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Transaction / Service Needed *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                >
                  <option value="New Voter Registration (Regular 18+)">New Voter Registration (Regular 18+)</option>
                  <option value="SK Youth Voter Registration (15 to 30 yrs old)">SK Youth Voter Registration (15 to 30 yrs old)</option>
                  <option value="Reactivation of Deactivated Voter Record">Reactivation of Deactivated Voter Record</option>
                  <option value="Transfer of Registration to Urbiztondo">Transfer of Registration to Urbiztondo</option>
                  <option value="Correction of Name / Change of Status">Correction of Name / Change of Status</option>
                  <option value="Issuance of Voter's Certification">Issuance of Voter&apos;s Certification</option>
                  <option value="Certificate of Candidacy (COC) Filing Consultation">Certificate of Candidacy (COC) Filing Consultation</option>
                </select>
              </div>

              {/* Citizen Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Full Name (As shown on ID) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Juan Dela Cruz"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0917-XXX-XXXX"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Barangay of Residence *
                  </label>
                  <select
                    value={barangay}
                    onChange={(e) => setBarangay(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {BARANGAYS_DATA.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Priority Lane */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Express Priority Lane
                </label>
                <select
                  value={priorityStatus}
                  onChange={(e) => setPriorityStatus(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="None (Regular)">None (Regular Queue)</option>
                  <option value="Senior Citizen (60+ yrs old)">Senior Citizen (60+ yrs old)</option>
                  <option value="Person with Disability (PWD)">Person with Disability (PWD)</option>
                  <option value="Pregnant Woman">Pregnant Woman</option>
                  <option value="First-Time Youth Voter">First-Time Youth Voter</option>
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Preferred Date (Mon–Sat) *
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="08:00 AM – 10:00 AM">08:00 AM – 10:00 AM (Morning Batch)</option>
                    <option value="10:00 AM – 12:00 PM">10:00 AM – 12:00 PM (Midday Batch)</option>
                    <option value="01:00 PM – 03:00 PM">01:00 PM – 03:00 PM (Afternoon Batch)</option>
                    <option value="03:00 PM – 05:00 PM">03:00 PM – 05:00 PM (Closing Batch)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 text-slate-500 leading-relaxed text-[11px] bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-700">Office Location:</span> Municipal Hall Building, Poblacion, Urbiztondo. Open Mon–Sat 8:00 AM – 5:00 PM without noon break.
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Generate Appointment Pass
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-2">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              Appointment Slip Prepared
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Present this reference code or email confirmation at the COMELEC Urbiztondo front desk.
            </p>

            {/* Reference Badge */}
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-6 text-left space-y-2">
              <div className="flex items-center justify-between border-b border-sky-100 pb-2">
                <span className="text-xs font-semibold text-slate-500">Booking Reference</span>
                <span className="font-mono text-base font-black text-[#0b3b60]">
                  {referenceCode}
                </span>
              </div>
              <div className="text-xs text-slate-700 space-y-1 pt-1">
                <div><span className="font-bold">Applicant:</span> {fullName}</div>
                <div><span className="font-bold">Service:</span> {service}</div>
                <div><span className="font-bold">Barangay:</span> {barangay}, Urbiztondo</div>
                <div><span className="font-bold">Assigned Voting Center:</span> {BARANGAYS_DATA.find((b) => b.name === barangay)?.votingCenter || "Municipal Voting Center"}</div>
                <div><span className="font-bold">Schedule:</span> {preferredDate} ({preferredTime})</div>
                <div><span className="font-bold">Priority:</span> {priorityStatus}</div>
              </div>

              <div className="pt-2 border-t border-sky-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium">Assisting Team:</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center -space-x-1">
                    <img
                      src={officerPhoto}
                      alt="Eric M. Austria"
                      title="Eric M. Austria, Election Officer"
                      className="w-5 h-5 rounded-full object-cover border border-white"
                    />
                    <img
                      src={assistantPhoto}
                      alt="Jocelyn V. Reyes"
                      title="Jocelyn V. Reyes, Election Assistant II"
                      className="w-5 h-5 rounded-full object-cover border border-white"
                    />
                  </div>
                  <span className="font-bold text-slate-700">Eric M. Austria &amp; Jocelyn V. Reyes</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleSendEmail}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold rounded-xl shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Email to {officialEmail}
              </button>

              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                Print Appointment Slip
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 text-slate-500 hover:text-slate-800 text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
