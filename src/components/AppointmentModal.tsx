import { useState, useMemo } from "react";
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, MapPin, Printer, Send, ShieldCheck, AlertCircle, Info } from "lucide-react";
import { BARANGAYS_DATA } from "../data/barangays";
import { useOfficialsPhotos } from "../utils/officerPhoto";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const { officerPhoto, assistantPhoto } = useOfficialsPhotos();
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [service, setService] = useState("Issuance of Voter's Certification");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [barangay, setBarangay] = useState("Poblacion");
  const [priorityStatus, setPriorityStatus] = useState("None (Regular Queue)");
  
  // Calculate today's date in YYYY-MM-DD
  const todayStr = useMemo(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const [preferredDate, setPreferredDate] = useState(todayStr);
  const [preferredTime, setPreferredTime] = useState("09:00 AM – 11:00 AM");
  const [referenceCode, setReferenceCode] = useState("");

  const officialEmail = "pangasinan.urbiztondo@comelec.gov.ph";

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `REQ-URB-${Date.now().toString().slice(-4)}-${Math.floor(100 + Math.random() * 900)}`;
    setReferenceCode(randomCode);
    setStep("confirmed");
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`[Service Request Reference ${referenceCode}] ${service} - ${fullName}`);
    const body = encodeURIComponent(
      `To: Commission on Elections - Urbiztondo, Pangasinan\n` +
      `Office of the Election Officer\n\n` +
      `CITIZEN APPOINTMENT SERVICE REQUEST SLIP:\n` +
      `Reference Number: ${referenceCode}\n` +
      `Status: Request Submitted / Pending Front Desk Presentation\n` +
      `Full Name: ${fullName}\n` +
      `Contact Number: ${contactNumber}\n` +
      `Email: ${email || "Not provided"}\n` +
      `Barangay of Residence: ${barangay}, Urbiztondo, Pangasinan\n` +
      `Service Requested: ${service}\n` +
      `Priority Queue: ${priorityStatus}\n` +
      `Target Visit Date: ${preferredDate} (${preferredTime})\n\n` +
      `Note: Citizen understands that this is a pre-visit service slip to speed up verification at the Urbiztondo Municipal Hall front desk and does not represent an automated calendar slot reservation.\n\n` +
      `Thank you.`
    );
    window.location.href = `mailto:${officialEmail}?subject=${subject}&body=${body}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const selectedBarangayInfo = BARANGAYS_DATA.find((b) => b.name === barangay);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
          aria-label="Close appointment request modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 id="appointment-modal-title" className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Request an Appointment
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Office of the Election Officer • Urbiztondo, Pangasinan
                </p>
              </div>
            </div>

            {/* Clear Availability & Operational Notice */}
            <div className="mb-5 p-3.5 bg-sky-50/80 border border-sky-200 rounded-2xl text-[11px] text-sky-900 flex items-start gap-2.5 leading-relaxed">
              <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-sky-950">Notice on Service Requests:</strong> This form generates a <strong>Service Request Reference Slip</strong> to facilitate front-desk queueing and document preparation upon your arrival. It does not reflect live slot capacity or automated booking. Frontline services run continuously from <strong>8:00 AM to 5:00 PM without noon break</strong>.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Service Selection */}
              <div>
                <label htmlFor="apt-service" className="block font-bold text-slate-700 mb-1">
                  Transaction / Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  id="apt-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus:bg-white transition-colors"
                  required
                >
                  <option value="Issuance of Voter's Certification">Issuance of Voter&apos;s Certification</option>
                  <option value="New Voter Registration (Regular 18+)">New Voter Registration (Regular 18+)</option>
                  <option value="SK Youth Voter Registration (15 to 30 yrs old)">SK Youth Voter Registration (15 to 30 yrs old)</option>
                  <option value="Reactivation of Deactivated Voter Record">Reactivation of Deactivated Voter Record</option>
                  <option value="Transfer of Registration to Urbiztondo">Transfer of Registration to Urbiztondo</option>
                  <option value="Correction of Name / Change of Status">Correction of Name / Change of Status</option>
                  <option value="Frontline Electoral Inquiries / Verification">Frontline Electoral Inquiries / Verification</option>
                </select>
              </div>

              {/* Citizen Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="apt-name" className="block font-bold text-slate-700 mb-1">
                    Full Name (As shown on Valid ID) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="apt-name"
                    type="text"
                    required
                    placeholder="e.g. Juan Dela Cruz"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="apt-contact" className="block font-bold text-slate-700 mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="apt-contact"
                    type="tel"
                    required
                    placeholder="0917-XXX-XXXX"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="apt-email" className="block font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    id="apt-email"
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="apt-brgy" className="block font-bold text-slate-700 mb-1">
                    Barangay of Residence <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="apt-brgy"
                    value={barangay}
                    onChange={(e) => setBarangay(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus:bg-white"
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
                <label htmlFor="apt-priority" className="block font-bold text-slate-700 mb-1">
                  Express Priority Lane (Republic Act No. 10366 / RA 7432)
                </label>
                <select
                  id="apt-priority"
                  value={priorityStatus}
                  onChange={(e) => setPriorityStatus(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus:bg-white"
                >
                  <option value="None (Regular Queue)">None (Regular Queue)</option>
                  <option value="Senior Citizen (60+ yrs old)">Senior Citizen (60+ yrs old)</option>
                  <option value="Person with Disability (PWD)">Person with Disability (PWD)</option>
                  <option value="Pregnant Woman">Pregnant Woman</option>
                  <option value="First-Time Youth Voter">First-Time Youth Voter</option>
                </select>
              </div>

              {/* Date and Time (Prevent Past Dates) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="apt-date" className="block font-bold text-slate-700 mb-1">
                    Target Visit Date (Mon–Sat) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="apt-date"
                    type="date"
                    required
                    min={todayStr}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus:bg-white"
                  />
                  <span className="text-[10px] text-slate-400 mt-0.5 block">
                    Dates prior to today cannot be selected
                  </span>
                </div>

                <div>
                  <label htmlFor="apt-time" className="block font-bold text-slate-700 mb-1">
                    Target Time Window <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="apt-time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus:bg-white"
                  >
                    <option value="08:00 AM – 10:00 AM">08:00 AM – 10:00 AM (Morning Batch)</option>
                    <option value="10:00 AM – 12:00 PM">10:00 AM – 12:00 PM (Midday Batch)</option>
                    <option value="01:00 PM – 03:00 PM">01:00 PM – 03:00 PM (Afternoon Batch)</option>
                    <option value="03:00 PM – 05:00 PM">03:00 PM – 05:00 PM (Closing Batch)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 text-slate-600 leading-relaxed text-[11px] bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800">Physical Office Venue:</span> 2nd Floor, Municipal Hall Building, Poblacion, Urbiztondo, Pangasinan. Open Mon–Sat 8:00 AM – 5:00 PM with zero noon break.
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  Generate Service Request Reference
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation / Request Reference Screen */
          <div className="text-center py-1">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-2xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Service Request Reference Generated
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-5">
              Present this reference code or email copy upon arrival at the Urbiztondo Election Office front desk.
            </p>

            {/* Reference Badge */}
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-5 text-left space-y-2">
              <div className="flex items-center justify-between border-b border-sky-100 pb-2.5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Service Request Reference</span>
                  <span className="font-mono text-lg font-black text-[#0b3b60]">
                    {referenceCode}
                  </span>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-extrabold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Ready for Presentation
                </span>
              </div>

              <div className="text-xs text-slate-700 space-y-1.5 pt-1">
                <div><span className="font-bold text-slate-900">Applicant:</span> {fullName}</div>
                <div><span className="font-bold text-slate-900">Requested Service:</span> {service}</div>
                <div><span className="font-bold text-slate-900">Barangay:</span> {barangay}, Urbiztondo, Pangasinan</div>
                <div><span className="font-bold text-slate-900">Target Schedule:</span> {preferredDate} ({preferredTime})</div>
                <div><span className="font-bold text-slate-900">Queue Category:</span> {priorityStatus}</div>
                
                {selectedBarangayInfo && (
                  <div className="pt-1.5 border-t border-sky-100 text-[11px] text-slate-600">
                    <span className="font-bold text-slate-800">Barangay Polling Venue (POP Directory):</span> {selectedBarangayInfo.votingCenter}
                    <span className="block text-[10px] text-slate-400 mt-0.5">
                      Note: Voting centers are designated schools used exclusively on election day, not an office appointment location.
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-sky-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium">Receiving Office:</span>
                <span className="font-bold text-slate-700">Office of the Election Officer, Urbiztondo</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={handleSendEmail}
                className="w-full sm:w-auto px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl shadow-xs inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Email Reference to Office</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Request Slip</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 text-slate-500 hover:text-slate-800 text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors"
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
