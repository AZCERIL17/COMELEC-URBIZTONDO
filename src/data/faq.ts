export interface FaqItem {
  id: string;
  category: "BSKE POSTPONEMENT (RA 12326)" | "FILING OF COC" | "REACTIVATION" | "VOTER ID" | "VOTER REGISTRATION" | "UPDATING OF VOTER RECORDS";
  question: string;
  answer: string;
  legalNote?: string;
}

export const FAQ_DATA: FaqItem[] = [
  // BSKE POSTPONEMENT (RA 12326)
  {
    id: "postpone-1",
    category: "BSKE POSTPONEMENT (RA 12326)",
    question: "Why was the November 2, 2026 BSKE postponed?",
    answer: "On September 24, 2026, President Ferdinand Marcos Jr. signed into law Republic Act No. 12326 (An Act Fixing the Term of Office of Barangay Officials and Members of the Sangguniang Kabataan to Five Years). This new law officially postpones the Barangay and Sangguniang Kabataan Elections from November 2, 2026 to the first Monday of November 2028, and extends the terms of incumbent officials from four to five years.",
    legalNote: "Republic Act No. 12326, signed Sept 24, 2026",
  },
  {
    id: "postpone-2",
    category: "BSKE POSTPONEMENT (RA 12326)",
    question: "Will the Filing of Certificates of Candidacy (COC) still proceed on Sept 28 – Oct 5, 2026?",
    answer: "NO. Following the enactment of Republic Act No. 12326, the Commission on Elections (COMELEC) officially cancelled and suspended all preparatory activities for November 2026, including the September 28 to October 5, 2026 filing of Certificates of Candidacy. A new filing schedule will be promulgated closer to the November 2028 elections.",
    legalNote: "COMELEC En Banc Policy Directive (Sept 25, 2026)",
  },
  {
    id: "postpone-3",
    category: "BSKE POSTPONEMENT (RA 12326)",
    question: "What happens to the current incumbent Barangay and SK officials?",
    answer: "Under Republic Act No. 12326, all incumbent Punong Barangays, Sangguniang Barangay Members, SK Chairpersons, and SK Members shall remain in office in a holdover capacity until their successors have been duly elected and qualified in November 2028, completing a five (5) year term.",
    legalNote: "Republic Act No. 12326, Holdover Provision",
  },
  {
    id: "postpone-4",
    category: "BSKE POSTPONEMENT (RA 12326)",
    question: "When will voter registration reopen?",
    answer: "COMELEC announced that nationwide Continuing Voter Registration will resume in the second week of November 2026 and continue until July 30, 2027. Citizens who have not yet registered or who need to update their biometrics or transfer records can visit the Office of the Election Officer in Urbiztondo.",
    legalNote: "COMELEC Resolution on Continuing Voter Registration",
  },

  // FILING OF COC
  {
    id: "coc-1",
    category: "FILING OF COC",
    question: "What was the previous COC filing schedule and why is it suspended?",
    answer: "The filing of Certificates of Candidacy (COC) was originally scheduled for September 28 to October 5, 2026 under COMELEC Resolution No. 11191. However, pursuant to the enactment of Republic Act No. 12326 on September 24, 2026, the BSKE has been rescheduled to November 2028, and COC submission is officially suspended until the new 2028 election calendar is issued.",
    legalNote: "Republic Act No. 12326 in rel. to Resolution No. 11191",
  },
  {
    id: "coc-2",
    category: "FILING OF COC",
    question: "Where will COCs be filed when the new election calendar opens?",
    answer: "When COMELEC issues the new 2028 calendar, candidates will file their COCs directly at the Office of the Election Officer (OEO), located on the 2nd Floor, Municipal Hall Building, Poblacion, Urbiztondo, Pangasinan 2414. There is no filing fee charged by COMELEC for filing a COC.",
    legalNote: "Office of the Election Officer, Urbiztondo, Pangasinan",
  },
  {
    id: "coc-3",
    category: "FILING OF COC",
    question: "What documents are required when filing a COC?",
    answer: "You must submit: (1) Five (5) original copies of the accomplished official COC form, signed personally by the candidate and sworn before a Notary Public or authorized administering officer; (2) Passport-size photographs taken within the last 6 months with name tag and signature attached to each copy; (3) A thirty-peso (₱30.00) documentary stamp affixed to one copy; (4) Certificate of Nomination and Acceptance (CONA) if running under a registered political party; (5) Valid government ID.",
    legalNote: "Omnibus Election Code Section 73 & COMELEC Rules",
  },
  {
    id: "coc-4",
    category: "FILING OF COC",
    question: "Is there a term limit for barangay and SK officials?",
    answer: "Yes. Under Section 43 of the Local Government Code, no elective local official (including Punong Barangay and Barangay Kagawad) shall serve for more than three (3) consecutive terms in the same position. For Sangguniang Kabataan (SK) candidates, applicants must be at least 18 years old but not more than 24 years of age on Election Day.",
    legalNote: "RA 7160, RA 10742 as amended by RA 11768",
  },

  // REACTIVATION
  {
    id: "react-1",
    category: "REACTIVATION",
    question: "Why was my voter registration deactivated?",
    answer: "Voter registration is deactivated pursuant to Section 27 of Republic Act No. 8189 (The Voter's Registration Act of 1996) for reasons including: (1) Failure to vote in two (2) consecutive regular elections; (2) Sentenced by final judgment to suffer imprisonment for not less than one year; (3) Loss of Filipino citizenship; or (4) Declared by competent authority to be insane or incompetent.",
    legalNote: "Republic Act No. 8189, Section 27",
  },
  {
    id: "react-2",
    category: "REACTIVATION",
    question: "How do I reactivate my voter registration?",
    answer: "To reactivate, visit the Office of the Election Officer in Urbiztondo during the continuing voter registration period (reopening November 2026 until July 30, 2027). Fill out CEF-1 (Consolidated Application Form) and check the 'Reactivation' box. Present a valid government-issued photo ID and undergo biometrics recapture if needed. Your application will be approved by the Election Registration Board (ERB).",
    legalNote: "COMELEC Voter Registration Protocols",
  },

  // VOTER ID
  {
    id: "id-1",
    category: "VOTER ID",
    question: "Does COMELEC still issue the plastic Voter's ID?",
    answer: "No. COMELEC has permanently discontinued the printing and issuance of plastic voter ID cards nationwide in compliance with Republic Act No. 11055 (Philippine Identification System Act), which established the PhilID / National ID as the single official national identification card.",
    legalNote: "COMELEC En Banc Resolution on PhilSys integration",
  },
  {
    id: "id-2",
    category: "VOTER ID",
    question: "How do I get a Voter's Certification?",
    answer: "A Voter's Certification is an official document serving as legal proof of voter registration accepted by government agencies (DFA for passports, GSIS, SSS, banks, etc.). You can request a Voter's Certification at the Urbiztondo Election Office by presenting one valid ID. Under RA 11261 (First Time Jobseekers Assistance Act) and for Senior Citizens & PWDs, issuance is completely FREE OF CHARGE upon presentation of proper credentials.",
    legalNote: "RA 11261 & COMELEC Resolution No. 10616",
  },

  // VOTER REGISTRATION
  {
    id: "reg-1",
    category: "VOTER REGISTRATION",
    question: "Who is qualified to register as a voter?",
    answer: "Any Filipino citizen who is: (1) At least 18 years old on or before Election Day; (2) A resident of the Philippines for at least one (1) year, and of the municipality of Urbiztondo, Pangasinan for at least six (6) months immediately preceding the election; and (3) Not otherwise disqualified by law.",
    legalNote: "1987 Philippine Constitution, Art. V, Sec. 1",
  },
  {
    id: "reg-2",
    category: "VOTER REGISTRATION",
    question: "How do I register as a new voter in Urbiztondo?",
    answer: "Bring an original and photocopy of any accepted valid ID (e.g., PhilSys National ID, Driver's License, Passport, SSS/GSIS/UMID, Postal ID, Student ID if enrolled, or Barangay Certification with photo) to the COMELEC Urbiztondo Office at the Municipal Hall. Fill out three (3) copies of Application Form CEF-1 and undergo live biometrics capture (fingerprints, signature, digital photo). No cedula or barangay clearance is required if you have a valid photo ID.",
    legalNote: "Resolution No. 10868 & Res. 11270",
  },
  {
    id: "reg-3",
    category: "VOTER REGISTRATION",
    question: "Can the youth register for the Sangguniang Kabataan?",
    answer: "Yes! Filipino youth who are at least fifteen (15) but less than eighteen (18) years of age on Election Day may register exclusively as SK voters. Those aged 18 to 30 will be automatically registered for BOTH the Katipunan ng Kabataan (SK) and regular Barangay elections. Please bring a PSA-issued Certificate of Live Birth or school ID to verify your exact date of birth.",
    legalNote: "Republic Act No. 10742 (Sangguniang Kabataan Reform Act)",
  },

  // UPDATING OF VOTER RECORDS
  {
    id: "rec-1",
    category: "UPDATING OF VOTER RECORDS",
    question: "How do I change my address or transfer my registration?",
    answer: "If you transferred to a new barangay within Urbiztondo, or moved to Urbiztondo from another city/municipality, visit the Urbiztondo Election Office and apply for Transfer of Registration (CEF-1 / Annex D). You must have resided in your new barangay for at least six (6) months before Election Day. Bring proof of your new address or valid ID reflecting your new residence.",
    legalNote: "RA 8189 Section 12",
  },
  {
    id: "rec-2",
    category: "UPDATING OF VOTER RECORDS",
    question: "How do I correct a misspelled name or wrong entry in my record?",
    answer: "To correct clerical errors (such as misspelling of first or last name, incorrect birthdate, or change of civil status due to marriage), submit an Application for Change/Correction of Entries along with your PSA-authenticated Birth Certificate or PSA Marriage Contract at our office.",
    legalNote: "RA 8189 Section 13",
  },
];
