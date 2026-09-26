/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QuickServicesSection } from "./components/QuickServicesSection";
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
      el.focus({ preventScroll: true });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col ${isLargeFont ? "text-base" : "text-sm"}`}>
      
      {/* Accessible Skip-to-Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#0b3b60] focus:text-white focus:font-bold focus:rounded-xl focus:shadow-xl focus:ring-2 focus:ring-amber-400 focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Accessibility / Dialect Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] px-4 py-1 flex items-center justify-between border-b border-slate-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="truncate">
            <span className="text-amber-400 font-bold">Maabig ya agew, Urbiztondo!</span> Serbisyong tapat para ed 21 ya barangay.
          </span>
          <div className="flex items-center gap-3 shrink-0 ml-2">
            <button
              onClick={() => setIsLargeFont(!isLargeFont)}
              className="text-slate-300 hover:text-white px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-300"
              title="Toggle font size for better readability"
            >
              Text Size: {isLargeFont ? "Large" : "Standard"}
            </button>
            <button
              onClick={() => setIsChecklistOpen(true)}
              className="text-amber-300 hover:text-amber-200 hidden sm:inline underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-300 rounded"
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
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onNavigateForms={() => scrollToSection("forms")}
          onNavigateCalendar={() => scrollToSection("calendar")}
        />

        {/* New "What do you need today?" Quick Services Section */}
        <QuickServicesSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenChecklist={() => setIsChecklistOpen(true)}
          onNavigateSection={scrollToSection}
        />

        {/* Announcements Section */}
        <Announcements />

        {/* Election Calendar & RA 12326 Postponement Advisory */}
        <ElectionCalendar />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Official Forms Section */}
        <FormsSection />

        {/* 21 Barangays Interactive Directory & Gallery */}
        <BarangaysSection />

        {/* Official Embossed Seal of COMELEC Urbiztondo */}
        <OfficialSealShowcase />

        {/* Our Officials */}
        <OfficialsSection />

        {/* Visit Us & Request an Appointment */}
        <VisitAppointmentSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Facebook Page & Community Feed Link */}
        <FacebookFeedSection />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Interactive Appointment Service Request Modal */}
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
