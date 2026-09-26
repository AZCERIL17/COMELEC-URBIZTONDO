export interface Announcement {
  id: string;
  tag: string;
  date: string;
  title: string;
  summary: string;
  fullBody?: string;
  source: string;
  linkText?: string;
  linkUrl?: string;
  isUrgent?: boolean;
}

export const ANNOUNCEMENTS_DATA: Announcement[] = [
  {
    id: "ann-postponement-ra12326",
    tag: "Law Enacted • Urgent",
    date: "September 25, 2026",
    title: "BSKE 2026 Postponed to November 2028 per Republic Act No. 12326",
    summary: "President Ferdinand Marcos Jr. has signed into law Republic Act No. 12326, postponing the Barangay and Sangguniang Kabataan Elections from November 2, 2026 to the first Monday of November 2028, and fixing the term of office of barangay and SK officials to five (5) years.",
    fullBody: "Following the signing of Republic Act No. 12326, the Commission on Elections (COMELEC) has suspended all preparatory activities for the previously scheduled November 2, 2026 BSKE. Crucially, the filing of Certificates of Candidacy (COC) originally scheduled for September 28 to October 5, 2026 is officially SUSPENDED. Incumbent barangay and SK officials will serve in a holdover capacity until their successors are elected in November 2028. COMELEC announced that Continuing Voter Registration will resume in the second week of November 2026 and run until July 30, 2027. The Office of the Election Officer in Urbiztondo, Pangasinan remains fully operational for frontline citizen services.",
    source: "Republic Act No. 12326 / COMELEC Advisory",
    linkText: "Read Inquirer Report",
    linkUrl: "https://newsinfo.inquirer.net/2311546/marcos-signs-into-law-bske-postponement",
    isUrgent: true,
  },
  {
    id: "ann-coc-suspended",
    tag: "Suspended",
    date: "September 25, 2026",
    title: "Suspension of Certificate of Candidacy (COC) Filing",
    summary: "In light of Republic Act No. 12326, the filing of Certificates of Candidacy (COC) for Punong Barangay, Sangguniang Barangay Member, SK Chairperson, and SK Member originally set for Sept 28 – Oct 5, 2026 is CANCELLED.",
    fullBody: "Aspiring candidates across all 21 barangays of Urbiztondo are advised that the COMELEC has suspended COC submission in compliance with the new statutory election date of November 2028. No COC filings will be received on September 28 to October 5, 2026. Aspirants are advised to keep their voter registrations active and await the promulgation of the new official calendar by the Commission En Banc.",
    source: "COMELEC En Banc Directive",
    isUrgent: true,
  },
  {
    id: "ann-voter-reg-resumption",
    tag: "Registration",
    date: "November 2026 – July 2027",
    title: "Continuing Voter Registration to Resume in November",
    summary: "COMELEC announced that nationwide Continuing Voter Registration will resume in the second week of November 2026 and run continuously until July 30, 2027.",
    fullBody: "Urbiztondo residents who have not yet registered, turned 15 or 18 years old, or need to reactivate their deactivated voter records will have an extended registration window. The Office of the Election Officer in Urbiztondo Municipal Hall will conduct regular biometrics capture, transfers, and corrections. Bring a valid government ID or PSA Birth Certificate.",
    source: "COMELEC National Announcement",
  },
  {
    id: "ann-2",
    tag: "Requirement",
    date: "Ongoing",
    title: "Birth Certificate Requirement for SK Candidates & Voters",
    summary: "Sangguniang Kabataan applicants and youth voters may be required to present a PSA-issued Certificate of Live Birth to establish age eligibility. Prepare an authentic copy before visiting the Office of the Election Officer.",
    fullBody: "Under RA 10742 as amended by RA 11768, youth voters must be at least 15 but not more than 30 years old. Candidates for SK Chairperson or Kagawad must be at least 18 but not more than 24 years old on Election Day. Please ensure your PSA birth certificate is clear and authenticated to avoid disqualification proceedings.",
    source: "RA 10742 / RA 11768",
  },
  {
    id: "ann-4",
    tag: "Community",
    date: "District 2",
    title: "Frontline Citizen Services Ongoing at Urbiztondo Municipal Hall",
    summary: "The Office of the Election Officer remains open Monday through Friday, 8:00 AM to 5:00 PM (No Noon Break) for voter certification issuance, verification, and frontline inquiries.",
    fullBody: "Despite the postponement of the BSKE, frontline government services proceed without interruption. Urbiztondo residents can obtain certified true copies of their Voter's Certification, verify their biometric status, and request electoral records directly at our office on the 2nd Floor, Urbiztondo Municipal Hall.",
    source: "OEO Urbiztondo Public Advisory",
    linkText: "View on Facebook",
    linkUrl: "https://www.facebook.com/ComelecUrbiztondoPangasinan1/",
  },
];
