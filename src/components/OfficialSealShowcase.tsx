import { ShieldCheck, Award, CheckCircle, ExternalLink } from "lucide-react";
import { IMAGES } from "../data/assets";

export function OfficialSealShowcase() {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Frame container matching Screenshot_19 */}
        <div className="relative inline-block max-w-xl w-full mx-auto bg-gradient-to-b from-amber-50/60 via-white to-amber-50/40 rounded-3xl p-6 sm:p-8 border-2 border-amber-300/80 shadow-xl">
          
          {/* Top Plaque: COMELEC URBIZTONDO • OFFICE OF THE ELECTION OFFICER */}
          <div className="mb-6 mx-auto inline-flex items-center gap-3 bg-[#0a3a22] text-amber-200 px-5 py-2 rounded-xl border-2 border-amber-400 shadow-md">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-amber-300 bg-white shrink-0">
              <img
                src={IMAGES.comelecSeal}
                alt="COMELEC Seal"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-black tracking-wider text-amber-100 uppercase">
                COMELEC URBIZTONDO
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold text-emerald-200 tracking-widest uppercase">
                OFFICE OF THE ELECTION OFFICER
              </div>
            </div>
          </div>

          {/* Large Embossed Seal Image (Matches Screenshot_19) */}
          <div className="relative mx-auto w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl bg-[#0b3b60] group">
            <img
              src={IMAGES.comelecSeal}
              alt="Commission on Elections Urbiztondo Pangasinan Official Embossed Seal"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Subtle gloss shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
          </div>

          {/* Under-Seal Typography (Matches Screenshot_19) */}
          <div className="mt-7 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Commission on Elections
            </h3>
            
            <div className="text-xs sm:text-sm font-extrabold tracking-widest text-[#0b3b60] uppercase">
              URBIZTONDO • PANGASINAN
            </div>

            {/* Gold Ribbon Badge: EST. 1940 • VOX POPULI VOX DEI */}
            <div className="pt-2">
              <span className="inline-block bg-[#0a3a22] text-amber-300 text-[11px] sm:text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-400/80 shadow-xs">
                ★ EST. 1940 • VOX POPULI VOX DEI ★
              </span>
            </div>

            <p className="text-xs text-slate-500 max-w-md mx-auto pt-2 leading-relaxed">
              Official embossed seal mounted at the Office of the Election Officer. Integrity • Transparency • Service
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
