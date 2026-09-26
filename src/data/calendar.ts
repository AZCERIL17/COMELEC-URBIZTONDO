export interface CalendarMilestone {
  id: string;
  date: string;
  activity: string;
  category: "Registration" | "Candidacy" | "Campaign" | "Prohibition" | "Election Day" | "Post-Election" | "Legislation";
  status: "Completed" | "Upcoming" | "Critical" | "Election Day" | "Post-Election" | "Active" | "Suspended" | "Postponed";
  statusColor: string;
  details: string;
  prohibitedActs?: string[];
  legalBasis: string;
}

export interface ProhibitedActPeriod {
  id: string;
  period: string;
  title: string;
  prohibitedActions: string[];
  exemptions: string;
  statutoryBasis: string;
  isSuspended?: boolean;
}

export const BSKE_POSTPONEMENT_INFO = {
  isPostponed: true,
  law: "Republic Act No. 12326",
  lawTitle: "An Act Fixing the Term of Office of Barangay Officials and Members of the Sangguniang Kabataan to Five Years",
  signingDate: "September 24, 2026",
  signedBy: "President Ferdinand R. Marcos Jr.",
  previousElectionDate: "November 2, 2026",
  newElectionDate: "November 2028 (First Monday of November 2028)",
  termYears: 5,
  cocFilingStatus: "SUSPENDED / CANCELLED",
  voterRegistrationResumption: "2nd Week of November 2026 until July 30, 2027",
  sourceUrl: "https://newsinfo.inquirer.net/2311546/marcos-signs-into-law-bske-postponement",
  summary: "Republic Act No. 12326 officially moves the next Barangay and Sangguniang Kabataan Elections from November 2, 2026 to November 2028 and extends the term of incumbent officials from four to five years. COMELEC has suspended all preparatory activities including the Sept 28 – Oct 5, 2026 COC filing.",
};

export const CALENDAR_MILESTONES: CalendarMilestone[] = [
  {
    id: "ra12326-enactment",
    date: "September 24, 2026",
    activity: "Republic Act No. 12326 Enacted — BSKE Postponed to November 2028",
    category: "Legislation",
    status: "Postponed",
    statusColor: "bg-red-50 text-red-800 border-red-300 font-extrabold",
    details: "President Ferdinand Marcos Jr. signed Republic Act No. 12326 postponing the BSKE to the first Monday of November 2028 and fixing the term of barangay and SK officials to five (5) years. In response, COMELEC suspended preparatory activities for November 2026.",
    legalBasis: "Republic Act No. 12326 (Amending RA 12232)",
  },
  {
    id: "coc-filing-suspended",
    date: "Sept 28 – Oct 5, 2026",
    activity: "Filing of Certificates of Candidacy (COCs) — [SUSPENDED / CANCELLED]",
    category: "Candidacy",
    status: "Suspended",
    statusColor: "bg-rose-100 text-rose-800 border-rose-300 line-through font-bold",
    details: "SUSPENDED pursuant to Republic Act No. 12326. No certificates of candidacy will be accepted on Sept 28 – Oct 5, 2026. Aspiring candidates will file under the new calendar to be issued by COMELEC En Banc for the November 2028 elections.",
    legalBasis: "COMELEC En Banc Issuance in rel. to RA 12326",
  },
  {
    id: "voter-reg-resumption-2026",
    date: "November 2026 – July 30, 2027",
    activity: "Resumption of Nationwide Continuing Voter Registration",
    category: "Registration",
    status: "Upcoming",
    statusColor: "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold",
    details: "COMELEC will reopen continuing voter registration starting the second week of November 2026 through July 30, 2027. Citizens who need to register, reactivate records, or update biometrics can do so at the Office of the Election Officer in Urbiztondo.",
    legalBasis: "COMELEC Policy Announcement (Sept 25, 2026)",
  },
  {
    id: "bske-election-day-2028",
    date: "November 2028 (1st Monday)",
    activity: "NEW SCHEDULE: BSKE Election Day (Republic Act No. 12326)",
    category: "Election Day",
    status: "Upcoming",
    statusColor: "bg-sky-600 text-white font-extrabold shadow-xs",
    details: "Official nationwide election day for Barangay and Sangguniang Kabataan officials pursuant to the newly enacted 5-year term law. Incumbent officials remain in office in a hold-over capacity until their successors qualify.",
    legalBasis: "Republic Act No. 12326, Section 1",
  },
  {
    id: "voter-reg-past",
    date: "Oct 20, 2025 – May 18, 2026",
    activity: "Previous Voter Registration Period",
    category: "Registration",
    status: "Completed",
    statusColor: "bg-slate-100 text-slate-700 border-slate-300 font-medium",
    details: "Initial voter registration cycle conducted at the Office of the Election Officer, Urbiztondo Municipal Hall, establishing the Project of Precincts (42,999 regular voters, 17,627 SK voters).",
    legalBasis: "COMELEC Resolution No. 11191",
  },
  {
    id: "original-election-day",
    date: "Nov 2, 2026",
    activity: "Original BSKE Election Day — [POSTPONED]",
    category: "Election Day",
    status: "Postponed",
    statusColor: "bg-slate-100 text-slate-500 border-slate-300 line-through",
    details: "Originally scheduled BSKE date under RA 12232. Postponed to November 2028 by Republic Act No. 12326 signed on September 24, 2026.",
    legalBasis: "Amended by Republic Act No. 12326",
  },
];

