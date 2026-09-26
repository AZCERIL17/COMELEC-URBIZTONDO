/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Announcements } from "./components/Announcements";
import { ElectionCalendar } from "./components/ElectionCalendar";
import { FaqSection } from "./components/FaqSection";
import { FormsSection } from "./components/FormsSection";
import { BarangaysSection } from "./components/BarangaysSection";
import { OfficialSealShowcase } from "./components/OfficialSealShowcase";
import { OfficialsSection } from "./components/OfficialsSection";
import { VisitAppointmentSection } from "./components/VisitAppointmentSection";
import { FacebookFeedSection } from "./components/FacebookFeedSection";
import { Footer } from "./components/Footer";
import { AppointmentModal } from "./components/AppointmentModal";
import { VoterChecklistModal } from "./components/VoterChecklistModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isLargeFont, setIsLargeFont] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col ${isLargeFont ? "text-base" : "text-sm"}`}>
      
      {/* Accessibility / Dialect Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] px-4 py-1 flex items-center justify-between border-b border-slate-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="truncate">
            <span className="text-amber-400 font-bold">Maabig ya agew, Urbiztondo!</span> Serbisyong tapat para ed 21 ya barangay.
          </span>
          <div className="flex items-center gap-3 shrink-0 ml-2">
            <button
              onClick={() => setIsLargeFont(!isLargeFont)}
              className="text-slate-300 hover:text-white px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              title="Toggle font size for better readability"
            >
              Text Size: {isLargeFont ? "Large" : "Standard"}
            </button>
            <button
              onClick={() => setIsChecklistOpen(true)}
              className="text-amber-300 hover:text-amber-200 hidden sm:inline underline"
            >
              Valid IDs Checklist
            </button>
          </div>
        </div>
      </div>

      {/* Main Official Header */}
      <Header
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section (Matches Screenshot_1) */}
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onNavigateForms={() => scrollToSection("forms")}
          onNavigateCalendar={() => scrollToSection("calendar")}
        />

        {/* Announcements Section (Matches Screenshot_2) */}
        <Announcements />

        {/* Election Calendar 2026 (Matches Screenshot_3) */}
        <ElectionCalendar />

        {/* Frequently Asked Questions (Matches Screenshot_4) */}
        <FaqSection />

        {/* Downloadable Forms (Matches Screenshot_5) */}
        <FormsSection />

        {/* 21 Barangays Interactive Directory & Gallery (Matches Screenshot_6) */}
        <BarangaysSection />

        {/* Official Embossed Seal of COMELEC Urbiztondo (Matches Screenshot_19) */}
        <OfficialSealShowcase />

        {/* Our Officials (Matches Screenshot_7, Screenshot_8, Screenshot_9) */}
        <OfficialsSection />

        {/* Visit Us & Book Appointment (Matches Screenshot_7) */}
        <VisitAppointmentSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Facebook Page & Community Feed Link */}
        <FacebookFeedSection />
      </main>

      {/* Official Footer (Matches Screenshot_7) */}
      <Footer />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Voter Requirements & ID Checklist Modal */}
      <VoterChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />
    </div>
  );
}
