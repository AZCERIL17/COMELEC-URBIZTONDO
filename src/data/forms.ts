export interface DownloadableForm {
  id: string;
  category: "CERTIFICATE OF CANDIDACY" | "VOTER REGISTRATION FORMS";
  badge: string;
  title: string;
  description: string;
  fileSize: string;
  downloadUrl: string;
  officialSource: string;
  requirements: string[];
}

export const FORMS_DATA: DownloadableForm[] = [
  // CERTIFICATE OF CANDIDACY
  {
    id: "coc-punong-barangay",
    category: "CERTIFICATE OF CANDIDACY",
    badge: "COC — Punong Barangay",
    title: "Certificate of Candidacy for Punong Barangay",
    description: "Official COC form for candidates seeking the position of Punong Barangay in the 2026 BSKE.",
    fileSize: "284 KB",
    downloadUrl: "https://comelec.gov.ph",
    officialSource: "comelec.gov.ph",
    requirements: [
      "5 original accomplished copies of COC",
      "Passport-size photo with printed name and signature",
      "₱30.00 Documentary Stamp affixed to original",
      "Sworn before a Notary Public / Authorized Officer",
      "Valid Government Issued ID"
    ]
  },
  {
    id: "coc-barangay-kagawad",
    category: "CERTIFICATE OF CANDIDACY",
    badge: "COC — Barangay Kagawad",
    title: "Certificate of Candidacy for Sangguniang Barangay Member",
    description: "Official COC form for candidates for Sangguniang Barangay (Barangay Kagawad).",
    fileSize: "278 KB",
    downloadUrl: "https://comelec.gov.ph",
    officialSource: "comelec.gov.ph",
    requirements: [
      "5 original accomplished copies of COC",
      "Passport-size photo with printed name and signature",
      "₱30.00 Documentary Stamp affixed to original",
      "Sworn before a Notary Public / Authorized Officer",
      "Valid Government Issued ID"
    ]
  },
  {
    id: "coc-sk-chairperson",
    category: "CERTIFICATE OF CANDIDACY",
    badge: "COC — SK Chairperson",
    title: "Certificate of Candidacy for SK Chairperson",
    description: "Official COC form for Sangguniang Kabataan Chairperson candidates.",
    fileSize: "290 KB",
    downloadUrl: "https://comelec.gov.ph",
    officialSource: "comelec.gov.ph",
    requirements: [
      "Must be 18 to 24 years old on Election Day",
      "PSA Authenticated Certificate of Live Birth",
      "No relationship within 2nd degree of consanguinity/affinity to incumbent officials",
      "5 original accomplished copies of COC with photos",
      "₱30.00 Documentary Stamp affixed"
    ]
  },
  {
    id: "coc-sk-kagawad",
    category: "CERTIFICATE OF CANDIDACY",
    badge: "COC — SK Kagawad",
    title: "Certificate of Candidacy for SK Member",
    description: "Official COC form for Sangguniang Kabataan (SK Kagawad) candidates.",
    fileSize: "275 KB",
    downloadUrl: "https://comelec.gov.ph",
    officialSource: "comelec.gov.ph",
    requirements: [
      "Must be 18 to 24 years old on Election Day",
      "PSA Authenticated Certificate of Live Birth",
      "No relationship within 2nd degree of consanguinity/affinity to incumbent officials",
      "5 original accomplished copies of COC with photos",
      "₱30.00 Documentary Stamp affixed"
    ]
  },

  // VOTER REGISTRATION FORMS
  {
    id: "cef-1",
    category: "VOTER REGISTRATION FORMS",
    badge: "CEF-1 (Revised 2026)",
    title: "Application for Registration",
    description: "The consolidated application form for new registration, transfer, reactivation, and correction of entries.",
    fileSize: "410 KB",
    downloadUrl: "https://comelec.gov.ph",
    officialSource: "comelec.gov.ph",
    requirements: [
      "Valid Government ID with photo and signature",
      "Proof of at least 6 months residency in Urbiztondo",
      "3 original printed copies (do not sign in advance; sign before Election Officer)",
      "Live biometrics capture at Urbiztondo OEO"
    ]
  },
  {
    id: "annex-b",
    category: "VOTER REGISTRATION FORMS",
    badge: "Annex B",
    title: "Supplementary Data Form",
    description: "Supplementary information sheet filed together with the application for registration.",
    fileSize: "195 KB",
    downloadUrl: "https://comelec.gov.ph",
    officialSource: "comelec.gov.ph",
    requirements: [
      "Accomplished alongside CEF-1",
      "Detailed address history & civil status updates"
    ]
  },
  {
    id: "annex-c",
    category: "VOTER REGISTRATION FORMS",
    badge: "Annex C",
    title: "Application for Reactivation",
    description: "Form to restore a deactivated registration record to active status.",
    fileSize: "215 KB",
    downloadUrl: "https://comelec.gov.ph",
    officialSource: "comelec.gov.ph",
    requirements: [
      "Valid Government Photo ID",
      "Affidavit of non-disqualification (if requested)",
      "Biometric capture verification"
    ]
  },
  {
    id: "annex-d",
    category: "VOTER REGISTRATION FORMS",
    badge: "Annex D",
    title: "Application for Transfer / Correction of Entries",
    description: "Form used to transfer registration or correct erroneous entries in the voter record.",
    fileSize: "230 KB",
    downloadUrl: "https://comelec.gov.ph",
    officialSource: "comelec.gov.ph",
    requirements: [
      "Valid Government ID showing new address or correct name",
      "PSA Birth Certificate / PSA Marriage Contract for name correction",
      "Proof of 6-month residence in new barangay"
    ]
  },
  {
    id: "ovf-1b",
    category: "VOTER REGISTRATION FORMS",
    badge: "OVF 1B 2025",
    title: "Overseas Voting Form (Information Booklet)",
    description: "Registration and information form for qualified overseas Filipino voters.",
    fileSize: "512 KB",
    downloadUrl: "https://comelec.gov.ph",
    officialSource: "comelec.gov.ph",
    requirements: [
      "Valid Philippine Passport",
      "Proof of overseas residence or employment visa"
    ]
  },
];