export const PROHIBITED_ACTS_DATA: ProhibitedActPeriod[] = [
  {
    id: "gun-ban-period",
    period: "Awaiting New Resolution for 2028",
    title: "Nationwide Gun Ban & Security Detail Restrictions",
    prohibitedActions: [
      "Bearing, carrying, or transporting firearms or other deadly weapons in public places without official COMELEC Certificate of Authority (CA).",
      "Employing, availing, or engaging the services of security personnel or bodyguards by candidates.",
      "Transporting firearms, ammunition, or explosives components.",
      "Organization or maintenance of reaction forces, strike forces, or armed groups."
    ],
    exemptions: "Regular officers of the PNP, AFP, and law enforcement agencies in full uniform on active duty with COMELEC exemption.",
    statutoryBasis: "COMELEC Calendar rules to be re-promulgated under RA 12326",
    isSuspended: true,
  },
  {
    id: "public-works-ban-period",
    period: "Awaiting New Resolution for 2028",
    title: "Ban on Public Works & Release of Public Funds",
    prohibitedActions: [
      "Release, disbursement, or expenditure of public funds for public works, social welfare assistance, or relief packages.",
      "Construction of public works and delivery of materials for public infrastructure projects.",
      "Hiring of new employees, creation of new positions, promotions, or granting salary increases in any government office."
    ],
    exemptions: "Routine ongoing maintenance and emergency projects certified by COA/COMELEC.",
    statutoryBasis: "OEC Sec. 261 (v)(w) (applicable during active election periods)",
    isSuspended: true,
  },
  {
    id: "vote-buying-period",
    period: "Perpetually Active & During Election Periods",
    title: "Anti-Vote Buying & Vote Selling (Kontra-Bigay)",
    prohibitedActions: [
      "Giving, offering, or promising money or anything of value to induce a voter to vote for or against any candidate.",
      "Soliciting, receiving, or accepting money, food, or groceries in exchange for a vote.",
      "Digital / e-wallet bulk cash transfers with suspicious vote-buying patterns (GCash, Maya, etc.).",
      "Possession of envelopes with cash and sample ballots on election day."
    ],
    exemptions: "Strictly non-exempt. Violation is a felony election offense carrying 1-6 years imprisonment and disqualification.",
    statutoryBasis: "Omnibus Election Code & COMELEC Committee on Kontra-Bigay",
  },
  {
    id: "liquor-ban-period",
    period: "Election Eve & Election Day (48 Hours of Next BSKE)",
    title: "Nationwide Liquor Ban",
    prohibitedActions: [
      "Selling, furnishing, offering, buying, serving, or drinking intoxicating liquor anywhere in the Philippines during election eve and day.",
      "Operating bars, drinking lounges, or open stores selling alcohol."
    ],
    exemptions: "DOT-accredited hotels and tourist establishments with foreign tourists, upon written COMELEC permit.",
    statutoryBasis: "OEC Sec. 261 (dd)",
  },
];
